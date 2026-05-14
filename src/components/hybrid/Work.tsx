import { useState } from 'react';
import { useReveal } from './anim-hooks';
import RevealText from './RevealText';

const projects = [
  { n: '001', t: 'Квартира на Карповке',   loc: 'Санкт-Петербург', area: '412 м²', year: '2025', img: '/assets/imagery-stone-texture.jpg' },
  { n: '002', t: 'Квартира на Тверской',   loc: 'Москва',          area: '186 м²', year: '2024', img: '/assets/imagery-reception.jpg' },
  { n: '003', t: 'Пентхаус ЗИЛАРТ',        loc: 'Москва',          area: '231 м²', year: '2024', img: '/assets/imagery-interior-armchair.jpg' },
  { n: '004', t: 'Дом на Петроградской',   loc: 'Санкт-Петербург', area: '298 м²', year: '2023', img: '/assets/imagery-monogram-dark.jpg' },
];

export default function HybridWork() {
  const ref = useReveal();
  const ruleRef = useReveal();
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="work" className="hb-section-px" style={{ padding: 'var(--hb-pad-y) 32px', position: 'relative' }}>
      <div className="hb-grid-section-header" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 72, alignItems: 'end' }}>
        <div>
          <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)', marginBottom: 24 }}>
            02 — Объекты
          </div>
          <div className="hb-rule-grow" ref={ruleRef} />
          <div style={{ marginTop: 24, fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)' }}>
            Показано 4 из 84 · 2023—2025
          </div>
        </div>
        <RevealText as="h2" text="Объекты, сданные студией за последние два года."
          staggerMs={50}
          style={{
            fontFamily: 'var(--hb-serif)', fontWeight: 300,
            fontSize: 'var(--hb-h2, 72px)', lineHeight: 1.04,
            letterSpacing: '-0.025em', margin: 0, color: 'var(--hb-ink)',
          }} />
      </div>

      {/* Floating preview pane */}
      <div className="hb-work-preview" style={{
        position: 'fixed', top: '50%', right: 32,
        transform: 'translateY(-50%)', zIndex: 5,
        width: 320, aspectRatio: '3/4', pointerEvents: 'none',
        opacity: hover !== null ? 1 : 0,
        transition: 'opacity 400ms',
      }}>
        {projects.map((p, i) => (
          <div key={p.n} style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${p.img})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: hover === i ? 1 : 0,
            transition: 'opacity 600ms cubic-bezier(0.2,0.7,0.2,1)',
            border: '1px solid var(--hb-rule-strong)',
          }} />
        ))}
      </div>

      <div ref={ref} className="hb-reveal" style={{ borderTop: '1px solid var(--hb-rule-strong)' }}>
        {projects.map((p, i) => (
          <div key={p.n}
            className="hb-spec-row hb-grid-work-table"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            style={{
              display: 'grid',
              gridTemplateColumns: '70px 2fr 1fr 1fr 100px 60px',
              alignItems: 'center', gap: 32,
              padding: '44px 16px',
              borderBottom: '1px solid var(--hb-rule-strong)',
              cursor: 'pointer',
            }}>
            <span style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-faint)' }}>{p.n}</span>
            <h3 style={{
              fontFamily: 'var(--hb-serif)', fontWeight: 300,
              fontSize: 38, letterSpacing: '-0.02em', margin: 0, color: 'var(--hb-ink)',
            }}>{p.t}</h3>
            <span className="hb-work-col-loc" style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)' }}>{p.loc}</span>
            <span className="hb-work-col-area" style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)' }}>{p.area}</span>
            <span className="hb-work-col-year" style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)' }}>{p.year}</span>
            <span style={{
              fontFamily: 'var(--hb-sans)', fontSize: 16, color: 'var(--hb-ink)',
              textAlign: 'right',
              transform: hover === i ? 'translateX(8px)' : 'translateX(0)',
              transition: 'transform 400ms cubic-bezier(0.2,0.7,0.2,1)',
            }}>→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
