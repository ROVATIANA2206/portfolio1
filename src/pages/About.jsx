import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import profile from '../data/profile';
import SectionTitle from '../components/SectionTitle';

// Import des photos
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.JPG';
import photo4 from '../assets/photo4.JPG';
import photo5 from '../assets/photo5.JPG';
import photo6 from '../assets/photo6.JPG';
import photo7 from '../assets/photo7.JPG';
import photo8 from '../assets/photo8.JPG';
import photo9 from '../assets/photo9.JPG';
import photo10 from '../assets/photo10.JPG';

export default function About() {
  const photos = [
    photo1, photo2, photo3, photo4, photo5,
    photo6, photo7, photo8, photo9, photo10
  ];

  // Animation automatique
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ['0%', '-100%'],
      transition: {
        x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' }
      }
    });
  }, [controls]);

  return (
    <section className="container py-14 md:py-20 grid md:grid-cols-2 gap-10 items-start">
      {/* --- Colonne texte --- */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle eyebrow="À propos" title="Qui suis-je ?" />

        <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
          Je m'appelle <strong>{profile.name}</strong>, étudiant en Master 2 à {profile.school}. 
          Passionné par la recherche et toujours curieux des dernières innovations technologiques, 
          je m'efforce de développer des solutions créatives et efficaces. 
          J'aime travailler en équipe et partager mes connaissances pour atteindre des objectifs communs. 
          En dehors du monde du développement, je suis passionné de basket, de football et de musique, 
          ce qui me permet de rester équilibré et motivé au quotidien.
        </p>

        <ul className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 mb-6 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <li><strong>🎓 Établissement :</strong> {profile.school}</li>
          <li><strong>📍 Localisation :</strong> {profile.location}</li>
          <li><strong>🕓 Disponibilité :</strong> Immédiate</li>
        </ul>

        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="btn btn-primary">✉️ Échanger</a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.print() }}
            className="btn btn-ghost"
          >
            🖨️ Imprimer / Export PDF
          </a>
        </div>
      </motion.div>

      {/* --- Colonne galerie photos animée --- */}
      <div className="overflow-hidden rounded-2xl shadow-lg relative h-96">
        <motion.div
          animate={controls}
          className="flex gap-4 absolute"
          style={{ width: `${photos.length * 200}px` }} // ajuste selon la largeur des images
        >
          {photos.concat(photos).map((photo, i) => ( // on duplique pour un scroll infini
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="overflow-hidden rounded-2xl w-48 h-48 flex-shrink-0"
            >
              <img
                src={photo}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
