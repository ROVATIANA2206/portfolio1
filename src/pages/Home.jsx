import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import profile from '../data/profile';
import photo1 from '../assets/photo1.jpg';

export default function Home() {
  const canvasRef = useRef(null);

  // --- Animation Matrix ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);
    const characters =
      '01{}[]();<>+-=*/&%$#@!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const draw = () => {
      ctx.fillStyle = 'rgba(5,15,35,0.1)'; // bleu nuit léger
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#22d3ee'; // cyan clair lisible sur fond bleu marine
      ctx.font = fontSize + 'px monospace';

      drops.forEach((y, i) => {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 50);
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const stack = [
    'Django',
    'React',
    'Python',
    'IA (Ollama)',
    'Gemini API',
    'YOLOv8',
    'RNN',
    'MySQL',
    'PostgreSQL',
  ];

  return (
    <div className="relative overflow-hidden bg-blue-950 text-white">
      {/* --- Background --- */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ pointerEvents: 'none' }}
      />

      <div className="relative z-10">
        {/* --- SECTION INTRO --- */}
        <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* --- Texte principal --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="chip mb-4 inline-block bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200 px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
              🚀 Développeur Full-Stack – Disponible
            </div>

            <h1 className="mb-4 text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
              {profile.name || 'Rovatiana Désiré'}
            </h1>

            <p className="mb-6 max-w-xl text-gray-200 text-lg leading-relaxed">
              Passionné par l’innovation, la recherche technologique et le développement
              d’applications modernes. J’aime créer, apprendre, et relever des défis en
              équipe pour concevoir des solutions utiles et élégantes.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/projects"
                className="btn bg-cyan-600 text-white hover:bg-cyan-700 px-6 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                💼 Voir mes projets
              </a>
              <a
                href="/contact"
                className="btn border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-blue-950 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                📩 Me contacter
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              Basé à {profile.location || 'Antananarivo'} •{' '}
              {profile.school || 'ESMIA – Mahamasina'}
            </div>
          </motion.div>

          {/* --- Photo + Stack principale --- */}
          <motion.div
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.img
              src={photo1}
              alt="Profile"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-cyan-500 shadow-xl mb-6"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="card bg-blue-900/40 backdrop-blur-md shadow-lg rounded-2xl p-6 w-full max-w-md border border-cyan-700/40"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                🧠 Stack principale
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {stack.map((s, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-cyan-950/40 border border-cyan-600/40 text-cyan-200 px-3 py-1 rounded-md text-sm font-medium text-center shadow-sm"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
