import { Project, SkillCategory } from '../types';
import { Language } from '../context/LanguageContext';

export interface PersonalInfo {
  name: string;
  handle: string;
  role: string;
  headline: string;
  subtext: string;
  location: string;
  availability: string;
  github: string;
  linkedin: string;
  instagram: string;
  instagramHandle: string;
  email: string;
}

export interface CvExperience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface CvEducation {
  degree: string;
  institution: string;
  year: string;
}

export interface CvData {
  name: string;
  title: string;
  summary: string;
  experience: CvExperience[];
  education: CvEducation[];
}

// -------------------------------------------------------------
// PERSONAL INFO
// -------------------------------------------------------------
const PERSONAL_INFO_ES: PersonalInfo = {
  name: "David Bacas Posadas",
  handle: "Leonin04",
  role: "Doble Grado en Ingeniería Informática y ADE | 5º Curso - UGR",
  headline: "Ingeniería del software y arquitectura de sistemas con visión estratégica de negocio y producto.",
  subtext: "Estudiante de 5º curso del Doble Grado en Ingeniería Informática y ADE en la Universidad de Granada (UGR), cursando la mención en Ingeniería del Software. Apasionado por la tecnología desde siempre. Disfruto aprendiendo.",
  location: "Granada, España",
  availability: "5º Curso Activo // Abierto a nuevos proyectos y oportunidades",
  github: "https://github.com/Leonin04",
  linkedin: "https://www.linkedin.com/in/david-bacas-posadas-07a888312/",
  instagram: "https://www.instagram.com/davidbp04",
  instagramHandle: "davidbp04",
  email: "davidbacasposadas@gmail.com",
};

const PERSONAL_INFO_EN: PersonalInfo = {
  name: "David Bacas Posadas",
  handle: "Leonin04",
  role: "Double Degree in Computer Engineering and Business Administration | 5th Year - UGR",
  headline: "Software engineering and systems architecture with strategic business and product vision.",
  subtext: "5th-year student of the Double Degree in Computer Engineering and Business Administration (BBA) at the University of Granada (UGR), majoring in Software Engineering. Lifelong tech enthusiast. Passionate about continuous learning.",
  location: "Granada, Spain",
  availability: "5th Year Active // Open to new projects and opportunities",
  github: "https://github.com/Leonin04",
  linkedin: "https://www.linkedin.com/in/david-bacas-posadas-07a888312/",
  instagram: "https://www.instagram.com/davidbp04",
  instagramHandle: "davidbp04",
  email: "davidbacasposadas@gmail.com",
};

