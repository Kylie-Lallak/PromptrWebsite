import { motion } from 'motion/react';
import { GradientBlob } from './GradientBlob';

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-white overflow-hidden">
      <GradientBlob className="w-[700px] h-[700px] -top-20 -left-20" delay={2} duration={45} />
      
      <motion.div
        className="relative z-10 max-w-6xl w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-5xl sm:text-6xl text-center mb-16 text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Chat, Prompt, Build
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-white rounded-3xl p-8 border-2 border-black shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="text-5xl mb-4 text-black">01.</div>
            <h3 className="text-2xl mb-4 text-black">Chat</h3>
            <p className="text-gray-600 leading-relaxed">
              Promptr works with you to understand exactly which features your app needs
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-black rounded-3xl p-8 text-white shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
          >
            <div className="text-5xl mb-4">02.</div>
            <h3 className="text-2xl mb-4">Prompt</h3>
            <p className="text-gray-300 leading-relaxed">
              Built on advanced prompt engineering research and multi-agent systems that translate your vision into step by step prompts to build your vison.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 text-white shadow-lg overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(34, 211, 238, 0.9) 100%),
                url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
              `,
              backgroundBlendMode: 'overlay',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
          >
            <div className="text-5xl mb-4">03.</div>
            <h3 className="text-2xl mb-4">Build</h3>
            <p className="text-white/90 leading-relaxed">
              Copy and paste the prompts into your LLM or AI app builder of choice—and build the app you actually want
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-white rounded-3xl p-12 border-2 border-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Promptr is on a mission to remove friction from AI-assisted coding. We believe that getting
              the right output shouldn't require multiple iterations and refinements.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Built for developers, designers, and creators who value their time and want to focus on what
              matters most: bringing their ideas to life.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}