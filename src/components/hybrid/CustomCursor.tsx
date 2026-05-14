import { useRef, useState, useEffect } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [hot, setHot] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const lab = labelRef.current;
    if (!dot) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let dx = mx, dy = my;
    let raf: number;

    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      dx += (mx - dx) * 0.18;
      dy += (my - dy) * 0.18;
      dot.style.left = dx + 'px';
      dot.style.top = dy + 'px';
      if (lab) { lab.style.left = dx + 'px'; lab.style.top = dy + 'px'; }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(tick);

    const onEnter = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest('[data-cursor]');
      if (!t) return;
      setHot(true);
      setLabel(t.getAttribute('data-cursor') || '');
    };
    const onLeave = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest('[data-cursor]');
      if (!t) return;
      setHot(false);
      setLabel('');
    };
    document.addEventListener('mouseover', onEnter as EventListener);
    document.addEventListener('mouseout', onLeave as EventListener);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onEnter as EventListener);
      document.removeEventListener('mouseout', onLeave as EventListener);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={`hb-cursor ${hot ? 'hb-cursor-hot' : ''}`} />
      <div ref={labelRef} className={`hb-cursor-label ${hot && label ? 'hb-on' : ''}`}>{label}</div>
    </>
  );
}
