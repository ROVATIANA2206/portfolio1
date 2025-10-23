const profile = {
  name: "Rovatiana Niriniaina Désiré",
  location: "Antananarivo, Madagascar",
  email: "rovationaniriniaina1@gmail.com",   // <-- Ajouté
  phone1: "+261 34 10 347 94",               // <-- Ajouté (exemple)
  phone2: "+261 33 40 369 81",   
  school: "Université ESMIA – Mahamasina",
  summary: `Étudiant en Master 2 (ESMIA – Mahamasina). Développeur Full-Stack passionné par la recherche et le développement. Solide base en IA (YOLOv8, RNN, TF-IDF), Data (ETL, Data Warehouse), et architectures web (Django/React).`,

  socials: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/' },
  ],

  skills: {
    backend: [
      'Python',
      'Django',
      'Flask',
      { name: 'Java', level: 3 },
      { name: 'PHP', level: 2 },
      { name: 'Spring Boot', level: 3 },
    ],
    frontend: ['React', 'React Router', 'Tailwind CSS'],
    mobile: ['React Native (bases)'],
    ai: [
      'YOLOv8',
      'TF-IDF',
      'RNN',
      'Ollama',
      'API Gemini',
    ],
    data: [
      'Data Warehouse',
      'ETL',
      'Data Mining',
      { name: 'Business Intelligence', level: 3 },
      { name: 'Odoo', level: 3 },
    ],
    modeling: [
      'BPMN',
      'Urbanisation des SI',
      'Programmation par contrainte',
      'Systèmes multi-agents (Mesa)',
    ],
    db: ['MySQL/XAMPP', 'PostgreSQL', 'MongoDB'],
    misc: [
      'SIG (ArcGIS 9.3)',
      'IHM et RA (Processing)',
      'Cyber-sécurité (bases)',
      'Clean Code (notions)',
    ],
    tools: ['Windows', 'Linux', 'Pack Office'],
  },

  languages: [
    { name: 'Français', level: 'Bilingue' },
    { name: 'Anglais', level: 'Intermédiaire' },
  ],

  projects: [
    {
      title: 'Détection de bouteilles (YOLOv8)',
      tagline: 'Computer Vision',
      description:
        'Détection de bouteilles Coca-Cola avec YOLOv8 et Streamlit, annotations prêtes au format YOLO.',
      stack: ['Python', 'YOLOv8', 'Streamlit'],
      image:
        'https://images.unsplash.com/photo-1664575197181-58a39b9b6baf?auto=format&fit=crop&w=1000&q=80',
      link: '#',
    },
    {
      title: 'Handicap Job Platform',
      tagline: 'Plateforme emploi inclusive',
      description:
        'Site de recherche d’emploi pour personnes amputées : création de CV avec Ollama et notation des lieux via API Gemini.',
      stack: ['Django', 'React', 'Ollama', 'API Gemini'],
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80',
      link: '#',
    },
    {
      title: 'Reconnaissance de visage (MG/Étranger)',
      tagline: 'NLP / Vision',
      description:
        'Détection et classification de visages (origine malagasy/étrangère) à but expérimental.',
      stack: ['Python', 'TensorFlow', 'PyTorch'],
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
      link: '#',
    },
    {
      title: 'TP Médical (Programmation par contrainte)',
      tagline: 'Optimisation IA',
      description:
        'Propose 2 solutions : respect budget patient et solution minimale efficace selon symptômes et médicaments disponibles.',
      stack: ['Python', 'OR-Tools', 'Programmation par contrainte'],
      image:
        'https://images.unsplash.com/photo-1581091870622-3d644ac3c581?auto=format&fit=crop&w=1000&q=80',
      link: '#',
    },
    {
      title: 'Reporting Exportations Minières',
      tagline: 'ETL & DataViz',
      description:
        'Système intégré de reporting avec Data Warehouse et ETL, backend Django, frontend React.',
      stack: ['Django', 'React', 'ETL', 'Data Warehouse'],
      image:
        'https://images.unsplash.com/photo-1629909613654-28e377c37e4c?auto=format&fit=crop&w=1000&q=80',
      link: '#',
    },
    {
      title: 'Colonie de fourmis (Mesa)',
      tagline: 'Systèmes multi-agents',
      description:
        'Simulation d’une colonie de fourmis, interaction nourriture/prédateurs/traînées de phéromones.',
      stack: ['Python', 'Mesa'],
      image:
        'https://images.unsplash.com/photo-1526378722484-cc2c8365e6eb?auto=format&fit=crop&w=1000&q=80',
      link: '#',
    },
    {
      title: 'Tononkira VLM Fanasina Itaosy',
      tagline: 'Hobby – Mobile',
      description: 'Application mobile de chant/chorale (projet personnel).',
      stack: ['React Native'],
      image:
        'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=1000&q=80',
      link: '#',
    },
  ],
};

export default profile;
