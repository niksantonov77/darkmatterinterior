import { useReveal } from './anim-hooks';
import RevealText from './RevealText';

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8c-.12.55-.46.68-.93.42l-2.6-1.91-1.25 1.2c-.14.14-.26.26-.53.26l.19-2.72 4.97-4.48c.22-.19-.05-.3-.33-.11L7.9 14.39l-2.54-.8c-.55-.17-.56-.55.12-.82l9.93-3.83c.46-.17.86.11.23.86z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const iconLinkStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  color: 'var(--hb-ink-faint)',
  textDecoration: 'none',
  border: '1px solid var(--hb-rule)',
  transition: 'color 250ms, border-color 250ms, background 250ms',
};

export default function HybridContact() {
  const ref = useReveal();

  const openForm = () => window.dispatchEvent(new CustomEvent('openContactForm'));

  return (
    <section id="contact" className="hb-section-px" style={{
      padding: 'var(--hb-pad-y) 32px',
      borderTop: '1px solid var(--hb-rule)',
      background: 'var(--hb-bg-2)',
    }}>
      <div className="hb-grid-section-header" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 56 }}>
        <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)' }}>
          07 — Контакты
        </div>
        <RevealText as="h2" text="Обсудим ваш проект."
          staggerMs={50}
          style={{
            fontFamily: 'var(--hb-serif)', fontWeight: 300,
            fontSize: 'var(--hb-h2, 72px)', lineHeight: 1.04,
            letterSpacing: '-0.025em', margin: 0, color: 'var(--hb-ink)',
          }} />
      </div>

      <div ref={ref} className="hb-reveal hb-grid-contact" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--hb-rule)' }}>

        {/* Left: form CTA */}
        <div style={{ background: 'var(--hb-bg)', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 320, gap: 40 }}>
          <p style={{ fontFamily: 'var(--hb-sans)', fontSize: 15, lineHeight: 1.75, color: 'var(--hb-ink-dim)', maxWidth: 440, margin: 0 }}>
            Расскажите о квартире — площадь, примерный бюджет, когда хотите начать. Посмотрим, чем можем помочь, и назначим встречу на объекте.
          </p>
          <button
            onClick={openForm}
            style={{
              alignSelf: 'flex-start',
              background: 'var(--hb-ink)', color: 'var(--hb-bg)',
              border: 'none', padding: '18px 32px',
              fontFamily: 'var(--hb-sans)', fontSize: 13,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              cursor: 'pointer', transition: 'opacity 300ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Оставить заявку
          </button>
        </div>

        {/* Right: phone + social */}
        <div style={{ background: 'var(--hb-bg)', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 320 }}>
          <div>
            <p style={{ fontFamily: 'var(--hb-sans)', fontSize: 14, color: 'var(--hb-ink-dim)', margin: '0 0 20px', lineHeight: 1.6 }}>
              Удобнее говорить — просто наберите.<br />
              Берём трубку с 9 до 21.
            </p>
            <a href="tel:+79119117532" style={{ textDecoration: 'none' }}>
              <div className="hb-contact-phone" style={{
                fontFamily: 'var(--hb-serif)', fontWeight: 300, fontSize: 52,
                letterSpacing: '-0.025em', color: 'var(--hb-ink)', lineHeight: 1.1,
                transition: 'opacity 300ms',
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                +7 911 911-75-32
              </div>
            </a>
          </div>

          {/* Icon-only social links */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a href="https://t.me/darkmatterstudio" target="_blank" rel="noopener noreferrer"
              aria-label="Telegram" style={iconLinkStyle}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--hb-ink)'; el.style.borderColor = 'var(--hb-ink)'; el.style.background = 'var(--hb-bg-3)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--hb-ink-faint)'; el.style.borderColor = 'var(--hb-rule)'; el.style.background = 'transparent'; }}>
              <TelegramIcon />
            </a>
            <a href="https://www.instagram.com/interior.darkmatter" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram" style={iconLinkStyle}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--hb-ink)'; el.style.borderColor = 'var(--hb-ink)'; el.style.background = 'var(--hb-bg-3)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--hb-ink-faint)'; el.style.borderColor = 'var(--hb-rule)'; el.style.background = 'transparent'; }}>
              <InstagramIcon />
            </a>
            <a href="mailto:interior.darkmatter@gmail.com"
              aria-label="Email" style={iconLinkStyle}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--hb-ink)'; el.style.borderColor = 'var(--hb-ink)'; el.style.background = 'var(--hb-bg-3)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'var(--hb-ink-faint)'; el.style.borderColor = 'var(--hb-rule)'; el.style.background = 'transparent'; }}>
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
