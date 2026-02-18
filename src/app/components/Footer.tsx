import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import logo from '../../assets/Logo.png';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <motion.div 
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <motion.img 
            src={logo} 
            alt="Promptr" 
            className="h-10 brightness-0 invert"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
          <span className="text-sm text-gray-400">© 2026 Promptr. All rights reserved.</span>
        </div>
        
        <div className="flex items-center gap-6 sm:gap-8">
          <div className="flex gap-6 sm:gap-8 text-sm text-gray-400">
            <motion.button 
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy
            </motion.button>
            <motion.button 
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Terms
            </motion.button>
            <motion.button 
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>
          
          <motion.a
            href="https://www.linkedin.com/company/promptr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            whileHover={{ 
              scale: 1.2, 
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Visit Promptr on LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}