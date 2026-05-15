import type { VercelRequest, VercelResponse } from '@vercel/node';

const TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const ADMIN_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

async function sendMessage(chatId: number | string, text: string, keyboard?: object) {
  const body: Record<string, unknown> = { chat_id: chatId, text, parse_mode: 'HTML' };
  if (keyboard) body.reply_markup = keyboard;
  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

async function callAI(systemPrompt: string, userMessage: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return '';

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      max_tokens: 400,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
      ],
    }),
  });

  if (!res.ok) return '';
  const data = await res.json() as { choices: Array<{ message: { content: string } }> };
  return data.choices?.[0]?.message?.content ?? '';
}

const SYSTEM_PROMPT = `Ты — консультант студии дизайна и ремонта Dark Matter Studio (Санкт-Петербург и Москва).

О студии:
- 7 лет на рынке, 84 завершённых объекта, 0 срывов сроков
- Основатели: Никита Антонов (управляющий партнёр, образование СПбГАСУ) и Анастасия Антонова (главный дизайнер)
- Специализация: квартиры класса бизнес и премиум, ремонт под ключ
- Цены: дизайн-проект от 2 500 ₽/м², ремонт под ключ от 25 000 ₽/м²
- Гарантия: 2 года на все работы, 5 лет на инженерные системы
- Сайт: darkmatterint.ru

Твоя задача:
1. Отвечать на вопросы о стоимости, сроках, процессе работы — кратко и конкретно
2. Если человек хочет обсудить проект — попроси оставить имя и телефон
3. Не придумывай факты, которых нет в описании выше
4. Пиши по-русски, без излишней формальности. Максимум 3-4 предложения в ответе.
5. Если вопрос не про ремонт/дизайн — мягко переведи разговор на тему студии`;

// Simple in-memory state (works for low traffic, resets on cold start)
const sessions: Record<string, { step: string; name?: string }> = {};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(200).json({ ok: true });

  const update = req.body;
  const msg = update?.message;
  if (!msg) return res.status(200).json({ ok: true });

  const chatId = msg.chat.id;
  const text: string = msg.text ?? '';
  const firstName = msg.from?.first_name ?? 'друг';

  const session = sessions[chatId] ?? { step: 'idle' };
  sessions[chatId] = session;

  // /start
  if (text === '/start') {
    session.step = 'idle';
    await sendMessage(chatId,
      `Привет, ${firstName}! 👋\n\nЯ консультант <b>Dark Matter Studio</b> — студии дизайна и ремонта.\n\nМогу ответить на вопросы о стоимости, сроках и процессе работы. Или сразу оставьте заявку — мы свяжемся в течение дня.`,
      {
        keyboard: [
          [{ text: '💰 Сколько стоит ремонт?' }],
          [{ text: '⏱ Сколько времени?' }, { text: '🏗 Что входит в «под ключ»?' }],
          [{ text: '📋 Оставить заявку' }],
        ],
        resize_keyboard: true,
      }
    );
    return res.status(200).json({ ok: true });
  }

  // Lead collection flow
  if (text === '📋 Оставить заявку' || session.step === 'ask_name' || session.step === 'ask_phone') {
    if (text === '📋 Оставить заявку') {
      session.step = 'ask_name';
      await sendMessage(chatId, 'Как вас зовут?');
      return res.status(200).json({ ok: true });
    }

    if (session.step === 'ask_name') {
      session.name = text;
      session.step = 'ask_phone';
      await sendMessage(chatId, `${text}, укажите ваш номер телефона — мы перезвоним:`,
        { keyboard: [[{ text: '📱 Отправить мой номер', request_contact: true }]], resize_keyboard: true, one_time_keyboard: true });
      return res.status(200).json({ ok: true });
    }

    if (session.step === 'ask_phone') {
      const phone = msg.contact?.phone_number ?? text;
      session.step = 'idle';

      // Notify admin
      await sendMessage(ADMIN_CHAT_ID,
        `🏠 <b>Новая заявка через бота</b>\n\n👤 <b>Имя:</b> ${session.name ?? '—'}\n📞 <b>Телефон:</b> ${phone}\n\n<i>Источник: Telegram-бот</i>`
      );

      await sendMessage(chatId, `Отлично! Мы получили вашу заявку и свяжемся с вами в ближайшее время.\n\nЕсли хотите ускорить — позвоните: <a href="tel:+79119117532">+7 911 911-75-32</a>`,
        { remove_keyboard: true });
      sessions[chatId] = { step: 'idle' };
      return res.status(200).json({ ok: true });
    }
  }

  // Quick answers for keyboard buttons
  const quickAnswers: Record<string, string> = {
    '💰 Сколько стоит ремонт?': 'Дизайн-проект — от <b>2 500 ₽/м²</b>.\nРемонт под ключ — от <b>25 000 ₽/м²</b> с материалами.\n\nКвартира 60 м² обходится в среднем 1,5–2,5 млн ₽. Точную смету составляем после бесплатного выезда на объект.',
    '⏱ Сколько времени?': 'Квартира 50–70 м² — <b>4–6 месяцев</b>.\nКвартира 100–150 м² — <b>6–9 месяцев</b>.\n\nСрок фиксируется в договоре. Если нарушаем — несём финансовую ответственность.',
    '🏗 Что входит в «под ключ»?': 'Всё: дизайн-проект → закупка материалов → черновые работы → электрика, сантехника → чистовая отделка → мебель → клининг.\n\nВы получаете готовую квартиру с ключами. Без дополнительных трат и беготни.',
  };

  if (quickAnswers[text]) {
    await sendMessage(chatId, quickAnswers[text]);
    return res.status(200).json({ ok: true });
  }

  // AI response (if ANTHROPIC_API_KEY is set) or fallback
  const aiReply = await callAI(SYSTEM_PROMPT, text);

  if (aiReply) {
    await sendMessage(chatId, aiReply);
  } else {
    // Fallback without AI
    await sendMessage(chatId,
      'Хороший вопрос! Лучше всего это обсудить лично — так мы сразу разберём все детали вашего проекта.\n\nЗвоните: <a href="tel:+79119117532">+7 911 911-75-32</a>\nИли оставьте заявку — мы перезвоним.',
      { keyboard: [[{ text: '📋 Оставить заявку' }]], resize_keyboard: true }
    );
  }

  return res.status(200).json({ ok: true });
}
