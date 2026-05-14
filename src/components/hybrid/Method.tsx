import { useState } from 'react';
import { useReveal } from './anim-hooks';
import RevealText from './RevealText';

const items = [
  { n: '01', t: 'Встреча на объекте', d: 'Замер, осмотр коммуникаций, фотофиксация. 90 минут на месте, отчёт с обмерочным планом через 3 рабочих дня.' },
  { n: '02', t: 'Договор',            d: 'Фиксированная цена и срок. Удорожания материалов и инженерных рисков — на стороне студии.' },
  { n: '03', t: 'Проект',             d: 'Планировка, визуализации, спецификация материалов и мебели. Срок — 4 недели.' },
  { n: '04', t: 'Чертежи',            d: 'Полный пакет рабочих чертежей: архитектура, отделка, инженерные системы. Согласован с конструктором.' },
  { n: '05', t: 'Стройка',            d: 'Своя бригада, прораб на объекте каждый день. Фотоотчёт и журнал работ — в личном кабинете.' },
  { n: '06', t: 'Передача ключей',    d: 'Запуск всех систем, чистовая фотосъёмка, гарантия 12 месяцев на работы.' },
];

function MethodCard({ idx, n, t, d }: { idx: number; n: string; t: string; d: string }) {
  const ref = useReveal();
  const [hover, setHover] = useState(false);

  return (
    <div ref={ref} className="hb-reveal"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'var(--hb-bg-3)' : 'var(--hb-bg)',
        padding: 36, minHeight: 260, position: 'relative',
        transitionDelay: `${idx * 80}ms`,
        transition: 'background 500ms cubic-bezier(0.2,0.7,0.2,1)',
        cursor: 'default',
      }}>
      <div style={{ position: 'absolute', top: 28, right: 28, fontSize: 11, color: 'var(--hb-ink-faint)', fontFamily: 'var(--hb-sans)' }}>
        Этап {n}
      </div>
      <div className="hb-method-num" style={{
        fontFamily: 'var(--hb-serif)', fontWeight: 300,
        fontSize: 96, color: hover ? 'var(--hb-ink)' : 'var(--hb-rule-strong)',
        lineHeight: 0.85, marginBottom: 20, letterSpacing: '-0.04em',
        transition: 'color 600ms', fontStyle: 'italic',
      }}>{n}</div>
      <h3 style={{
        fontFamily: 'var(--hb-serif)', fontWeight: 400, fontSize: 30,
        margin: 0, marginBottom: 14, letterSpacing: '-0.02em', color: 'var(--hb-ink)',
      }}>{t}</h3>
      <p style={{ fontFamily: 'var(--hb-sans)', fontSize: 13, lineHeight: 1.65, color: 'var(--hb-ink-dim)', margin: 0 }}>{d}</p>
    </div>
  );
}

export default function HybridMethod() {
  return (
    <section id="method" className="hb-section-px" style={{
      padding: 'var(--hb-pad-y) 32px',
      borderTop: '1px solid var(--hb-rule)',
      background: 'var(--hb-bg-2)',
    }}>
      <div className="hb-grid-section-header" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 56 }}>
        <div style={{ fontFamily: 'var(--hb-sans)', fontSize: 12, color: 'var(--hb-ink-faint)' }}>
          03 — Как мы работаем
        </div>
        <RevealText as="h2" text="Шесть этапов от замера до ключей."
          staggerMs={50}
          style={{
            fontFamily: 'var(--hb-serif)', fontWeight: 300,
            fontSize: 'var(--hb-h2, 72px)', lineHeight: 1.04,
            letterSpacing: '-0.025em', margin: 0, color: 'var(--hb-ink)',
          }} />
      </div>
      <div className="hb-grid-method" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--hb-rule)' }}>
        {items.map((p, i) => <MethodCard key={p.n} idx={i} {...p} />)}
      </div>
    </section>
  );
}