// -------------------------------------------------------------
// PROJECTS
// -------------------------------------------------------------
const PROJECTS_ES: Project[] = [
  {
    id: "goiko-finder",
    title: "Goiko Finder",
    category: "Diseño",
    challenge: "Análisis de fricciones heurísticas y fallos de usabilidad web para redefinir la arquitectura de interacción.",
    functionality: "Revisión de la web de Goiko, búsqueda predictiva y prototipo de alta fidelidad con solución optimizada.",
    technologies: ["UX Research", "Usability Testing", "Figma", "HTML/CSS", "Prototipado"],
    githubUrl: "https://github.com/DIUGrupoColesterMax/UX_CaseStudyColesterMax",
    videoFolder: "GoikoFinder",
    featured: true
  },
  {
    id: "frog-off",
    title: "FrogOff",
    category: "Implementación",
    challenge: "Modelado 3D íntegro y programación de físicas, colisiones y cámara fluida en navegador sobre WebGL.",
    functionality: "Juego 3D en laberinto con recolección de objetos, obstáculos interactivos y renderizado en Three.js.",
    technologies: ["Three.js", "JavaScript", "WebGL", "Modelado 3D", "Python"],
    githubUrl: "https://github.com/Leonin04/FrogOff",
    videoFolder: "FroggOff",
    featured: true
  },
  {
    id: "irr-garten",
    title: "IrrGarten",
    category: "Implementación",
    challenge: "Dominio de POO avanzada, patrones de diseño y polimorfismo manteniendo paridad en Java y Ruby.",
    functionality: "Juego de laberinto y supervivencia con combate por turnos, ejecutable tanto en interfaz GUI como en CLI.",
    technologies: ["Java", "Ruby", "Swing GUI", "CLI", "POO Avanzada", "Patrones de Diseño"],
    githubUrl: "https://github.com/Leonin04/IrrGarten",
    videoFolder: "IrrGarten",
    featured: true
  },
  {
    id: "casino",
    title: "Casino Online",
    category: "Implementación",
    challenge: "Arquitectura desacoplada, gestión segura del flujo de apuestas y sincronización cliente-servidor.",
    functionality: "Casino online interactivo con vistas y paneles independientes para administradores y jugadores.",
    technologies: ["React", "Vite", "Node.js", "API REST", "JavaScript", "Arquitectura Desacoplada"],
    githubUrl: "https://github.com/LasanaTeam/Casino",
    videoFolder: "Casino",
    featured: true
  },
  {
    id: "incidencias-molvizar",
    title: "Incidencias Molvízar",
    category: "Implementación",
    challenge: "Arquitectura backend en PHP y motor de plantillas Twig con persistencia relacional en MySQL.",
    functionality: "Portal ciudadano de reporte y seguimiento de incidencias con panel de gestión para el ayuntamiento.",
    technologies: ["PHP", "Twig", "MySQL", "JavaScript", "HTML5/CSS3", "Gestión Municipal"],
    githubUrl: "https://github.com/Leonin04/IncidenciasMolvizar",
    videoFolder: "IncidenciasMolvizar",
    featured: true
  }
];

const PROJECTS_EN: Project[] = [
  {
    id: "goiko-finder",
    title: "Goiko Finder",
    category: "Design",
    challenge: "Heuristic friction analysis and web usability audits to redefine interaction architecture.",
    functionality: "Goiko website audit, predictive search flow, and high-fidelity prototype with optimized UX.",
    technologies: ["UX Research", "Usability Testing", "Figma", "HTML/CSS", "Prototyping"],
    githubUrl: "https://github.com/DIUGrupoColesterMax/UX_CaseStudyColesterMax",
    videoFolder: "GoikoFinder",
    featured: true
  },
  {
    id: "frog-off",
    title: "FrogOff",
    category: "Implementation",
    challenge: "End-to-end 3D modeling and programming of physics, collisions, and smooth camera in-browser with WebGL.",
    functionality: "3D maze game featuring item collection, interactive obstacles, and Three.js rendering.",
    technologies: ["Three.js", "JavaScript", "WebGL", "3D Modeling", "Python"],
    githubUrl: "https://github.com/Leonin04/FrogOff",
    videoFolder: "FroggOff",
    featured: true
  },
  {
    id: "irr-garten",
    title: "IrrGarten",
    category: "Implementation",
    challenge: "Advanced OOP mastery, design patterns, and polymorphism maintaining parity across Java and Ruby.",
    functionality: "Maze survival game featuring turn-based combat, runnable both in GUI and CLI interfaces.",
    technologies: ["Java", "Ruby", "Swing GUI", "CLI", "Advanced OOP", "Design Patterns"],
    githubUrl: "https://github.com/Leonin04/IrrGarten",
    videoFolder: "IrrGarten",
    featured: true
  },
  {
    id: "casino",
    title: "Casino Online",
    category: "Implementation",
    challenge: "Decoupled architecture, secure betting flow management, and client-server synchronization.",
    functionality: "Interactive online casino with dedicated views and dashboards for admins and players.",
    technologies: ["React", "Vite", "Node.js", "REST API", "JavaScript", "Decoupled Architecture"],
    githubUrl: "https://github.com/LasanaTeam/Casino",
    videoFolder: "Casino",
    featured: true
  },
  {
    id: "incidencias-molvizar",
    title: "Incidencias Molvízar",
    category: "Implementation",
    challenge: "Backend architecture in PHP and Twig templating engine with relational persistence in MySQL.",
    functionality: "Citizen incident reporting and tracking portal with an administrative management dashboard for the town council.",
    technologies: ["PHP", "Twig", "MySQL", "JavaScript", "HTML5/CSS3", "Municipal Management"],
    githubUrl: "https://github.com/Leonin04/IncidenciasMolvizar",
    videoFolder: "IncidenciasMolvizar",
    featured: true
  }
];

