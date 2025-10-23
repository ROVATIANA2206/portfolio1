import { motion } from 'framer-motion';
import profile from '../data/profile';

export default function Footer() {
  const socialLinks = [
    { href: profile.linkedin, label: 'LinkedIn', icon: 'fab fa-linkedin' },
    { href: profile.github, label: 'GitHub', icon: 'fab fa-github' },
    { href: profile.twitter, label: 'Twitter', icon: 'fab fa-twitter' },
  ].filter((link) => link.href);

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: '#00ffff', transition: { duration: 0.2 } },
  };

  return (
    <footer className="mt-12 bg-gradient-to-t from-gray-900 via-gray-950 to-black text-slate-300 rounded-t-3xl shadow-inner">
      <motion.div
        className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Infos */}
          <div className="flex flex-col gap-3">
            <p className="font-medium text-slate-200">
              © {new Date().getFullYear()} Rovatiana Niriniaina. Tous droits réservés.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
              <motion.a
                href={`tel:${profile.phone1}`}
                className="hover:text-white transition-colors duration-300"
                variants={linkVariants}
                whileHover="hover"
                aria-label={`Appeler ${profile.phone1}`}
              >
                {profile.phone1}
              </motion.a>
              {profile.phone2 && (
                <>
                  <span className="hidden sm:inline">·</span>
                  <motion.a
                    href={`tel:${profile.phone2}`}
                    className="hover:text-white transition-colors duration-300"
                    variants={linkVariants}
                    whileHover="hover"
                    aria-label={`Appeler ${profile.phone2}`}
                  >
                    {profile.phone2}
                  </motion.a>
                </>
              )}
              <span className="hidden sm:inline">·</span>
              <motion.a
                href="mailto:rovationaniriniaina1@gmail.com"
                className="flex items-center gap-1 hover:text-white transition-colors duration-300"
                variants={linkVariants}
                whileHover="hover"
                aria-label="Envoyer un email à rovatiananiriniaina1@gmail.com"
              >
                <span>📧</span>
                <span>rovationaniriniaina1@gmail.com</span>
              </motion.a>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                variants={linkVariants}
                whileHover="hover"
                aria-label={`Visiter ${link.label}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
