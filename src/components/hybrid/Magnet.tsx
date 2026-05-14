import { useRef, CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  strength?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Magnet({ children, strength = 0.35, className = '', style = {} }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };

  return (
    <span ref={ref} className={`hb-magnet ${className}`} style={style}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </span>
  );
}