// -------------------------------------------------------------
// SKILL CATEGORIES
// -------------------------------------------------------------
const SKILL_CATEGORIES_ES: SkillCategory[] = [
  {
    title: "Lenguajes de Programación",
    description: "Dominio de C++ en bajo nivel junto con lenguajes POO, scripting en Bash y web.",
    skills: [
      { name: "C++", focus: "Punteros, memoria dinámica, sobrecarga de operadores/funciones, STL y algoritmos" },
      { name: "Java", focus: "Programación Orientada a Objetos sólida, herencia, interfaces, colecciones y sockets" },
      { name: "Ruby", focus: "POO dinámica, scripts modulares y sintaxis expresiva" },
      { name: "JavaScript", focus: "Frontend moderno, interacción con DOM, asincronía y Three.js" },
      { name: "Bash / Shell", focus: "Scripts de automatización y manejo fluido de terminal Linux" },
      { name: "PHP", focus: "Fundamentos de desarrollo web backend y manejo de servidores" }
    ]
  },
  {
    title: "Algoritmia & Sistemas Distribuidos",
    description: "Estructuras de datos avanzadas, diseño de algoritmos clásicos y coordinación en red.",
    skills: [
      { name: "Algoritmos de Búsqueda", focus: "Dijkstra, A* (A-Star), heurísticas y optimización en grafos" },
      { name: "Estructuras de Datos", focus: "Árboles binarios/AVL, vectores dinámicos, sets, maps y grafos en C++" },
      { name: "Paradigmas Algorítmicos", focus: "Greedy (voraces), Divide y Vencerás, Backtracking y análisis de coste" },
      { name: "Sistemas Distribuidos", focus: "Algoritmos de exclusión mutua, sincronización y sockets cliente-servidor" }
    ]
  },
  {
    title: "Ingeniería del Software & Web",
    description: "Modelado formal de requisitos, visualización 3D y desarrollo de videojuegos.",
    skills: [
      { name: "Three.js & Gráficos", focus: "Renderizado y manipulación de entornos 3D interactivos en WebGL" },
      { name: "HTML5 & CSS3", focus: "Estructuración semántica, maquetación y diseño web responsive" },
      { name: "Ingeniería del Software", focus: "Documentación previa, diagramas UML, casos de uso y diseño POO" },
      { name: "Godot Engine", focus: "Desarrollo básico de videojuegos, árboles de nodos y escenas interactivas" }
    ]
  },
  {
    title: "Administración de Empresas & ADE",
    description: "Competencias analíticas, financieras, económicas y soft-skills adquiridas en ADE.",
    skills: [
      { name: "Análisis de Estados Financieros", focus: "Lectura e interpretación de balance de situación y cuentas de PyG" },
      { name: "Operaciones Financieras", focus: "Cálculo de rentabilidades, flujos financieros y valoración de proyectos" },
      { name: "Micro & Macroeconomía", focus: "Estructura de mercados, funcionamiento empresarial y variables macro" },
      { name: "Trabajo en Equipo & Soft Skills", focus: "Liderazgo, adaptabilidad internacional (Erasmus Tailandia) y comunicación" }
    ]
  }
];

