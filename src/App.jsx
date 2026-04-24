import { lazy, Suspense, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="noise-bg relative">
      <Toaster position="top-right" />
      <Loader isLoading={isLoading} />
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<SectionFallback />}><About /></Suspense>
            <Suspense fallback={<SectionFallback />}><Skills /></Suspense>
            <Suspense fallback={<SectionFallback />}><Projects /></Suspense>
            <Suspense fallback={<SectionFallback />}><Experience /></Suspense>
            <Suspense fallback={<SectionFallback />}><Certifications /></Suspense>
            <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
            <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
          </main>
          <BackToTop />
        </>
      )}
    </div>
  );
}

export default App;