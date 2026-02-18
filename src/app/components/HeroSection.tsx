import { motion } from 'motion/react';
import logoFull from 'figma:asset/f6615e4c289f276398733fa95328d0b0413f681a.png';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background: 'linear-gradient(to top, rgba(59, 130, 246, 0.6) 0%, rgba(34, 211, 238, 0.3) 40%, rgba(255, 255, 255, 0) 70%)',
        }}
        animate={{
          background: [
            'linear-gradient(to top, rgba(59, 130, 246, 0.6) 0%, rgba(34, 211, 238, 0.3) 40%, rgba(255, 255, 255, 0) 70%)',
            'linear-gradient(to top, rgba(34, 211, 238, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, rgba(255, 255, 255, 0) 70%)',
            'linear-gradient(to top, rgba(59, 130, 246, 0.6) 0%, rgba(34, 211, 238, 0.3) 40%, rgba(255, 255, 255, 0) 70%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={logoFull}
            alt="Promptr"
            className="h-12 sm:h-14"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </motion.div>
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl mb-8 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Build better, faster
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI-powered code generation that understands what you want from the first prompt.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            onClick={() => scrollToSection('signup')}
            className="px-8 py-4 bg-black text-white rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Get Early Access</span>
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-transparent border-2 border-gray-400 text-gray-700 rounded-full transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgb(75, 85, 99)',
              color: 'rgb(17, 24, 39)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}