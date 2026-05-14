import { useRef, useEffect } from 'react';
import { useReveal } from './anim-hooks';
import AnimatedNumber from './AnimatedNumber';
import RevealText from './RevealText';

const values = ['Точность', 'Честная цена', 'Зафиксированный срок', 'Авторский надзор', 'Качество в деталях', 'Прозрачность', 'Документация', 'Гарантия'];

function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x = 0;
    let raf: number;
    const step = () => {
      x -= 0.6;
      const w = track.scrollWidth / 2;
      if (Math.abs(x) >= w) x = 0;
      track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const items = [...values, ...values];

  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--hb-rule)', borderBottom: '1px solid var(--hb-rule)', padding: '20px 0' }}>
      <div ref={trackRef} style={{ display: 'flex', whiteSpace: 'nowrap', willChange: 'transform' }}>
        {items.map((v, i) => (
          <span key={i} style={{
            fontFamily: 'var(--hb-serif)', fontStyle: 'italic', fontWeight: 300,
            fontSize: 32, color: 'var(--hb-ink-dim)', letterSpacing: '-0.01em',
            paddingRight: 56,
          }}>
            {v}
          </span>
        ))}
      </div>
    </div>
  );
}

const statItems = [
  { n: 7, suf: ' лет', lbl: 'на рынке' },
  { n: 84, suf: '', lbl: 'завершённых объектов' },
  { n: 2, suf: ' города', lbl: 'СПб и Москва' },
  { n: 0, suf: '', lbl: 'срывов сроков' },
];

export default function HybridAbout() {
  const ref = useReveal();
  const statsRef = useReveal();

  return (
    <section id="about" style={{ borderTop: '1px solid var(--hb-rule)' }}>
      {/* Block A: Founders */}
      <div className="hb-section-px" style={{ padding: 'var(--hb-pad-y) 32px', background: 'var(--hb-bg-2)' }}>
        <div className="hb-grid-section-header" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 56 }}>
          <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)' }}>
            06 — О студии
          </div>
          <RevealText as="h2" text="Студия, которую основали строители."
            staggerMs={50}
            style={{
              fontFamily: 'var(--hb-serif)', fontWeight: 300,
              fontSize: 'var(--hb-h2, 72px)', lineHeight: 1.04,
              letterSpacing: '-0.025em', margin: 0, color: 'var(--hb-ink)',
            }} />
        </div>

        <div ref={ref} className="hb-reveal hb-grid-founders" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 1, background: 'var(--hb-rule)' }}>
          {/* Nikita */}
          <div style={{ background: 'var(--hb-bg)', padding: 48 }}>
            <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 11, color: 'var(--hb-ink-faint)', marginBottom: 32, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Управляющий партнёр
            </div>
            <h3 style={{ fontFamily: 'var(--hb-serif)', fontWeight: 300, fontSize: 48, letterSpacing: '-0.02em', margin: 0, marginBottom: 24, color: 'var(--hb-ink)', lineHeight: 1.1 }}>
              Никита Антонов
            </h3>
            <p style={{ fontFamily: 'var(--hb-sans)', fontSize: 14, lineHeight: 1.7, color: 'var(--hb-ink-dim)', maxWidth: 520, margin: 0 }}>
              Прошёл путь от монтажника до управляющего партнёра. Окончил СПбГАСУ по специальности «Промышленное и гражданское строительство». Знает каждый узел изнутри — лично контролирует каждый объект студии. Убеждён, что репутацию строят скрытые работы, а не фасад.
            </p>
          </div>

          {/* Anastasia */}
          <div style={{ background: 'var(--hb-bg)', padding: 48 }}>
            <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 11, color: 'var(--hb-ink-faint)', marginBottom: 32, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Главный дизайнер
            </div>
            <h3 style={{ fontFamily: 'var(--hb-serif)', fontWeight: 300, fontSize: 48, letterSpacing: '-0.02em', margin: 0, marginBottom: 24, color: 'var(--hb-ink)', lineHeight: 1.1 }}>
              Анастасия Антонова
            </h3>
            <p style={{ fontFamily: 'var(--hb-sans)', fontSize: 14, lineHeight: 1.7, color: 'var(--hb-ink-dim)', margin: 0 }}>
              Главный дизайнер студии. Окончила Санкт-Петербургский государственный университет промышленных технологий и дизайна. Специализируется на жилых интерьерах класса бизнес и премиум. Её проекты — это точный баланс между эстетикой и практичностью жизни.
            </p>
          </div>
        </div>
      </div>

      {/* Block B: Stats */}
      <div ref={statsRef} className="hb-reveal" style={{ borderTop: '1px solid var(--hb-rule-strong)', borderBottom: '1px solid var(--hb-rule-strong)' }}>
        <div className="hb-grid-about-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {statItems.map((s, i) => (
            <div key={i} style={{
              padding: '48px 32px',
              borderRight: i < 3 ? '1px solid var(--hb-rule)' : 'none',
            }}>
              <div className="hb-about-stat-num" style={{ fontFamily: 'var(--hb-serif)', fontSize: 80, fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: 12, color: 'var(--hb-ink)' }}>
                <AnimatedNumber to={s.n} suffix={s.suf} format="int" duration={2000} />
              </div>
              <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)' }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Block C: Values marquee */}
      <Marquee />
    </section>
  );
}
