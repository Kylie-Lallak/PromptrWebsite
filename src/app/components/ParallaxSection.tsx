import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion } from 'motion/react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  speed?: number;
}

export function ParallaxSection({ children, className = '', id, speed = 0.5 }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPercent = -rect.top / (rect.height + window.innerHeight);
        setOffsetY(scrollPercent * 100 * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={className}
      style={{
        y: offsetY,
      }}
    >
      {children}
    </motion.section>
  );
}
