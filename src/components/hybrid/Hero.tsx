import { useRef, useEffect } from 'react';
import Magnet from './Magnet';

export default function HybridHero() {
  const heroRef = useRef<HTMLElement>(null);
  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLHeadingElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const onScroll = () => {
      const el = heroRef.current;
      if (!el) return;
      const y = window.scrollY;
      el.querySelectorAll<HTMLElement>('[data-parallax]').forEach(node => {
        const f = parseFloat(node.dataset.parallax || '0.2');
        node.style.transform = `translateY(${-y * f}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    refs.forEach((r, i) => r.current && setTimeout(() => r.current!.classList.add('hb-in'), 200 + i * 200));
  }, []);

  return (
    <section ref={heroRef} style={{
      position: 'relative', minHeight: '100vh',
      paddingTop: 120, paddingBottom: 80,
      background: 'var(--hb-bg)', overflow: 'hidden',
    }}>
      <div data-parallax="0.25" style={{
        position: 'absolute', inset: '-10% -5%',
        backgroundImage: 'url(/assets/imagery-monogram-dark.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'grayscale(1) brightness(0.4) contrast(1.1)', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse at 60% 40%, rgba(10,10,10,0.4) 0%, var(--hb-bg) 80%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--hb-rule) 1px, transparent 1px), linear-gradient(90deg, var(--hb-rule) 1px, transparent 1px)',
        backgroundSize: '120px 120px', opacity: 0.4,
      }} />

      <div className="hb-section-px" style={{ position: 'relative', zIndex: 2, padding: '0 32px', maxWidth: 1600, margin: '0 auto' }}>
        <div ref={refs[0]} className="hb-reveal" style={{
          display: 'flex', alignItems: 'center', gap: 16,
          marginBottom: 56, marginTop: 96,
          fontFamily: 'var(--hb-sans)', fontSize: 12,
          color: 'var(--hb-ink-dim)',
        }}>
          <span style={{ width: 40, height: 1, background: 'var(--hb-rule-strong)' }} />
          Санкт-Петербург · Москва · с 2019 года
        </div>

        <h1 ref={refs[1]} className="hb-reveal" style={{
          fontFamily: 'var(--hb-serif)', fontWeight: 300,
          fontSize: 'var(--hb-h1, 156px)', lineHeight: 0.9,
          letterSpacing: '-0.04em', margin: 0, marginBottom: 56, color: 'var(--hb-ink)',
        }}>
          Архитектура<br />
          интерьера<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400 }}>под ключ.</em>
        </h1>

        <div className="hb-grid-hero" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end' }}>
          <div ref={refs[2]} className="hb-reveal">
            <p style={{
              fontFamily: 'var(--hb-sans)', fontSize: 18, lineHeight: 1.6,
              color: 'var(--hb-ink-dim)', margin: 0, marginBottom: 40, maxWidth: 580,
            }}>
              Проектируем, строим и комплектуем квартиры от 100&nbsp;м². Берём на себя весь процесс — от обмеров до передачи ключей.{' '}
              <span style={{ color: 'var(--hb-ink)' }}>Цена и срок зафиксированы в договоре.</span>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Magnet>
                <a href="#contact" style={{
                  display: 'inline-block',
                  background: 'var(--hb-ink)', color: 'var(--hb-bg)',
                  padding: '18px 32px', fontSize: 13, fontFamily: 'var(--hb-sans)',
                  letterSpacing: '0.01em', cursor: 'pointer', fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'opacity 250ms',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}>
                  Записаться на встречу
                </a>
              </Magnet>
              <Magnet>
                <a href="#work" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  background: 'transparent', color: 'var(--hb-ink)',
                  border: '1px solid var(--hb-rule-strong)',
                  padding: '17px 28px', fontSize: 13, fontFamily: 'var(--hb-sans)',
                  letterSpacing: '0.01em', cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'background 250ms, color 250ms',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'var(--hb-ink)';
                  el.style.color = 'var(--hb-bg)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'transparent';
                  el.style.color = 'var(--hb-ink)';
                }}>
                  Смотреть объекты
                </a>
              </Magnet>
            </div>
          </div>

          <div ref={refs[3]} className="hb-reveal hb-hero-card" style={{
            border: '1px solid var(--hb-rule)',
            padding: 28, fontFamily: 'var(--hb-sans)', fontSize: 13,
            background: 'color-mix(in srgb, var(--hb-bg) 60%, transparent)',
            backdropFilter: 'blur(6px)',
          }}>
            <div style={{
              fontSize: 11, color: 'var(--hb-ink-faint)', marginBottom: 18,
              paddingBottom: 14, borderBottom: '1px solid var(--hb-rule)',
              display: 'flex', justifyContent: 'space-between',
            }}>
              <span>Последний завершённый объект</span>
              <span>2025</span>
            </div>
            <div style={{
              aspectRatio: '16/10',
              backgroundImage: 'url(/assets/imagery-stone-texture.jpg)',
              backgroundSize: 'cover', backgroundPosition: 'center',
              marginBottom: 18, filter: 'grayscale(1)',
            }} />
            <div style={{
              fontFamily: 'var(--hb-serif)', fontSize: 22, fontWeight: 400,
              letterSpacing: '-0.01em', marginBottom: 16, color: 'var(--hb-ink)',
            }}>
              Квартира на&nbsp;Карповке
            </div>
            {([
              ['Город',   'Санкт-Петербург'],
              ['Площадь', '412 м²'],
              ['Срок',    '11 месяцев'],
              ['Бюджет',  'по запросу'],
            ] as const).map(([k, v]) => (
              <div key={k} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '10px 0', borderTop: '1px solid var(--hb-rule)',
                color: 'var(--hb-ink)',
              }}>
                <span style={{ color: 'var(--hb-ink-faint)' }}>{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 24, left: 32, zIndex: 3,
        fontFamily: 'var(--hb-sans)', fontSize: 11,
        color: 'var(--hb-ink-faint)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ width: 1, height: 28, background: 'var(--hb-rule-strong)' }} />
        Прокрутите ниже
      </div>
    </section>
  );
}
