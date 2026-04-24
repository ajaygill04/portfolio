import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiMapPin, FiZap } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionWrapper from './SectionWrapper';

const stats = [
  { label: 'Projects Built', value: '10+', icon: FiCode },
  { label: 'Technologies', value: '15+', icon: FiLayers },
  { label: 'Problems Solved', value: '500+', icon: FiZap },
];

const About = () => {
  const { ref, inView } = useScrollReveal();
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="tag mb-4 inline-block">About Me</motion.span>
        <h2 className="section-title">Crafting Digital<span className="gradient-text"> Experiences</span></h2>
        <p className="section-subtitle">Get to know the developer behind the code</p>
      </div>
      <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="relative flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl opacity-20 blur-xl animate-pulse-glow" />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl opacity-75" />
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden bg-dark-200 dark:bg-dark-800">
              <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-primary-500/30">
                  <span className="text-white font-display font-bold text-5xl">AG</span>
                </div>
              </div>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 shadow-lg"><span className="text-2xl">🚀</span></motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 shadow-lg"><span className="text-2xl">💻</span></motion.div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="flex items-center gap-2 mb-4 text-dark-500 dark:text-dark-400"><FiMapPin className="text-primary-500" /><span className="text-sm font-medium">Rajasthan, India</span></div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold mb-6 text-dark-900 dark:text-white">Full Stack Developer passionate about building <span className="gradient-text">impactful products</span></h3>
          <div className="space-y-4 text-dark-600 dark:text-dark-300 leading-relaxed mb-8">
            <p>I am Ajay Gill, a Full Stack Developer specializing in the MERN stack. I build web applications that are scalable, performant, and focused on exceptional user experiences.</p>
            <p>With hands-on experience across React.js, Node.js, Express.js, and MongoDB, I bring ideas to life from database architecture to pixel-perfect frontends.</p>
            <p>Beyond web dev, I have explored IoT with Arduino and published research on smart systems. Always learning, always building.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, idx) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + idx * 0.1 }} className="text-center p-4 rounded-xl glass">
                <s.icon className="mx-auto text-xl text-primary-500 mb-2" />
                <div className="text-2xl font-display font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-dark-500 dark:text-dark-400 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;