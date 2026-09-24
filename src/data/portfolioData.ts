import { Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
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
  email: "davidbacas.dev@gmail.com",
};

export const PROJECTS: Project[] = [
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


export const SKILL_CATEGORIES: SkillCategory[] = [
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

export const CV_DATA = {
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


