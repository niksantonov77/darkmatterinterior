import { useRef, useState, useEffect, CSSProperties } from 'react';

interface Props {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  staggerMs?: number;
  baseDelay?: number;
  style?: CSSProperties;
}

export default function RevealText({ text, as: Tag = 'span', className = '', staggerMs = 60, baseDelay = 0, style = {} }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add('hb-in');
          setSeen(true);
          io.disconnect();
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);

  const words = text.split(/(\s+)/);

  const El = Tag as any;
  return (
    <El ref={ref} className={`hb-words ${className}`} style={style}>
      {words.map((w, i) => {
        if (/^\s+$/.test(w)) return <span key={i}>{w}</span>;
        return (
          <span key={i} className="hb-word"
            style={{ transitionDelay: `${baseDelay + i * staggerMs}ms` }}>{w}</span>
        );
      })}
    </El>
  );
}
