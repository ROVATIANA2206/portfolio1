import { motion } from 'framer-motion';
import profile from '../data/profile';
import SectionTitle from '../components/SectionTitle';

export default function Skills() {
  const s = profile.skills;
  const groups = [
    ['Backend', s.backend],
    ['Frontend', s.frontend],
    ['Mobile', s.mobile],
    ['IA', s.ai],
    ['Data', s.data],
    ['Modélisation', s.modeling],
    ['Bases de données', s.db],
    ['Outils & Divers', s.misc.concat(s.tools || [])],
  ];

  const formatSkill = (skill) =>
    typeof skill === 'string' ? { name: skill, level: 4 } : skill;

  return (
    <section className="container py-16 md:py-24">
      <SectionTitle
        eyebrow="Compétences"
        title="Ce que je maîtrise"
        subtitle="Un aperçu clair et stylé de mes domaines d’expertise"
      />

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(([title, list], i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 10px 40px rgba(56,189,248,0.2)',
            }}
            className="rounded-2xl bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-gray-100 border border-blue-800/50 p-6 backdrop-blur-sm shadow-lg transition-all duration-300"
          >
            {/* --- Titre du groupe --- */}
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2 text-cyan-300">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              {title}
            </h3>

            {/* --- Liste de skills --- */}
            <div className="flex flex-wrap gap-3">
              {list.map((x) => {
                const skill = formatSkill(x);
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="relative flex items-center gap-2 bg-blue-900/40 border border-cyan-700/40 text-cyan-200 px-3 py-1.5 rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-800/70 hover:shadow-md hover:shadow-cyan-600/20"
                  >
                    {/* Étoiles à gauche */}
                    <div className="flex gap-0.5 text-xs">
                      {Array.from({ length: 5 }, (_, i) => (
                        <motion.span
                          key={i}
                          className={`transition-transform duration-200 ${
                            i < skill.level
                              ? 'text-yellow-400'
                              : 'text-gray-500 dark:text-gray-700'
                          }`}
                          whileHover={{ scale: 1.3, rotate: 5 }}
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>

                    {/* Nom du skill */}
                    <span className="font-medium text-sm tracking-wide">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Langues --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-8 shadow-xl border border-cyan-400/30"
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          🌍 Langues
        </h3>
        <div className="flex flex-wrap gap-3">
          {profile.languages.map((l) => (
            <motion.span
              key={l.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-white/20 shadow-sm"
            >
              {l.name} – {l.level}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
