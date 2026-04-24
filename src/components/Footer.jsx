import { FiGithub, FiHeart, FiLinkedin } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../data/constants';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative py-8 border-t border-dark-200/50 dark:border-dark-800/50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">A</span>
            </div>
            <span className="font-display font-semibold text-sm"><span className="gradient-text">Ajay</span><span className="text-dark-500">.dev</span></span>
          </div>
          <p className="text-sm text-dark-500 dark:text-dark-400 flex items-center gap-1">
            {year} Ajay Gill. Crafted with <FiHeart className="text-red-500 text-xs" /> and lots of coffee.
          </p>
          <div className="flex items-center gap-3">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-500 transition-colors" aria-label="GitHub"><FiGithub className="text-lg" /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-500 transition-colors" aria-label="LinkedIn"><FiLinkedin className="text-lg" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;