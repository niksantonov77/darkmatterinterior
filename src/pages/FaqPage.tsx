import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'Сколько стоит ремонт квартиры под ключ в Санкт-Петербурге?',
    a: 'Стоимость зависит от площади, класса отделки и комплектации. Ориентировочно: дизайн-проект — от 2 500 ₽/м², ремонт под ключ — от 25 000 ₽/м² (комплектация материалами входит). Квартира 60 м² в категории «стандарт» обходится в среднем от 1,5 до 2,5 млн ₽ с материалами. Точную смету мы составляем после выезда на объект — это бесплатно.',
  },
  {
    q: 'Сколько времени занимает ремонт квартиры?',
    a: 'Квартира 50–70 м² с нуля: 4–6 месяцев. Квартира 100–150 м²: 6–9 месяцев. В эти сроки входит дизайн-проект (4–6 недель), закупка материалов и сами работы. Срок фиксируется в договоре — мы несём финансовую ответственность за его нарушение.',
  },
  {
    q: 'Что входит в ремонт «под ключ»?',
    a: 'Полный цикл: дизайн-проект со всеми чертежами → закупка всех материалов по вашему согласованию → демонтаж и черновые работы → инженерные системы (электрика, сантехника, вентиляция) → чистовая отделка → установка дверей, плинтусов, розеток → поставка и сборка мебели по проекту → клининг и финальная приёмка. Вы получаете готовую квартиру, в которую можно заезжать.',
  },
  {
    q: 'Можно ли жить в квартире во время ремонта?',
    a: 'На этапе черновых работ — нет: пыль, запахи, шум несовместимы с проживанием. На финальном этапе (отделка, мебель) — можно договориться о частичном проживании. Как правило, клиенты снимают жильё на 2–4 месяца активной фазы.',
  },
  {
    q: 'Работаете ли вы в Москве?',
    a: 'Да, мы реализуем проекты в Москве и Московской области. Объекты в Санкт-Петербурге и Москве — наши основные города. Для выезда на объект и авторского надзора в Москве стоимость несколько выше из-за командировочных расходов.',
  },
  {
    q: 'Как проходит работа — от первого звонка до сдачи?',
    a: '1. Бесплатный выезд на объект, обсуждение концепции и бюджета. 2. Подписание договора на дизайн-проект. 3. Разработка концепции (2–3 варианта), утверждение. 4. Полный рабочий проект: планировки, чертежи, спецификации. 5. Договор на ремонт, фиксация сроков и сметы. 6. Закупка материалов под авторским контролем. 7. Производство работ с еженедельными отчётами. 8. Финальная приёмка и подписание акта. Никакой самодеятельности — каждый шаг согласован с вами.',
  },
  {
    q: 'Даёте ли гарантию на работы?',
    a: 'Да. Гарантия на все виды работ — 2 года с даты подписания акта. Если в гарантийный период что-то выйдет из строя по нашей вине — устраняем бесплатно. На скрытые инженерные системы (электрика, трубы) — 5 лет.',
  },
  {
    q: 'Можно ли делать ремонт в ипотечной квартире?',
    a: 'Да, без ограничений. Ипотека не запрещает ремонт — квартира в вашем пользовании. Единственное исключение — перепланировка несущих конструкций: это требует согласования с банком и БТИ. Мы помогаем с оформлением документов.',
  },
  {
    q: 'Почему стоит выбрать именно Dark Matter Studio?',
    a: 'Три причины, которые важны для клиентов: 1) Основатели — строители, а не только дизайнеры. Никита прошёл путь от монтажника — поэтому мы знаем узлы изнутри и не допускаем скрытых ошибок. 2) Фиксированная смета. Мы не берём работы, которые не умеем считать — смета не растёт в процессе. 3) Ноль срывов сроков за 7 лет — 84 объекта. Это не маркетинг, это репутация.',
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'FAQ — частые вопросы о ремонте и дизайне | Dark Matter Studio';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Ответы на частые вопросы о ремонте и дизайне интерьера: стоимость, сроки, гарантии, процесс работы. Dark Matter Studio — Санкт-Петербург и Москва.');

    // FAQPage schema markup for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'faq-schema';
    document.head.appendChild(script);
    return () => { document.getElementById('faq-schema')?.remove(); };
  }, []);

  return (
    <div style={{ background: 'var(--hb-bg)', minHeight: '100vh', color: 'var(--hb-ink)' }}
      className="hb-dark">
      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 32px',
        background: 'color-mix(in srgb, var(--hb-bg) 92%, transparent)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--hb-rule)',
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src="/assets/logo-black-wide.png" alt="Dark Matter" style={{ height: 32, filter: 'invert(1)', objectFit: 'contain' }} />
        </Link>
        <Link to="/" style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)', textDecoration: 'none', letterSpacing: '0.04em' }}>
          ← На главную
        </Link>
      </nav>

      <main style={{ paddingTop: 120, paddingBottom: 96 }}>
        {/* Header */}
        <div className="hb-section-px" style={{ padding: '0 32px', marginBottom: 72 }}>
          <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)', marginBottom: 24, letterSpacing: '0.04em' }}>
            FAQ — Частые вопросы
          </div>
          <h1 style={{
            fontFamily: 'var(--hb-serif)', fontWeight: 300,
            fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.04,
            letterSpacing: '-0.025em', margin: 0, color: 'var(--hb-ink)',
            maxWidth: 800,
          }}>
            Ответы на вопросы,<br />которые задают чаще всего.
          </h1>
        </div>

        {/* FAQ items */}
        <div className="hb-section-px" style={{ padding: '0 32px' }}>
          {faqs.map((item, i) => (
            <div key={i} style={{ borderTop: '1px solid var(--hb-rule)' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                  gap: 32, padding: '28px 0', textAlign: 'left',
                }}>
                <span style={{
                  fontFamily: 'var(--hb-serif)', fontWeight: 300,
                  fontSize: 'clamp(17px, 2vw, 22px)', color: 'var(--hb-ink)',
                  letterSpacing: '-0.01em', lineHeight: 1.3, flex: 1,
                }}>
                  {item.q}
                </span>
                <span style={{
                  fontFamily: 'var(--hb-sans)', fontSize: 22, color: 'var(--hb-ink-faint)',
                  flexShrink: 0, marginTop: 2, lineHeight: 1,
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 300ms cubic-bezier(0.2,0.7,0.2,1)',
                  display: 'inline-block',
                }}>+</span>
              </button>

              <div style={{
                overflow: 'hidden',
                maxHeight: open === i ? 400 : 0,
                transition: 'max-height 400ms cubic-bezier(0.2,0.7,0.2,1)',
              }}>
                <p style={{
                  fontFamily: 'var(--hb-sans)', fontSize: 15, lineHeight: 1.75,
                  color: 'var(--hb-ink-dim)', paddingBottom: 28, margin: 0,
                  maxWidth: 720,
                }}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--hb-rule)' }} />
        </div>

        {/* CTA */}
        <div className="hb-section-px" style={{ padding: '80px 32px 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 24 }}>
          <p style={{ fontFamily: 'var(--hb-sans)', fontSize: 15, color: 'var(--hb-ink-dim)', margin: 0, maxWidth: 480, lineHeight: 1.7 }}>
            Не нашли ответ на свой вопрос? Расскажите о проекте — обсудим всё на встрече.
          </p>
          <Link to="/#contact" style={{
            background: 'var(--hb-ink)', color: 'var(--hb-bg)',
            padding: '18px 36px', fontFamily: 'var(--hb-sans)',
            fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase',
            textDecoration: 'none', display: 'inline-block',
            transition: 'opacity 250ms',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Обсудить проект
          </Link>
        </div>
      </main>
    </div>
  );
}
