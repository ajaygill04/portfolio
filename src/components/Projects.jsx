import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { PROJECTS } from '../data/constants';
import ProjectModal from './ProjectModal';
import SectionWrapper from './SectionWrapper';

const FILTERS = [{ label: 'All', value: 'all' }, { label: 'Full Stack', value: 'fullstack' }, { label: 'IoT', value: 'iot' }];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const emojis = { 1: '🌍', 2: '💼', 3: '🏢', 4: '♻️' };

  return (
    <SectionWrapper id="projects" className="relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="tag mb-4 inline-block">My Work</motion.span>
          <h2 className="section-title">Featured<span className="gradient-text"> Projects</span></h2>
          <p className="section-subtitle">Real-world applications showcasing full stack development</p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-2 mb-12">
          {FILTERS.map((f) => (
            <button key={f.value} onClick={() => setFilter(f.value)} className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${filter === f.value ? 'text-white' : 'text-dark-600 dark:text-dark-400 glass'}`}>
              {filter === f.value && <motion.div layoutId="filterBg" className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />}
              <span className="relative z-10">{f.label}</span>
            </button>
          ))}
        </motion.div>
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }} className="group card overflow-hidden cursor-pointer" onClick={() => setSelected(project)}>
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-primary-500/10 to-purple-500/10 border border-dark-200/50 dark:border-dark-700/50">
                  <div className="absolute inset-0 flex items-center justify-center"><span className="text-5xl group-hover:scale-125 transition-transform duration-500">{emojis[project.id]}</span></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                    <span className="text-white text-sm font-medium flex items-center gap-1">View Details <FiArrowRight /></span>
                  </div>
                  <div className="absolute top-3 left-3"><span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider bg-white/90 dark:bg-dark-800/90 text-primary-600 dark:text-primary-400">{project.category === 'iot' ? 'IoT' : 'Full Stack'}</span></div>
                </div>
                <h3 className="text-xl font-display font-bold text-dark-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                <p className="text-sm text-primary-500 font-medium mb-3">{project.subtitle}</p>
                <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 4).map((t) => (<span key={t} className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-dark-100 dark:bg-dark-700/50 text-dark-600 dark:text-dark-300">{t}</span>))}
                  {project.tech.length > 4 && <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-primary-500/10 text-primary-500">+{project.tech.length - 4}</span>}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-dark-100 dark:border-dark-700/50">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-sm font-medium text-dark-600 dark:text-dark-400 hover:text-primary-500 transition-colors"><FiGithub /> Code</a>
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-sm font-medium text-dark-600 dark:text-dark-400 hover:text-primary-500 transition-colors"><FiExternalLink /> Demo</a>}
                  <span className="ml-auto text-sm font-medium text-primary-500 flex items-center gap-1">Details <FiArrowRight className="text-xs" /></span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <ProjectModal project={selected} isOpen={!!selected} onClose={() => setSelected(null)} />
    </SectionWrapper>
  );
};

export default Projects;