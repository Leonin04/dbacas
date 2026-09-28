import { Language } from '../context/LanguageContext';

export interface Translations {
  nav: {
    home: string;
    projects: string;
    techStack: string;
    aboutMe: string;
    viewCv: string;
    cvMobile: string;
    github: string;
  };
  hero: {
    status: string;
    degree: string;
    univ: string;
    major: string;
    tag: string;
    alias: string;
    metric1Title: string;
    metric1Desc: string;
    metric2Title: string;
    metric2Desc: string;
    metric3Title: string;
    metric3Desc: string;
    githubBtn: string;
    linkedinBtn: string;
    photoHeader: string;
    photoYear: string;
    photoFootRole: string;
    locationLabel: string;
    locationValue: string;
    focusLabel: string;
    focusValue: string;
    envLabel: string;
    envValue: string;
  };
  projects: {
    stage: string;
    title: string;
    subtitle: string;
    categories: {
      all: string;
      design: string;
      implementation: string;
    };
    techChallenge: string;
    functionality: string;
    videoLoading: string;
    noProjects: string;
    viewLabel: string;
    prev: string;
    next: string;
    sourceCodeTitle: string;
    demoTitle: string;
  };
  techStack: {
    stage: string;
    title: string;
    subtitle: string;
    activeCategories: string;
    cartridges: {
      title: string;
      subtitle: string;
    }[];
    statusActive: string;
    statusSelect: string;
    slotTitle: string;
    techsCount: string;
    detailTitle: string;
    inspectorHelp: string;
    skillLevels: Record<string, { tag: string; level: string }>;
  };
  aboutMe: {
    stage: string;
    title: string;
    subtitle: string;
    p1BeforeName: string;
    p1AfterName: string;
    p2: string;
    p3: string;
    p4BeforeErasmus: string;
    p4Erasmus: string;
    p4AfterErasmus: string;
    cvBtn: string;
    principles: {
      title: string;
      description: string;
    }[];
  };
  footer: {
    rightsReserved: string;
    systemId: string;
    top: string;
  };
  cvModal: {
    dossier: string;
    printPdf: string;
    pdfMobile: string;
    closeBtn: string;
    closeModalAria: string;
    techSummary: string;
    stackCapabilities: string;
    experience: string;
    education: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    locationLabel: string;
    locationValue: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'INICIO',
      projects: 'PROYECTOS',
      techStack: 'STACK TÉCNICO',
      aboutMe: 'MÁS SOBRE MÍ',
      viewCv: 'VER CV',
      cvMobile: 'CV',
      github: 'GITHUB',
    },
    hero: {
      status: 'STATUS: 5TO_CURSO_ACTIVO',
      degree: 'GRADO: INF + ADE',
      univ: 'UNIV: UGR (GRANADA)',
      major: 'MENCIÓN: ING_SOFTWARE',
      tag: '> DOBLE_GRADO :: INGENIERÍA_INFORMÁTICA_Y_ADE :: UGR',
      alias: 'ALIAS:',
      metric1Title: 'INGENIERÍA SOFTWARE',
      metric1Desc: 'Diseño modular y valor',
      metric2Title: 'SISTEMAS & ARQUITECTURA',
      metric2Desc: 'Distribuidos y concurrencia',
      metric3Title: 'VISIÓN NEGOCIO & ADE',
      metric3Desc: 'Estrategia y equipo',
      githubBtn: 'GITHUB /Leonin04',
      linkedinBtn: 'LINKEDIN /david-bacas',
      photoHeader: 'PHOTO::OPERATOR',
      photoYear: '5º CURSO',
      photoFootRole: 'UGR // INF+ADE',
      locationLabel: 'UBICACIÓN:',
      locationValue: 'GRANADA, ES',
      focusLabel: 'ENFOQUE:',
      focusValue: 'ING_SOFTWARE',
      envLabel: 'ENTORNO:',
      envValue: 'LINUX / WINDOWS',
    },
    projects: {
      stage: '[STAGE 01] :: PROYECTOS & DESARROLLO',
      title: 'PROYECTOS DESTACADOS',
      subtitle:
        'Selección de proyectos reales desarrollados con rigor técnico y valor práctico. Cada tarjeta incluye demostración en vídeo interactivo, desglose del reto de ingeniería y la funcionalidad implementada.',
      categories: {
        all: 'Todos',
        design: 'Diseño',
        implementation: 'Implementación',
      },
      techChallenge: '[RETO TÉCNICO]',
      functionality: '[FUNCIONALIDAD]',
      videoLoading: 'VÍDEO DEMO EN CARGA',
      noProjects: 'No hay proyectos en esta categoría por ahora.',
      viewLabel: 'VISTA:',
      prev: 'ANTERIOR',
      next: 'SIGUIENTE',
      sourceCodeTitle: 'Código fuente en GitHub',
      demoTitle: 'Ver demo o enlace',
    },
    techStack: {
      stage: '[STAGE 02] :: STACK TÉCNICO & ESPECIALIDADES',
      title: 'STACK DE DESARROLLO',
      subtitle: 'Selecciona una categoría para cargar sus tecnologías y áreas de aplicación técnica.',
      activeCategories: '4 CATEGORÍAS ACTIVAS',
      cartridges: [
        { title: 'LENGUAJES CORE', subtitle: 'C++, Java, Ruby, Bash' },
        { title: 'ALGORITMOS & SISTEMAS', subtitle: 'Grafos, Distribuidos, C++' },
        { title: 'SOFTWARE & WEB', subtitle: 'Three.js, UML, Godot' },
        { title: 'GESTIÓN & ADE', subtitle: 'Finanzas, Economía, Negocio' },
      ],
      statusActive: 'ACTIVO',
      statusSelect: 'SELECCIONAR',
      slotTitle: 'SLOT_01:',
      techsCount: 'TECNOLOGÍAS',
      detailTitle: '> DETALLE:',
      inspectorHelp: 'Haz clic sobre cualquier tecnología para ver su detalle de aplicación en el sistema.',
      skillLevels: {
        'C++': { tag: 'Punteros & Memoria', level: 'Dominio' },
        'Java': { tag: 'POO & Sockets', level: 'Medio-Alto' },
        'Ruby': { tag: 'POO Dinámica', level: 'Medio' },
        'JavaScript': { tag: 'Web & Asincronía', level: 'Competente' },
        'Bash / Shell': { tag: 'Terminal & Scripts', level: 'Soltura' },
        'PHP': { tag: 'Backend & Servidor', level: 'Básico' },
        'Algoritmos de Búsqueda': { tag: 'Dijkstra & A*', level: 'Avanzado' },
        'Estructuras de Datos': { tag: 'Árboles & Grafos', level: 'Dominio' },
        'Paradigmas Algorítmicos': { tag: 'Greedy, D&C & Coste', level: 'Avanzado' },
        'Sistemas Distribuidos': { tag: 'Exclusión Mutua', level: 'Avanzado' },
        'Three.js & Gráficos': { tag: 'WebGL & 3D', level: 'Competente' },
        'HTML5 & CSS3': { tag: 'Estándares Web', level: 'Avanzado' },
        'Ingeniería del Software': { tag: 'UML & Requisitos', level: 'Avanzado' },
        'Godot Engine': { tag: 'Nodos & Escenas', level: 'Básico' },
        'Análisis de Estados Financieros': { tag: 'Balances & PyG', level: 'Avanzado' },
        'Operaciones Financieras': { tag: 'Valoración de Flujos', level: 'Avanzado' },
        'Micro & Macroeconomía': { tag: 'Mercados & Empresa', level: 'Sólido' },
        'Trabajo en Equipo & Soft Skills': { tag: 'Erasmus & Liderazgo', level: 'Experiencia' },
      },
    },
    aboutMe: {
      stage: '[STAGE 03] :: PERFIL & FILOSOFÍA DE SOFTWARE',
      title: 'MÁS SOBRE MÍ',
      subtitle:
        'Estudiante de 5º curso de Informática y ADE en la UGR, con mención en Ingeniería del Software y experiencia internacional.',
      p1BeforeName: 'Soy ',
      p1AfterName:
        ', estudiante de 5º curso de Ingeniería Informática y ADE en la Universidad de Granada (UGR), cursando la mención en Ingeniería del Software.',
      p2: 'Siempre he sido un apasionado de la tecnología. Mi motivación principal es crear software útil que aporte valor real a los usuarios, disfrutando enormemente de aprender de forma constante mientras realizo proyectos independientes por mi cuenta.',
      p3: 'La formación en ADE enriquece mi enfoque técnico con una visión estratégica de negocio: viabilidad económica, comprensión analítica y habilidades sólidas de gestión y trabajo en equipo.',
      p4BeforeErasmus: 'Además, mi experiencia de ',
      p4Erasmus: 'intercambio académico (Erasmus) en Tailandia',
      p4AfterErasmus:
        ' fortaleció mi capacidad de adaptación, mentalidad global y comunicación en entornos multiculturales diversos.',
      cvBtn: 'CONSULTAR DOSSIER / CV',
      principles: [
        {
          title: 'INGENIERÍA & VALOR DE USUARIO',
          description:
            'Arquitectura limpia, diseño modular y foco constante en construir software que aporte valor real, directo y tangible a los usuarios.',
        },
        {
          title: 'APRENDIZAJE & PROYECTOS PROPIOS',
          description:
            'Curiosidad técnica y aprendizaje continuo mediante el desarrollo de proyectos independientes por iniciativa propia.',
        },
        {
          title: 'VISIÓN DE NEGOCIO & ADE',
          description:
            'Perspectiva analítica de empresa: viabilidad de proyectos, lectura de estados financieros y trabajo en equipo multidisciplinar.',
        },
        {
          title: 'INTERCAMBIO ERASMUS // TAILANDIA',
          description:
            'Experiencia académica internacional en Tailandia: inmersión cultural, alta adaptabilidad y comunicación eficaz en entornos globales.',
        },
      ],
    },
    footer: {
      rightsReserved: 'TODOS LOS DERECHOS RESERVADOS.',
      systemId: 'SYSTEM_ID: X86_64 // RELEASE',
      top: 'TOP',
    },
    cvModal: {
      dossier: 'DOSSIER',
      printPdf: 'IMPRIMIR / PDF',
      pdfMobile: 'PDF',
      closeBtn: '[ CERRAR ]',
      closeModalAria: 'Cerrar modal',
      techSummary: '// RESUMEN TÉCNICO',
      stackCapabilities: '// STACK & CAPACIDADES',
      experience: '// TRAYECTORIA',
      education: '// EDUCACIÓN',
      emailLabel: 'EMAIL:',
      linkedinLabel: 'LINKEDIN:',
      githubLabel: 'GITHUB:',
      locationLabel: 'UBICACIÓN:',
      locationValue: 'Granada, España',
    },
  },
  en: {
    nav: {
      home: 'HOME',
      projects: 'PROJECTS',
      techStack: 'TECH STACK',
      aboutMe: 'ABOUT ME',
      viewCv: 'VIEW CV',
      cvMobile: 'CV',
      github: 'GITHUB',
    },
    hero: {
      status: 'STATUS: 5TH_YEAR_ACTIVE',
      degree: 'DEGREE: CS + BBA',
      univ: 'UNIV: UGR (GRANADA)',
      major: 'MAJOR: SOFTWARE_ENG',
      tag: '> DOUBLE_DEGREE :: CS_AND_BBA :: UGR',
      alias: 'ALIAS:',
      metric1Title: 'SOFTWARE ENGINEERING',
      metric1Desc: 'Modular design & value',
      metric2Title: 'SYSTEMS & ARCHITECTURE',
      metric2Desc: 'Distributed & concurrency',
      metric3Title: 'BUSINESS & BBA VISION',
      metric3Desc: 'Strategy & team',
      githubBtn: 'GITHUB /Leonin04',
      linkedinBtn: 'LINKEDIN /david-bacas',
      photoHeader: 'PHOTO::OPERATOR',
      photoYear: '5TH YEAR',
      photoFootRole: 'UGR // CS+BBA',
      locationLabel: 'LOCATION:',
      locationValue: 'GRANADA, ES',
      focusLabel: 'FOCUS:',
      focusValue: 'SOFTWARE_ENG',
      envLabel: 'ENVIRONMENT:',
      envValue: 'LINUX / WINDOWS',
    },
    projects: {
      stage: '[STAGE 01] :: PROJECTS & DEVELOPMENT',
      title: 'FEATURED PROJECTS',
      subtitle:
        'Curated selection of real-world projects engineered with technical rigor and practical value. Each card features an interactive video demonstration, engineering challenge analysis, and implemented functionality.',
      categories: {
        all: 'All',
        design: 'Design',
        implementation: 'Implementation',
      },
      techChallenge: '[TECH CHALLENGE]',
      functionality: '[FUNCTIONALITY]',
      videoLoading: 'VIDEO DEMO LOADING',
      noProjects: 'No projects found in this category.',
      viewLabel: 'VIEW:',
      prev: 'PREV',
      next: 'NEXT',
      sourceCodeTitle: 'Source code on GitHub',
      demoTitle: 'View demo or link',
    },
    techStack: {
      stage: '[STAGE 02] :: TECH STACK & SPECIALTIES',
      title: 'DEVELOPMENT STACK',
      subtitle: 'Select a category cartridge to inspect technologies and practical technical applications.',
      activeCategories: '4 ACTIVE CATEGORIES',
      cartridges: [
        { title: 'CORE LANGUAGES', subtitle: 'C++, Java, Ruby, Bash' },
        { title: 'ALGORITHMS & SYSTEMS', subtitle: 'Graphs, Distributed, C++' },
        { title: 'SOFTWARE & WEB', subtitle: 'Three.js, UML, Godot' },
        { title: 'MANAGEMENT & BBA', subtitle: 'Finance, Economics, Business' },
      ],
      statusActive: 'ACTIVE',
      statusSelect: 'SELECT',
      slotTitle: 'SLOT_01:',
      techsCount: 'TECHNOLOGIES',
      detailTitle: '> DETAIL:',
      inspectorHelp: 'Click on any technology card to view its system application details.',
      skillLevels: {
        'C++': { tag: 'Pointers & Memory', level: 'Mastery' },
        'Java': { tag: 'OOP & Sockets', level: 'Upper-Inter.' },
        'Ruby': { tag: 'Dynamic OOP', level: 'Intermediate' },
        'JavaScript': { tag: 'Web & Async', level: 'Competent' },
        'Bash / Shell': { tag: 'Terminal & Scripts', level: 'Proficient' },
        'PHP': { tag: 'Backend & Server', level: 'Basic' },
        'Search Algorithms': { tag: 'Dijkstra & A*', level: 'Advanced' },
        'Data Structures': { tag: 'Trees & Graphs', level: 'Mastery' },
        'Algorithmic Paradigms': { tag: 'Greedy, D&C & Cost', level: 'Advanced' },
        'Distributed Systems': { tag: 'Mutual Exclusion', level: 'Advanced' },
        'Three.js & Graphics': { tag: 'WebGL & 3D', level: 'Competent' },
        'HTML5 & CSS3': { tag: 'Web Standards', level: 'Advanced' },
        'Software Engineering': { tag: 'UML & Req.', level: 'Advanced' },
        'Godot Engine': { tag: 'Nodes & Scenes', level: 'Basic' },
        'Financial Statement Analysis': { tag: 'Balance & P&L', level: 'Advanced' },
        'Financial Operations': { tag: 'Flow Valuation', level: 'Advanced' },
        'Micro & Macroeconomics': { tag: 'Markets & Firm', level: 'Solid' },
        'Teamwork & Soft Skills': { tag: 'Erasmus & Leadership', level: 'Experience' },
      },
    },
    aboutMe: {
      stage: '[STAGE 03] :: PROFILE & SOFTWARE PHILOSOPHY',
      title: 'ABOUT ME',
      subtitle:
        '5th-year Computer Science and BBA student at UGR, majoring in Software Engineering with international exchange experience.',
      p1BeforeName: "I'm ",
      p1AfterName:
        ', a 5th-year student of Computer Science and Business Administration (BBA) at the University of Granada (UGR), majoring in Software Engineering.',
      p2: 'I have always been deeply passionate about technology. My primary motivation is creating useful software that delivers real value to users, thoroughly enjoying continuous learning while building independent side projects.',
      p3: 'My Business Administration training complements my technical mindset with a strategic corporate vision: financial viability, analytical problem-solving, and solid management and teamwork abilities.',
      p4BeforeErasmus: 'In addition, my academic ',
      p4Erasmus: 'exchange experience (Erasmus) in Thailand',
      p4AfterErasmus:
        ' strengthened my adaptability, global outlook, and communication skills in multicultural environments.',
      cvBtn: 'VIEW DOSSIER / CV',
      principles: [
        {
          title: 'ENGINEERING & USER VALUE',
          description:
            'Clean architecture, modular design, and a constant focus on crafting software that brings real, direct, and tangible user value.',
        },
        {
          title: 'CONTINUOUS LEARNING & PERSONAL PROJECTS',
          description:
            'Technical curiosity and relentless learning driven by self-initiated, independent software developments.',
        },
        {
          title: 'BUSINESS PERSPECTIVE & BBA',
          description:
            'Corporate analytical mindset: project viability, financial statement reading, and interdisciplinary team collaboration.',
        },
        {
          title: 'ERASMUS EXCHANGE // THAILAND',
          description:
            'International academic exchange in Thailand: cultural immersion, high adaptability, and effective cross-cultural communication.',
        },
      ],
    },
    footer: {
      rightsReserved: 'ALL RIGHTS RESERVED.',
      systemId: 'SYSTEM_ID: X86_64 // RELEASE',
      top: 'TOP',
    },
    cvModal: {
      dossier: 'DOSSIER',
      printPdf: 'PRINT / PDF',
      pdfMobile: 'PDF',
      closeBtn: '[ CLOSE ]',
      closeModalAria: 'Close modal',
      techSummary: '// TECHNICAL SUMMARY',
      stackCapabilities: '// STACK & CAPABILITIES',
      experience: '// EXPERIENCE',
      education: '// EDUCATION',
      emailLabel: 'EMAIL:',
      linkedinLabel: 'LINKEDIN:',
      githubLabel: 'GITHUB:',
      locationLabel: 'LOCATION:',
      locationValue: 'Granada, Spain',
    },
  },
};

export const getTranslations = (lang: Language): Translations => TRANSLATIONS[lang];
