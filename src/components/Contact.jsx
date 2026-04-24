import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiGithub, FiLinkedin, FiLoader, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../data/constants';
import SectionWrapper from './SectionWrapper';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        'service_5p0744t',
        'template_fl29e1l',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: 'Ajay Gill',
        },
        '5a05hoC3-jketRbaz'
      );
      toast.success('Message sent successfully! I will get back to you soon.', { style: { background: '#1e293b', color: '#f1f5f9', borderRadius: '12px' } });
      setForm({ name: '', email: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please try again.', { style: { background: '#1e293b', color: '#f1f5f9', borderRadius: '12px' } });
    } finally {
      setSending(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="tag mb-4 inline-block">Get In Touch</motion.span>
          <h2 className="section-title">Lets Work<span className="gradient-text"> Together</span></h2>
          <p className="section-subtitle">Have a project in mind? I would love to hear from you.</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-dark-900 dark:text-white mb-4">Lets start a conversation</h3>
              <p className="text-dark-500 dark:text-dark-400 leading-relaxed">I am always open to discussing new projects, creative ideas, or opportunities.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center"><FiMail className="text-xl text-primary-500" /></div>
                <div><p className="text-xs text-dark-400 uppercase tracking-wider font-medium">Email</p><a href="mailto:gillajay96024@gmail.com" className="text-dark-900 dark:text-white font-medium hover:text-primary-500 transition-colors">gillajay96024@gmail.com</a></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center"><FiMapPin className="text-xl text-primary-500" /></div>
                <div><p className="text-xs text-dark-400 uppercase tracking-wider font-medium">Location</p><p className="text-dark-900 dark:text-white font-medium">Rajasthan, India</p></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-dark-400 mb-3 font-medium">Find me on</p>
              <div className="flex items-center gap-3">
                {[{ icon: FiGithub, href: SOCIAL_LINKS.github, l: 'GitHub' }, { icon: FiLinkedin, href: SOCIAL_LINKS.linkedin, l: 'LinkedIn' }].map((s) => (
                  <motion.a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-dark-600 dark:text-dark-300 hover:text-primary-500 transition-all" aria-label={s.l}><s.icon className="text-lg" /></motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">Your Name</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-700/50 border border-dark-200 dark:border-dark-600 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">Your Email</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-700/50 border border-dark-200 dark:border-dark-600 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-700/50 border border-dark-200 dark:border-dark-600 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-none" />
              </div>
              <motion.button type="submit" disabled={sending} whileHover={{ scale: sending ? 1 : 1.02 }} whileTap={{ scale: sending ? 1 : 0.98 }}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                <span className="relative z-10 flex items-center gap-2">{sending ? <><FiLoader className="animate-spin" /> Sending...</> : <><FiSend /> Send Message</>}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;