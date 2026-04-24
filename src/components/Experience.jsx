import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { EXPERIENCE } from '../data/constants';
import SectionWrapper from './SectionWrapper';

const Experience = () => (
  <SectionWrapper id="experience">
    <div className="text-center mb-16">
      <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="tag mb-4 inline-block">Experience</motion.span>
      <h2 className="section-title">Professional<span className="gradient-text"> Journey</span></h2>
      <p className="section-subtitle">Hands-on experience through industry simulations and real projects</p>
    </div>
    <div className="max-w-3xl mx-auto">
      {EXPERIENCE.map((exp, index) => (
        <motion.div key={exp.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="relative">
          <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-primary-500 to-transparent" />
          <div className="flex gap-6">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-500/25"><FiBriefcase className="text-xl text-white" /></div>
            </div>
            <div className="card flex-1 mb-8">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-display font-bold text-dark-900 dark:text-white">{exp.role}</h3>
                  <p className="text-primary-500 font-medium">{exp.company}</p>
                </div>
                <span className="flex items-center gap-1.5 text-sm text-dark-500 dark:text-dark-400 bg-dark-100 dark:bg-dark-700/50 px-3 py-1 rounded-lg"><FiCalendar className="text-xs" /> {exp.period}</span>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />{point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">{exp.tech.map((t) => <span key={t} className="tag text-[11px]">{t}</span>)}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Experience;