import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/skills', label: 'Compétences' },
    { to: '/projects', label: 'Projets' },
    { to: '/about', label: 'À propos' },
  ];

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ease-in-out ${
      isActive
        ? 'bg-gradient-to-r from-primary/20 to-primary/10 text-white shadow-sm'
        : 'hover:bg-white/10 hover:text-white'
    }`;

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary hover:from-primary hover:to-white transition-all duration-300"
          aria-label="Retour à l'accueil"
        >
          Rovatiana <span className="text-primary">N.</span>
        </Link>

        <button
          className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-16 left-0 right-0 bg-ink/95 backdrop-blur-md md:hidden border-b border-white/10 shadow-lg"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col p-4 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.to}
                      className={linkClass}
                      onClick={() => setIsOpen(false)}
                      end
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <NavLink
                    to="/contact"
                    className="btn btn-primary w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-white font-medium transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Me contacter
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:flex md:items-center md:gap-4">
          {navLinks.map((link) => (
            <motion.div
              key={link.to}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <NavLink to={link.to} className={linkClass} end>
                {link.label}
              </NavLink>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <NavLink
              to="/contact"
              className="btn btn-primary px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-white font-medium transition-all duration-300"
            >
              Me contacter
            </NavLink>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}