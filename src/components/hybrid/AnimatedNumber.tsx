import { useRef, useState, useEffect, CSSProperties } from 'react';

interface Props {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  format?: 'int' | 'decimal' | 'money';
  style?: CSSProperties;
}

export default function AnimatedNumber({ to, prefix = '', suffix = '', duration = 1800, format = 'int', style = {} }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(to * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);

  let display: string;
  if (format === 'decimal') display = val.toFixed(1);
  else if (format === 'money') display = val.toFixed(1);
  else display = Math.round(val).toString();

  return (
    <span ref={ref} className="hb-num" style={style}>
      {prefix}{display}{suffix}
    </span>
  );
}
