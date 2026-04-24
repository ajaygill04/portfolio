import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAV_LINKS } from '../data/constants';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const s of [...NAV_LINKS].reverse().map(l => l.id)) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top <= 150) { setActive(s); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMobileOpen(false); };

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${scrolled ? 'py-3 glass-strong shadow-lg' : 'py-5 bg-transparent'}`}>
        <div className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.a href="#home" onClick={(e) => { e.preventDefault(); goTo('home'); }} whileHover={{ scale: 1.05 }} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-500/25">
              <span className="text-white font-display font-bold text-lg">A</span>
            </div>
            <span className="font-display font-bold text-xl hidden sm:block"><span className="gradient-text">Ajay</span><span className="text-dark-700 dark:text-dark-300">.dev</span></span>
          </motion.a>
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <button key={l.id} onClick={() => goTo(l.id)} className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${active === l.id ? 'text-primary-600 dark:text-primary-400' : 'text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-dark-100'}`}>
                {active === l.id && <motion.div layoutId="navActive" className="absolute inset-0 bg-primary-500/10 rounded-lg" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />}
                <span className="relative z-10">{l.label}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => goTo('contact')} className="hidden lg:flex btn-primary text-sm py-2.5 px-5"><span className="relative z-10">Hire Me</span></motion.button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center glass">{mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}</button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-dark-950/50 backdrop-blur-sm z-[998] lg:hidden" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed top-0 right-0 bottom-0 w-72 glass-strong z-[998] lg:hidden p-6 pt-24">
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.button key={l.id} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                    onClick={() => goTo(l.id)} className={`text-left px-4 py-3 rounded-xl font-medium ${active === l.id ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400' : 'text-dark-600 dark:text-dark-400'}`}>{l.label}</motion.button>
                ))}
                <motion.button initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                  onClick={() => goTo('contact')} className="btn-primary text-center mt-4 justify-center"><span className="relative z-10">Hire Me</span></motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;