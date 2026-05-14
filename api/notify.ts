import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return res.status(200).json({ ok: true, skipped: true });
  }

  const { name, phone, address, area, budget } = req.body ?? {};

  const lines = [
    '🏠 <b>Новая заявка — Dark Matter Studio</b>',
    '',
    `👤 <b>Имя:</b> ${name || '—'}`,
    `📞 <b>Телефон:</b> ${phone || '—'}`,
    address ? `📍 <b>Объект:</b> ${address}` : null,
    area ? `📐 <b>Площадь:</b> ${area} м²` : null,
    budget ? `💰 <b>Бюджет:</b> ${budget}` : null,
  ].filter(Boolean).join('\n');

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: lines,
        parse_mode: 'HTML',
      }),
    });

    if (!tgRes.ok) {
      const err = await tgRes.text();
      console.error('Telegram API error:', err);
    }
  } catch (err) {
    console.error('Telegram notify failed:', err);
  }

  return res.status(200).json({ ok: true });
}
