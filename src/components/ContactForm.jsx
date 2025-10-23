import { useState } from 'react';
import { motion } from 'framer-motion';
import profile from '../data/profile';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)',
      transition: { duration: 0.2 },
    },
    blur: {
      scale: 1,
      boxShadow: 'none',
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundImage: 'linear-gradient(to right, #your-primary-color, #your-primary-color/80)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="card bg-ink/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <form onSubmit={handleSubmit} className="grid gap-5 max-w-lg mx-auto">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-1.5">
            Nom
          </label>
          <motion.input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            placeholder="Votre nom"
            required
            variants={inputVariants}
            whileFocus="focus"
            animate="blur"
            aria-describedby="name-error"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1.5">
            Email
          </label>
          <motion.input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            placeholder="votre@email.com"
            required
            variants={inputVariants}
            whileFocus="focus"
            animate="blur"
            aria-describedby="email-error"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-1.5">
            Message
          </label>
          <motion.textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            placeholder="Votre message..."
            required
            variants={inputVariants}
            whileFocus="focus"
            animate="blur"
            aria-describedby="message-error"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            type="submit"
            className="btn btn-primary w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white font-medium transition-all duration-300 disabled:opacity-50"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            disabled={status === 'sending'}
            aria-label="Envoyer le message"
          >
            {status === 'sending' ? 'Envoi...' : 'Envoyer'}
          </motion.button>
          <motion.a
            href={`tel:${profile.phone1}`}
            className="btn btn-ghost w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label={`Appeler ${profile.phone1}`}
          >
            Appeler
          </motion.a>
        </div>
        {status === 'success' && (
          <motion.p
            className="text-green-400 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            role="alert"
          >
            Message envoyé avec succès !
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            className="text-red-400 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            role="alert"
          >
            Une erreur s'est produite. Veuillez réessayer ou utiliser{' '}
            <a href={`mailto:${profile.email}`} className="underline hover:text-white">
              l'email direct
            </a>.
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}