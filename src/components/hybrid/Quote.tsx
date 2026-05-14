import RevealText from './RevealText';

export default function HybridQuote() {
  return (
    <section style={{
      padding: 'var(--hb-pad-y) 32px',
      background: 'var(--hb-bg-2)', borderTop: '1px solid var(--hb-rule)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: -100, right: -100,
        fontFamily: 'var(--hb-serif)', fontSize: 600, fontWeight: 400,
        fontStyle: 'italic', color: 'var(--hb-rule)', lineHeight: 0.7,
        pointerEvents: 'none', userSelect: 'none',
      }}>"</div>
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)', marginBottom: 40 }}>
          05 — От основателей
        </div>
        <RevealText
          as="blockquote"
          staggerMs={70}
          text="Качество ремонта решается там, где его никто не увидит — в узлах инженерных коммуникаций, штробах и стяжке. Туда мы и кладём бюджет в первую очередь."
          className="hb-quote-text"
          style={{
            fontFamily: 'var(--hb-serif)', fontWeight: 300,
            fontSize: 56, lineHeight: 1.2, letterSpacing: '-0.02em',
            margin: 0, marginBottom: 40, fontStyle: 'italic',
            color: 'var(--hb-ink)',
          }} />
        <footer style={{
          fontFamily: 'var(--hb-sans)', fontSize: 13,
          color: 'var(--hb-ink-faint)',
          paddingTop: 32, borderTop: '1px solid var(--hb-rule)',
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span>Никита и Анастасия Антоновы — основатели студии</span>
          <span>Санкт-Петербург, {new Date().getFullYear()}</span>
        </footer>
      </div>
    </section>
  );
}
