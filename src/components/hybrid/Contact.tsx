import { useReveal } from './anim-hooks';
import Magnet from './Magnet';
import RevealText from './RevealText';

export default function HybridContact() {
  const ref = useReveal();

  return (
    <section id="contact" style={{
      padding: 'var(--hb-pad-y) 32px',
      borderTop: '1px solid var(--hb-rule)',
      background: 'var(--hb-bg-2)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 56 }}>
        <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)' }}>
          07 — Контакты
        </div>
        <RevealText as="h2" text="Консультация по телефону."
          staggerMs={50}
          style={{
            fontFamily: 'var(--hb-serif)', fontWeight: 300,
            fontSize: 'var(--hb-h2, 72px)', lineHeight: 1.04,
            letterSpacing: '-0.025em', margin: 0, color: 'var(--hb-ink)',
          }} />
      </div>

      <div ref={ref} className="hb-reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--hb-rule)' }}>
        {/* Left: description + CTA */}
        <div style={{ background: 'var(--hb-bg)', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 320 }}>
          <p style={{ fontFamily: 'var(--hb-sans)', fontSize: 15, lineHeight: 1.75, color: 'var(--hb-ink-dim)', maxWidth: 440, margin: 0 }}>
            Расскажите о вашем объекте — обсудим сроки, бюджет и подход. Без обязательств. Первый разговор бесплатный.
          </p>
          <Magnet strength={0.4}>
            <a href="tel:+79119117532" style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              fontFamily: 'var(--hb-sans)', fontSize: 13, letterSpacing: '0.06em',
              textTransform: 'uppercase', color: 'var(--hb-bg)',
              background: 'var(--hb-ink)', padding: '18px 32px',
              textDecoration: 'none',
              transition: 'opacity 300ms',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Позвонить +7 911 911-75-32
            </a>
          </Magnet>
        </div>

        {/* Right: contact details */}
        <div style={{ background: 'var(--hb-bg)', padding: 48 }}>
          <div style={{ fontFamily: 'var(--hb-serif)', fontWeight: 300, fontSize: 52, letterSpacing: '-0.025em', color: 'var(--hb-ink)', lineHeight: 1.1, marginBottom: 40 }}>
            +7 911 911-75-32
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <a href="https://t.me/darkmatterstudio" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-dim)')}
            >
              <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--hb-ink-faint)', minWidth: 80 }}>Telegram</span>
              @darkmatterstudio ↗
            </a>

            <a href="https://www.instagram.com/interior.darkmatter" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-dim)')}
            >
              <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--hb-ink-faint)', minWidth: 80 }}>Instagram</span>
              @interior.darkmatter ↗
            </a>

            <a href="mailto:interior.darkmatter@gmail.com"
              style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-dim)')}
            >
              <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--hb-ink-faint)', minWidth: 80 }}>Email</span>
              interior.darkmatter@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
