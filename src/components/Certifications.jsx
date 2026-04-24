import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCalendar } from 'react-icons/fi';
import { CERTIFICATIONS } from '../data/constants';
import SectionWrapper from './SectionWrapper';

const Certifications = () => (
  <SectionWrapper id="certifications">
    <div className="text-center mb-16">
      <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="tag mb-4 inline-block">Achievements</motion.span>
      <h2 className="section-title">Certifications and<span className="gradient-text"> Publications</span></h2>
      <p className="section-subtitle">Continuous learning and academic contributions</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {CERTIFICATIONS.map((cert, index) => (
        <motion.div key={cert.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }} className="group card relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${cert.type === 'publication' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-primary-500/10 text-primary-500'}`}>
              {cert.type === 'publication' ? <FiBookOpen className="text-xl" /> : <FiAward className="text-xl" />}
            </div>
            <div className="flex-1">
              <span className={`text-[10px] font-semibold uppercase tracking-wider ${cert.type === 'publication' ? 'text-emerald-500' : 'text-primary-500'}`}>{cert.type}</span>
              <h3 className="text-base font-display font-bold text-dark-900 dark:text-white mt-1 mb-1 group-hover:text-primary-500 transition-colors">{cert.title}</h3>
              <p className="text-sm text-dark-500 dark:text-dark-400 mb-2">{cert.issuer}</p>
              <span className="flex items-center gap-1 text-xs text-dark-400"><FiCalendar className="text-[10px]" /> {cert.date}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Certifications;