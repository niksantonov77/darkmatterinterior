import { Link } from 'react-router-dom';
import { MirIcon, VisaIcon, MastercardIcon } from '../PaymentIcons';

export default function HybridFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--hb-rule-strong)', background: 'var(--hb-bg-2)' }}>
      {/* Main footer grid */}
      <div className="hb-section-px hb-grid-footer" style={{ padding: '64px 32px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
        {/* Brand column */}
        <div>
          <img src="/assets/logo-black-wide.png" alt="Dark Matter" style={{ height: 28, marginBottom: 24, filter: 'var(--hb-logo-filter, invert(1))' }} />
          <p style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, lineHeight: 1.7, color: 'var(--hb-ink-dim)', maxWidth: 280, margin: 0 }}>
            Студия дизайна и ремонта интерьеров класса бизнес и премиум. Санкт-Петербург и Москва.
          </p>
        </div>

        {/* Sections */}
        <div>
          <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--hb-ink-faint)', marginBottom: 20 }}>
            Разделы
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { href: '#work', label: 'Объекты' },
              { href: '#method', label: 'Метод' },
              { href: '#pricing', label: 'Стоимость' },
              { href: '#about', label: 'О студии' },
              { href: '#contact', label: 'Контакты' },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-dim)')}
              >{l.label}</a>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div>
          <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--hb-ink-faint)', marginBottom: 20 }}>
            Связь
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="tel:+79119117532" style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-dim)')}
            >+7 911 911-75-32</a>
            <a href="mailto:interior.darkmatter@gmail.com" style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-dim)')}
            >interior.darkmatter@gmail.com</a>
            <a href="https://t.me/darkmatterstudio" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-dim)')}
            >Telegram ↗</a>
            <a href="https://www.instagram.com/interior.darkmatter" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, color: 'var(--hb-ink-dim)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-dim)')}
            >Instagram ↗</a>
          </div>
        </div>

        {/* Payment */}
        <div>
          <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--hb-ink-faint)', marginBottom: 20 }}>
            Оплата
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
            <a href="https://mironline.ru" target="_blank" rel="noopener noreferrer" aria-label="МИР"
              style={{ height: 16, width: 48, color: 'var(--hb-ink-faint)', display: 'block', transition: 'color 200ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-faint)')}>
              <MirIcon />
            </a>
            <a href="https://visa.com" target="_blank" rel="noopener noreferrer" aria-label="Visa"
              style={{ height: 16, width: 48, color: 'var(--hb-ink-faint)', display: 'block', transition: 'color 200ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-faint)')}>
              <VisaIcon />
            </a>
            <a href="https://mastercard.com" target="_blank" rel="noopener noreferrer" aria-label="Mastercard"
              style={{ height: 20, width: 36, color: 'var(--hb-ink-faint)', display: 'block', transition: 'color 200ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-faint)')}>
              <MastercardIcon />
            </a>
          </div>
          <p style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)', lineHeight: 1.5, margin: 0 }}>
            Безопасная оплата через Т-Банк эквайринг
          </p>
        </div>
      </div>

      {/* Legal bottom bar */}
      <div className="hb-section-px" style={{ borderTop: '1px solid var(--hb-rule)', padding: '32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="hb-grid-footer-legal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
          <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)', lineHeight: 1.6 }}>
            <div>ИП Антонов Никита Сергеевич</div>
            <div>ИНН: 780634510121</div>
            <div>ОГРНИП: 320784700080501</div>
          </div>
          <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)', lineHeight: 1.6 }}>
            <div>Юр. адрес: г. Санкт-Петербург</div>
            <div>Служба поддержки:</div>
            <a href="mailto:interior.darkmatter@gmail.com" style={{ color: 'var(--hb-ink-faint)', textDecoration: 'none' }}>interior.darkmatter@gmail.com</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)' }}>
              © {new Date().getFullYear()} Dark Matter Studio
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              <Link to="/offer" style={{ fontFamily: 'var(--hb-sans)', fontSize: 11, color: 'var(--hb-ink-faint)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-faint)')}
              >Оферта</Link>
              <Link to="/privacy" style={{ fontFamily: 'var(--hb-sans)', fontSize: 11, color: 'var(--hb-ink-faint)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-faint)')}
              >Конфиденциальность</Link>
              <Link to="/refund" style={{ fontFamily: 'var(--hb-sans)', fontSize: 11, color: 'var(--hb-ink-faint)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--hb-ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--hb-ink-faint)')}
              >Возврат</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
