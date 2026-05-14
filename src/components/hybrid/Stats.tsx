import { useReveal } from './anim-hooks';
import AnimatedNumber from './AnimatedNumber';

const stats = [
  { n: 84,   suf: '',      lbl: 'завершённых объектов',   fmt: 'int'     as const },
  { n: 4.2,  pre: '₽',    suf: ' млрд', lbl: 'освоенных бюджетов',   fmt: 'decimal' as const },
  { n: 0,    suf: '',      lbl: 'срывов сроков за 7 лет', fmt: 'int'     as const },
  { n: 12,   suf: ' мес',  lbl: 'гарантия на работы',     fmt: 'int'     as const },
];

export default function HybridStats() {
  const ref = useReveal();

  return (
    <section ref={ref} className="hb-reveal" style={{
      borderTop: '1px solid var(--hb-rule-strong)',
      borderBottom: '1px solid var(--hb-rule-strong)',
      background: 'var(--hb-bg-2)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: '56px 32px',
            borderRight: i < 3 ? '1px solid var(--hb-rule)' : 'none',
            position: 'relative',
          }}>
            <div style={{
              fontFamily: 'var(--hb-sans)', fontSize: 11,
              color: 'var(--hb-ink-faint)', marginBottom: 20,
            }}>
              {String(i + 1).padStart(2, '0')} / 04
            </div>
            <div style={{
              fontFamily: 'var(--hb-serif)', fontSize: 92, fontWeight: 300,
              letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: 14,
              color: 'var(--hb-ink)',
            }}>
              <AnimatedNumber to={s.n} prefix={('pre' in s ? (s as any).pre : '') || ''} suffix={s.suf || ''} format={s.fmt} duration={2200} />
            </div>
            <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)' }}>
              {s.lbl}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
