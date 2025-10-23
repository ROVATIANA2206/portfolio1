import { motion } from 'framer-motion'
import Badge from './Badge'

export default function ProjectCard({ p }) {
  return (
    <motion.article
      className="card bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={p.image}
        alt={p.name || 'Projet informatique'}
        className="w-full h-56 object-cover rounded-t-2xl"
      />
      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {p.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {p.tagline}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap justify-end">
            {p.stack?.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Badge className="bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-md text-sm font-medium">
                  {s}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {p.desc}
        </p>
        {p.link && (
          <motion.a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-teal-600 dark:text-teal-400 hover:underline text-sm font-medium w-fit"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Voir le projet →
          </motion.a>
        )}
      </div>
    </motion.article>
  )
}