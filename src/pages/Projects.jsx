// src/pages/Projects.jsx  (ou le chemin où tu as ton fichier)
import { motion } from 'framer-motion'
import profile from '../data/profile'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'

// tableau d'assets locaux (assure-toi que ces fichiers existent dans src/assets)
const localImages = [
  new URL('../assets/project1.jpg', import.meta.url).href,
  new URL('../assets/project2.jpg', import.meta.url).href,
  new URL('../assets/project3.jpg', import.meta.url).href,
  new URL('../assets/project4.jpg', import.meta.url).href,
  new URL('../assets/project5.jpg', import.meta.url).href,
  new URL('../assets/project6.jpg', import.meta.url).href,
  new URL('../assets/placeholder.jpg', import.meta.url).href,
]

export default function Projects() {
  // DEBUG : affiche dans la console quelles images seront utilisées
  const projectsWithImages = profile.projects.map((p, i) => {
    const local = localImages[i % localImages.length]
    const chosen = local // <---- on force l'image locale
    // const chosen = p.image || local // <- alternative si tu veux préférer p.image
    console.log(`Project ${i + 1}: title="${p.name || p.title}" - using image:`, chosen)
    return {
      ...p,
      image: chosen,
      // normalise champs (si ton profile utilise name/desc ou title/description)
      name: p.name || p.title || `Projet ${i + 1}`,
      tagline: p.tagline || p.subtitle || '',
      desc: p.desc || p.description || '',
      stack: p.stack || [],
      link: p.link || p.url || '',
    }
  })

  return (
    <section className="container py-14 md:py-20">
      <SectionTitle
        eyebrow="Portfolio"
        title="Tous les projets"
        subtitle="Sélection de projets académiques et personnels"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {projectsWithImages.length > 0 ? (
          projectsWithImages.map((p, i) => <ProjectCard key={i} p={p} />)
        ) : (
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Aucun projet disponible pour le moment.
          </p>
        )}
      </div>
    </section>
  )
}
