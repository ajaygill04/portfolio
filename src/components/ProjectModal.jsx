import { AnimatePresence, motion } from 'framer-motion';
import { FiCheck, FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;
  const emojis = { 1: '🌍', 2: '🏢', 3: '♻️' };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-dark-950/80 backdrop-blur-md z-[9998]" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }} className="fixed inset-4 sm:inset-10 md:inset-16 lg:inset-20 z-[9999] overflow-hidden rounded-3xl glass-strong shadow-2xl flex flex-col">
            <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-dark-900/50 text-white flex items-center justify-center hover:bg-dark-900/70"><FiX className="text-xl" /></button>
            <div className="overflow-y-auto flex-1 p-6 sm:p-8 md:p-10">
              <div className="mb-8">
                <span className="tag mb-3 inline-block">{project.category === 'iot' ? 'IoT Project' : 'Full Stack'}</span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark-900 dark:text-white mb-2">{project.title}</h2>
                <p className="text-lg text-primary-500 font-medium">{project.subtitle}</p>
              </div>
              <div className="w-full h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-primary-500/10 to-purple-500/10 border border-dark-200 dark:border-dark-700 mb-8 flex items-center justify-center">
                <span className="text-5xl">{emojis[project.id]}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div><h3 className="text-xl font-display font-semibold mb-4 text-dark-900 dark:text-white">About</h3><p className="text-dark-600 dark:text-dark-300 leading-relaxed">{project.longDescription}</p></div>
                <div><h3 className="text-xl font-display font-semibold mb-4 text-dark-900 dark:text-white">Key Features</h3>
                  <ul className="space-y-3">{project.features.map((f, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5"><FiCheck className="text-xs text-primary-500" /></span>
                      <span className="text-dark-600 dark:text-dark-300 text-sm">{f}</span>
                    </motion.li>
                  ))}</ul>
                </div>
              </div>
              <div className="mt-8"><h3 className="text-xl font-display font-semibold mb-4 text-dark-900 dark:text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">{project.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              </div>
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-dark-200 dark:border-dark-700">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary"><span className="relative z-10 flex items-center gap-2"><FiGithub /> Source Code</span></a>
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-secondary"><FiExternalLink /> Live Demo</a>}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;