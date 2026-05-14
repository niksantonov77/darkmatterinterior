import { useReveal } from './anim-hooks';
import RevealText from './RevealText';

const rows = [
  { n: '01', s: 'Дизайн-проект',    c: 'Планировка, визуализации, чертежи, спецификации', t: '8 недель',     p: '8 500 ₽/м²' },
  { n: '02', s: 'Авторский надзор', c: 'Контроль соответствия чертежам на стройке',       t: 'период работ', p: '50 000 ₽/мес' },
  { n: '03', s: 'Ремонт под ключ',  c: 'Демонтаж, черновые и чистовые работы',            t: '9–14 мес',     p: 'от 50 000 ₽/м²' },
  { n: '04', s: 'Комплектация',     c: 'Прямые контракты с фабриками, скидка до 35%',     t: 'параллельно',  p: '10–15% от чека' },
  { n: '05', s: 'Бронь места',      c: 'Засчитывается в стоимость проекта',               t: '—',            p: '35 000 ₽' },
];

export default function HybridPricing() {
  const ref = useReveal();

  return (
    <section id="pricing" className="hb-section-px" style={{ padding: 'var(--hb-pad-y) 32px', borderTop: '1px solid var(--hb-rule)' }}>
      <div className="hb-grid-section-header" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 56 }}>
        <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)' }}>
          04 — Стоимость
        </div>
        <RevealText as="h2" text="Цены студии. Без скрытых строк."
          staggerMs={50}
          style={{
            fontFamily: 'var(--hb-serif)', fontWeight: 300,
            fontSize: 'var(--hb-h2, 72px)', lineHeight: 1.04,
            letterSpacing: '-0.025em', margin: 0, color: 'var(--hb-ink)',
          }} />
      </div>

      <div ref={ref} className="hb-reveal hb-pricing-scroll" style={{ border: '1px solid var(--hb-rule-strong)' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '60px 2fr 2fr 1fr 180px',
          background: 'var(--hb-bg-2)', padding: '16px 24px',
          fontSize: 12, color: 'var(--hb-ink-faint)', fontFamily: 'var(--hb-sans)',
          minWidth: 600,
        }}>
          <span>№</span><span>Услуга</span><span>Что входит</span><span>Срок</span>
          <span style={{ textAlign: 'right' }}>Цена</span>
        </div>
        {rows.map((r) => (
          <div key={r.n} className="hb-spec-row"
            style={{
              display: 'grid', gridTemplateColumns: '60px 2fr 2fr 1fr 180px',
              padding: '26px 24px', alignItems: 'center',
              borderTop: '1px solid var(--hb-rule)',
              cursor: 'pointer', minWidth: 600,
            }}>
            <span style={{ fontFamily: 'var(--hb-sans)', color: 'var(--hb-ink-faint)', fontSize: 13 }}>{r.n}</span>
            <span style={{ fontFamily: 'var(--hb-serif)', fontSize: 22, color: 'var(--hb-ink)', letterSpacing: '-0.01em' }}>{r.s}</span>
            <span style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)' }}>{r.c}</span>
            <span style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)' }}>{r.t}</span>
            <span style={{
              fontFamily: 'var(--hb-serif)', fontSize: 24, fontWeight: 400, color: 'var(--hb-ink)',
              textAlign: 'right', letterSpacing: '-0.01em',
            }}>{r.p}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
