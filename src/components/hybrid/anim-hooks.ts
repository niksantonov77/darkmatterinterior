import { useRef, useState, useEffect, useCallback, CSSProperties } from 'react';

interface RevealOpts {
  threshold?: number;
  rootMargin?: string;
}

export function useReveal(opts: RevealOpts = {}) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('hb-in');
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, opts.threshold, opts.rootMargin]);

  return ref as React.RefObject<any>;
}

export interface AnimatedNumberProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  format?: 'int' | 'decimal' | 'money';
  style?: CSSProperties;
}

export interface RevealTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  staggerMs?: number;
  baseDelay?: number;
  style?: CSSProperties;
}

export interface MagnetProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  style?: CSSProperties;
}

export function useMagnet(strength = 0.35) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    },
    [strength]
  );

  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  }, []);

  return { ref, onMove, onLeave };
}