const SKILL_CATEGORIES_EN: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Low-level C++ proficiency alongside OOP languages, Bash scripting, and web development.",
    skills: [
      { name: "C++", focus: "Pointers, dynamic memory, operator/function overloading, STL, and algorithms" },
      { name: "Java", focus: "Robust Object-Oriented Programming, inheritance, interfaces, collections, and sockets" },
      { name: "Ruby", focus: "Dynamic OOP, modular scripts, and expressive syntax" },
      { name: "JavaScript", focus: "Modern frontend, DOM manipulation, asynchronous programming, and Three.js" },
      { name: "Bash / Shell", focus: "Automation scripting and proficient Linux terminal workflow" },
      { name: "PHP", focus: "Backend web development fundamentals and server handling" }
    ]
  },
  {
    title: "Algorithms & Distributed Systems",
    description: "Advanced data structures, classic algorithm design, and network coordination.",
    skills: [
      { name: "Search Algorithms", focus: "Dijkstra, A* (A-Star), heuristics, and graph optimization" },
      { name: "Data Structures", focus: "Binary/AVL trees, dynamic vectors, sets, maps, and graphs in C++" },
      { name: "Algorithmic Paradigms", focus: "Greedy, Divide & Conquer, Backtracking, and computational complexity analysis" },
      { name: "Distributed Systems", focus: "Mutual exclusion algorithms, synchronization, and client-server sockets" }
    ]
  },
  {
    title: "Software Engineering & Web",
    description: "Formal requirements modeling, 3D visualization, and game development.",
    skills: [
      { name: "Three.js & Graphics", focus: "Rendering and manipulation of interactive 3D environments in WebGL" },
      { name: "HTML5 & CSS3", focus: "Semantic markup, layout architecture, and responsive web design" },
      { name: "Software Engineering", focus: "Technical documentation, UML diagrams, use cases, and OOP design" },
      { name: "Godot Engine", focus: "Game development fundamentals, node trees, and interactive scenes" }
    ]
  },
  {
    title: "Business Administration & Management",
    description: "Analytical, financial, economic skills and soft-skills developed in Business Administration.",
    skills: [
      { name: "Financial Statement Analysis", focus: "Interpretation of balance sheets, P&L statements, and cash flows" },
      { name: "Financial Operations", focus: "Yield calculation, discounted cash flows, and investment project valuation" },
      { name: "Micro & Macroeconomics", focus: "Market structures, corporate economics, and macroeconomic indicators" },
      { name: "Teamwork & Soft Skills", focus: "Leadership, global adaptability (Erasmus Thailand), and communication" }
    ]
  }
];

// -------------------------------------------------------------
// CV DATA
// -------------------------------------------------------------
const CV_DATA_ES: CvData = {
  name: "David Bacas Posadas",
  title: "Doble Grado en Ingeniería Informática y ADE | 5º Curso - UGR",
  summary: "Estudiante de 5º curso del Doble Grado en Ingeniería Informática y ADE en la Universidad de Granada (UGR), cursando la mención en Ingeniería del Software. Apasionado por la tecnología, orientado a la creación de software que aporte valor real a los usuarios y habituado al desarrollo de proyectos independientes y aprendizaje continuo. Combino rigor en arquitectura técnica y desarrollo con capacidad de análisis financiero, gestión empresarial y trabajo en equipo.",
  experience: [
    {
      role: "Ingeniería del Software & Proyectos Independientes",
      company: "Desarrollo de Software & Prototipado",
      period: "Actualidad",
      description: "Desarrollo de proyectos independientes explorando gráficos interactivos en el navegador, videojuegos modulares y aplicaciones orientadas al usuario final. Aprendizaje continuo de nuevas tecnologías y enfoques de arquitectura."
    },
    {
      role: "Sistemas Distribuidos & Concurrencia",
      company: "Arquitectura & Sincronización en Red",
      period: "Especialización Técnica",
      description: "Diseño e implementación de arquitecturas distribuidas, coordinación multi-servidor mediante protocolos de red, exclusión mutua y programación orientada a objetos."
    },
    {
      role: "Estructuras de Datos & Algoritmia Avanzada",
      company: "Optimización & Computación",
      period: "Fundamentos Técnicos",
      description: "Diseño e implementación de estructuras de datos no lineales, optimización de trayectorias en redes complejas, paradigmas algorítmicos avanzados y análisis de eficiencia computacional."
    },
    {
      role: "Fundamentos de Ingeniería & Gestión de Sistemas",
      company: "Ingeniería de Sistemas & Linux",
      period: "Base Tecnológica",
      description: "Gestión estricta de memoria, desarrollo modular de bajo nivel, automatización de tareas en entornos Linux y modelado de lógica computacional."
    }
  ],
  education: [
    {
      degree: "Doble Grado en Ingeniería Informática y Administración y Dirección de Empresas (ADE)",
      institution: "Universidad de Granada (UGR), España",
      year: "5º Curso Activo"
    },
    {
      degree: "Mención en Ingeniería del Software",
      institution: "Universidad de Granada (UGR)",
      year: "En curso"
    }
  ]
};

