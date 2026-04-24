import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SectionWrapper = ({ id, children, className = '' }) => {
  const { ref, inView } = useScrollReveal(0.05);
  return (
    <motion.section ref={ref} id={id} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }} className={`section-padding ${className}`}>
      <div className="container-custom">{children}</div>
    </motion.section>
  );
};

export default SectionWrapper;