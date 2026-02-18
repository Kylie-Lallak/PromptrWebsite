import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import logoFull from '../../assets/fullLogo.png';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = ['home', 'about', 'signup'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-white/70 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.button 
          onClick={() => scrollToSection('home')} 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={logoFull} alt="Promptr" className="h-7 sm:h-8" />
        </motion.button>
        <div className="flex items-center gap-6 sm:gap-10">
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-xs sm:text-sm text-black hover:text-gray-600 transition-colors relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
            {activeSection === 'home' && (
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
                layoutId="activeUnderline"
              />
            )}
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('about')}
            className="text-xs sm:text-sm text-black hover:text-gray-600 transition-colors relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About
            {activeSection === 'about' && (
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
                layoutId="activeUnderline"
              />
            )}
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('signup')}
            className="px-6 py-2 bg-black text-white rounded-full text-xs sm:text-sm transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}