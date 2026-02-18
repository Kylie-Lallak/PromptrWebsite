import { motion } from 'motion/react';
import { GradientBlob } from './GradientBlob';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function SignUpSection() {
  return (
    <section id="signup" className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-white overflow-hidden">
      <GradientBlob className="w-[900px] h-[900px] top-1/4 right-0" delay={3} duration={50} />
      
      <motion.div
        className="relative z-10 max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-5xl sm:text-6xl md:text-7xl mb-6 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get Early Access
        </motion.h2>
        <motion.p 
          className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join the waitlist and be among the first to experience AI code generation that works on the first prompt.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="https://forms.gle/PiZvPS94Cvh5n1Xh8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white rounded-full text-lg flex items-center justify-center gap-2 group no-underline"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Early Access</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="https://forms.gle/3KBjwK35DchDfsC98"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white border-2 border-black rounded-full text-lg flex items-center justify-center gap-2 group no-underline text-black hover:bg-black hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Submit Feedback</span>
          </motion.a>
        </motion.div>
        
        <motion.p 
          className="text-sm text-gray-500 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Help us shape the future of AI-assisted development
        </motion.p>

        <motion.div
          className="mt-20 grid sm:grid-cols-3 gap-8 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>
            <div className="text-3xl mb-3 text-black">⚡</div>
            <h3 className="text-xl mb-2 text-black">Launch in Q2 2026</h3>
            <p className="text-gray-600">Early access for waitlist members</p>
          </div>
          <div>
            <div className="text-3xl mb-3 text-black">🎯</div>
            <h3 className="text-xl mb-2 text-black">Built for non-technical founders</h3>
            <p className="text-gray-600">Production-ready code, no experince</p>
          </div>
          <div>
            <div className="text-3xl mb-3 text-black">🚀</div>
            <h3 className="text-xl mb-2 text-black">Zero Learning Curve</h3>
            <p className="text-gray-600">Just describe what you want to build</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}