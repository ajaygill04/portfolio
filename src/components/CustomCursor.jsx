import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) setVisible(true);
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      setHovering(!!(e.target.closest('a') || e.target.closest('button') || e.target.closest('input') || e.target.closest('textarea')));
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, []);

  if (!visible) return null;
  return (
    <>
      <motion.div className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary-500 mix-blend-difference pointer-events-none z-[10000]"
        animate={{ x: pos.x - 8, y: pos.y - 8, scale: hovering ? 0.5 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }} />
      <motion.div className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary-400/50 pointer-events-none z-[10000]"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: hovering ? 2 : 1, opacity: hovering ? 0.8 : 0.4 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.8 }} />
    </>
  );
};

export default CustomCursor;