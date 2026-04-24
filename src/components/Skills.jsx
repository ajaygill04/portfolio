import { motion } from 'framer-motion';
import { SKILLS } from '../data/constants';
import SectionWrapper from './SectionWrapper';

const Skills = () => (
  <SectionWrapper id="skills" className="relative overflow-hidden">
    <div className="absolute top-0 right-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
    <div className="relative z-10">
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="tag mb-4 inline-block">Tech Stack</motion.span>
        <h2 className="section-title">Skills and<span className="gradient-text"> Technologies</span></h2>
        <p className="section-subtitle">Tools and technologies I use to bring ideas to life</p>
      </div>
      <div className="space-y-12">
        {SKILLS.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-lg font-display font-semibold text-dark-700 dark:text-dark-300 mb-5 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-primary-500 to-purple-500 rounded-full" />{cat.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {cat.items.map((item, idx) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }} className="group card flex flex-col items-center text-center p-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon className="text-2xl" style={{ color: item.color }} />
                  </div>
                  <h4 className="font-semibold text-sm text-dark-800 dark:text-dark-200 mb-3">{item.name}</h4>
                  <div className="w-full">
                    <div className="flex justify-between mb-1"><span className="text-[10px] text-dark-400">Proficiency</span><span className="text-[10px] font-semibold" style={{ color: item.color }}>{item.level}%</span></div>
                    <div className="w-full h-1.5 bg-dark-100 dark:bg-dark-700 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: idx * 0.05 + 0.3 }}
                        className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${item.color}88, ${item.color})` }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Skills;