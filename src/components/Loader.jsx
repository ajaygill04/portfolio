import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark-950">
        <div className="relative flex flex-col items-center">
          <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-primary-500/50">
              <span className="text-white font-display font-bold text-4xl">A</span>
            </div>
            {[0, 1, 2].map((i) => (
              <motion.div key={i} className="absolute w-3 h-3 rounded-full bg-primary-400" style={{ top: '50%', left: '50%' }}
                animate={{ x: [0, Math.cos((i * 2 * Math.PI) / 3) * 50], y: [0, Math.sin((i * 2 * Math.PI) / 3) * 50], opacity: [0, 1, 0], scale: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} />
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 flex items-center gap-1">
            {'Loading'.split('').map((char, i) => (
              <motion.span key={i} className="text-dark-400 font-medium text-sm tracking-widest uppercase"
                animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}>{char}</motion.span>
            ))}
          </motion.div>
          <motion.div className="mt-4 w-48 h-0.5 bg-dark-800 rounded-full overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <motion.div className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full" initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 2 }} />
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Loader;