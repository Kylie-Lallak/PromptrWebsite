import { motion } from 'motion/react';

interface GradientBlobProps {
  delay?: number;
  duration?: number;
  className?: string;
}

export function GradientBlob({ delay = 0, duration = 20, className = '' }: GradientBlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-30 blur-3xl ${className}`}
      style={{
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(34, 211, 238, 0.2) 50%, transparent 100%)',
        backgroundImage: `
          radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(34, 211, 238, 0.2) 50%, transparent 100%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
        `,
        backgroundBlendMode: 'overlay',
      }}
      animate={{
        x: [0, 60, -30, 0],
        y: [0, -60, 30, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: duration * 2,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
  );
}