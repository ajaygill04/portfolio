import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../data/constants';

const ROLES = ['Full Stack Developer', 'MERN Stack Engineer', 'Problem Solver', 'UI/UX Enthusiast'];

const Hero = () => {
  const [text, setText] = useState('');
  const [strIdx, setStrIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = ROLES[strIdx];
    const t = setTimeout(() => {
      if (!deleting) {
        setText(cur.substring(0, charIdx + 1)); setCharIdx(p => p + 1);
        if (charIdx + 1 === cur.length) setTimeout(() => setDeleting(true), 2000);
      } else {
        setText(cur.substring(0, charIdx - 1)); setCharIdx(p => p - 1);
        if (charIdx - 1 === 0) { setDeleting(false); setStrIdx(p => (p + 1) % ROLES.length); }
      }
    }, deleting ? 50 : 100);
    return () => clearTimeout(t);
  }, [charIdx, deleting, strIdx]);

  const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };
  const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>
      <motion.div variants={c} initial="hidden" animate="visible" className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/20">
            <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative rounded-full h-2.5 w-2.5 bg-green-500" /></span>
            <span className="text-sm font-medium text-dark-600 dark:text-dark-300">Available for opportunities</span>
          </div>
        </motion.div>
        <motion.h1 variants={item} className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-2">
          <span className="text-dark-900 dark:text-white">Hi, I am </span><span className="gradient-text text-shadow-glow">Ajay Gill</span>
        </motion.h1>
        <motion.div variants={item} className="mt-4 mb-6">
          <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-display font-semibold">
            <span className="text-dark-500 dark:text-dark-400">I am a</span>
            <span className="gradient-text-alt min-w-[280px] text-left">{text}<motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="inline-block w-[3px] h-[1em] bg-primary-500 ml-1 align-middle" /></span>
          </div>
        </motion.div>
        <motion.p variants={item} className="text-lg sm:text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build scalable and user-focused web applications with modern technologies. Passionate about clean code, intuitive design, and real-world solutions.
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <motion.a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} whileHover={{ scale: 1.05, y: -2 }} className="btn-primary"><span className="relative z-10 flex items-center gap-2">View Projects <FiArrowRight /></span></motion.a>
          <motion.a href="/resume.pdf" target="_blank" whileHover={{ scale: 1.05, y: -2 }} className="btn-secondary"><FiDownload /> Download Resume</motion.a>
        </motion.div>
        <motion.div variants={item} className="flex items-center justify-center gap-4">
          {[{ icon: FiGithub, href: SOCIAL_LINKS.github, l: 'GitHub' }, { icon: FiLinkedin, href: SOCIAL_LINKS.linkedin, l: 'LinkedIn' }].map((s) => (
            <motion.a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, y: -3 }}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-dark-600 dark:text-dark-300 hover:text-primary-500 transition-all" aria-label={s.l}><s.icon className="text-xl" /></motion.a>
          ))}
        </motion.div>
        <motion.div variants={item} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="text-xs font-medium text-dark-400 tracking-widest uppercase">Scroll Down</span><FiChevronDown className="text-xl text-dark-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;