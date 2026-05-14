import { useReveal } from './anim-hooks';
import Magnet from './Magnet';
import RevealText from './RevealText';
import ContactForm from './ContactForm';

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8c-.12.55-.46.68-.93.42l-2.6-1.91-1.25 1.2c-.14.14-.26.26-.53.26l.19-2.72 4.97-4.48c.22-.19-.05-.3-.33-.11L7.9 14.39l-2.54-.8c-.55-.17-.56-.55.12-.82l9.93-3.83c.46-.17.86.11.23.86z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function HybridContact() {
  const ref = useReveal();

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

      <div ref={ref} className="hb-reveal hb-grid-contact" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--hb-rule)', marginBottom: 1 }}>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
            <span style={{ color: 'var(--hb-ink-faint)' }}><PhoneIcon /></span>
            <div className="hb-contact-phone" style={{ fontFamily: 'var(--hb-serif)', fontWeight: 300, fontSize: 52, letterSpacing: '-0.025em', color: 'var(--hb-ink)', lineHeight: 1.1 }}>
              +7 911 911-75-32
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <a href="https://t.me/darkmatterstudio" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-dim)')}
            >
              <span style={{ color: 'var(--hb-ink-faint)', flexShrink: 0 }}><TelegramIcon /></span>
              @darkmatterstudio ↗
            </a>

            <a href="https://www.instagram.com/interior.darkmatter" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-dim)')}
            >
              <span style={{ color: 'var(--hb-ink-faint)', flexShrink: 0 }}><InstagramIcon /></span>
              @interior.darkmatter ↗
            </a>

            <a href="mailto:interior.darkmatter@gmail.com"
              style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-dim)')}
            >
              <span style={{ color: 'var(--hb-ink-faint)', flexShrink: 0 }}><MailIcon /></span>
              interior.darkmatter@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <ContactForm />
    </section>
  );
}
