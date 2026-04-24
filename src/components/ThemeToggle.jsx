import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center glass hover:bg-primary-500/10 transition-colors" aria-label="Toggle theme">
      <motion.div initial={false} animate={{ rotate: darkMode ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {darkMode ? <FiSun className="text-lg text-yellow-400" /> : <FiMoon className="text-lg text-primary-600" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;