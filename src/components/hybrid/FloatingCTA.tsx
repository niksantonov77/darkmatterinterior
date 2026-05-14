import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleClose = () => { setOpen(false); setSuccess(false); };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 40,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          background: 'var(--hb-ink)',
          color: 'var(--hb-bg)',
          border: 'none',
          padding: '18px 28px',
          fontFamily: 'var(--hb-sans)',
          fontSize: 13,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          boxShadow: '0 8px 40px rgba(0,0,0,0.45)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 400ms, transform 400ms, background 200ms',
          pointerEvents: visible ? 'auto' : 'none',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--hb-accent-hot)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--hb-ink)'; }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        Оставить заявку
      </button>

      {/* Modal backdrop */}
      {open && (
        <div
          onClick={e => { if (e.target === e.currentTarget) handleClose(); }}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'rgba(0,0,0,0.72)',
            backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px 16px',
            overflowY: 'auto',
          }}
        >
          <div style={{
            background: 'var(--hb-bg)',
            width: '100%',
            maxWidth: 760,
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            border: '1px solid var(--hb-rule-strong)',
          }}>
            {/* Modal header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '28px 40px 0',
            }}>
              <div style={{
                fontFamily: 'var(--hb-serif)', fontWeight: 300, fontStyle: 'italic',
                fontSize: 28, color: 'var(--hb-ink)', letterSpacing: '-0.02em',
              }}>
                Расскажите о проекте
              </div>
              <button
                onClick={handleClose}
                aria-label="Закрыть"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--hb-ink-faint)', padding: 8,
                  transition: 'color 200ms',
                  display: 'flex', alignItems: 'center',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--hb-ink)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--hb-ink-faint)'; }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <ContactForm onSuccess={() => setSuccess(true)} successInModal={success} />
          </div>
        </div>
      )}
    </>
  );
}