const CV_DATA_EN: CvData = {
  name: "David Bacas Posadas",
  title: "Double Degree in Computer Engineering and Business Administration | 5th Year - UGR",
  summary: "5th-year student of the Double Degree in Computer Engineering and Business Administration (BBA) at the University of Granada (UGR), majoring in Software Engineering. Passionate about technology, focused on building impactful software that delivers tangible value to users, and accustomed to independent project development and lifelong learning. I combine technical architecture and development rigor with financial acumen, business management, and teamwork.",
  experience: [
    {
      role: "Software Engineering & Independent Projects",
      company: "Software Development & Prototyping",
      period: "Present",
      description: "Development of independent projects exploring in-browser interactive graphics, modular games, and user-centric applications. Continuous learning in cutting-edge tech stacks and software architectures."
    },
    {
      role: "Distributed Systems & Concurrency",
      company: "Architecture & Network Synchronization",
      period: "Technical Specialization",
      description: "Design and implementation of distributed architectures, multi-server network coordination, mutual exclusion algorithms, and object-oriented concurrent programming."
    },
    {
      role: "Data Structures & Advanced Algorithms",
      company: "Optimization & Computation",
      period: "Core Foundations",
      description: "Design and implementation of non-linear data structures, route optimization in complex networks, advanced algorithmic paradigms, and computational complexity analysis."
    },
    {
      role: "Engineering Foundations & Systems Management",
      company: "Systems Engineering & Linux",
      period: "Technical Foundation",
      description: "Strict memory management, low-level modular development, task automation in Linux environments, and computational logic modeling."
    }
  ],
  education: [
    {
      degree: "Double Degree in Computer Engineering and Business Administration (BBA)",
      institution: "University of Granada (UGR), Spain",
      year: "5th Year Active"
    },
    {
      degree: "Major in Software Engineering",
      institution: "University of Granada (UGR)",
      year: "In progress"
    }
  ]
};

// -------------------------------------------------------------
// GETTERS BY LANGUAGE
// -------------------------------------------------------------
export const getPersonalInfo = (lang: Language): PersonalInfo =>
  lang === 'en' ? PERSONAL_INFO_EN : PERSONAL_INFO_ES;

export const getProjects = (lang: Language): Project[] =>
  lang === 'en' ? PROJECTS_EN : PROJECTS_ES;

export const getSkillCategories = (lang: Language): SkillCategory[] =>
  lang === 'en' ? SKILL_CATEGORIES_EN : SKILL_CATEGORIES_ES;

export const getCvData = (lang: Language): CvData =>
  lang === 'en' ? CV_DATA_EN : CV_DATA_ES;

// Default exports for backward compatibility
export const PERSONAL_INFO = PERSONAL_INFO_ES;
export const PROJECTS = PROJECTS_ES;
export const SKILL_CATEGORIES = SKILL_CATEGORIES_ES;
export const CV_DATA = CV_DATA_ES;
