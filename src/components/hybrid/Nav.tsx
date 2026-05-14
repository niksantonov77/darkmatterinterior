import { useState, useEffect } from 'react';

const links = [
  ['Объекты',   '#work'],
  ['Метод',     '#method'],
  ['Стоимость', '#pricing'],
  ['О студии',  '#about'],
  ['Контакты',  '#contact'],
] as const;

export default function HybridNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'grid', gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center', padding: scrolled ? '14px 32px' : '22px 32px',
      background: scrolled ? 'color-mix(in srgb, var(--hb-bg) 88%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--hb-rule)' : '1px solid transparent',
      fontFamily: 'var(--hb-sans)', fontSize: 13,
      color: 'var(--hb-ink)',
      transition: 'padding 400ms cubic-bezier(0.2,0.7,0.2,1), background 400ms, border-color 400ms',
    }}>
      <a href="/" style={{
        display: 'inline-flex', alignItems: 'baseline', gap: 12,
        textDecoration: 'none', color: 'var(--hb-ink)',
      }}>
        <img
          src="/assets/logo-black-wide.png"
          alt="Dark Matter"
          style={{
            height: 28,
            filter: 'invert(1)',
            objectFit: 'contain',
          }}
        />
        <span style={{
          fontFamily: 'var(--hb-sans)', fontSize: 11, fontWeight: 400,
          letterSpacing: '0.04em', color: 'var(--hb-ink-faint)',
          paddingLeft: 12, borderLeft: '1px solid var(--hb-rule)',
        }}>
          студия архитектуры интерьера
        </span>
      </a>

      <div style={{ display: 'flex', gap: 36, justifyContent: 'center' }}>
        {links.map(([label, href]) => (
          <a key={label} href={href}
            style={{
              color: 'var(--hb-ink)', textDecoration: 'none',
              fontSize: 13, letterSpacing: '0.01em',
              padding: '6px 0',
              borderBottom: '1px solid transparent',
              transition: 'border-color 300ms',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--hb-ink)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent'; }}>
            {label}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 20, justifyContent: 'flex-end', alignItems: 'center' }}>
        <a href="tel:+79119117532" style={{
          color: 'var(--hb-ink)', textDecoration: 'none',
          fontSize: 13, letterSpacing: '0.01em',
        }}>
          +7 911 911-75-32
        </a>
        <a href="#contact" style={{
          background: 'var(--hb-ink)', color: 'var(--hb-bg)',
          padding: '12px 22px', fontSize: 12, fontFamily: 'var(--hb-sans)',
          letterSpacing: '0.02em', cursor: 'pointer', fontWeight: 500,
          textDecoration: 'none', display: 'inline-block',
          transition: 'opacity 250ms',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}>
          Записаться на встречу
        </a>
      </div>
    </nav>
  );
}
