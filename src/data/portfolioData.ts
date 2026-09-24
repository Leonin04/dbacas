import { Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "David Bacas",
  handle: "Leonin04",
  role: "Software Engineer / Systems & Full-Stack",
  headline: "Arquitectura de software de alto rendimiento, sistemas concurrentes y plataformas web modernas.",
  subtext: "Especializado en ingeniería de software orientada a eficiencia de memoria, pipelines de baja latencia y aplicaciones web escalables. Enfoque riguroso en resolver cuellos de botella de arquitectura sin dependencias innecesarias.",
  location: "Madrid / Remoto",
  availability: "Open to opportunities / Available for work",
  github: "https://github.com/Leonin04",
  linkedin: "https://www.linkedin.com/in/david-bacas",
  email: "davidbacas.dev@gmail.com",
};

export const PROJECTS: Project[] = [
  {
    id: "streamcore-engine",
    title: "StreamCore Engine",
    category: "Sistemas",
    challenge: "Minimizar latencia en ingestión y procesamiento de flujos masivos de datos eliminando contención de memoria en el heap y bloqueos de hilos.",
    solution: "Motor en C++20 con buffers circulares libres de bloqueo (lock-free ring buffers), vectorización SIMD para filtrado por lotes y cero copias en el paso de mensajes interproceso.",
    technologies: ["C++20", "SIMD (AVX2)", "POSIX", "CMake", "Google Benchmark"],
    metrics: [
      { label: "Throughput", value: "1.85M msg/s" },
      { label: "Latencia p99", value: "< 110 µs" },
      { label: "Asignación Heap", value: "0 bytes/hot-path" }
    ],
    githubUrl: "https://github.com/Leonin04/streamcore-engine",
    demoUrl: "https://github.com/Leonin04/streamcore-engine#benchmarks",
    featured: true
  },
  {
    id: "nexus-crdt-sync",
    title: "Nexus Sync Engine",
    category: "Full-Stack",
    challenge: "Evitar colisiones y divergencias de estado en edición concurrente multiusuario en tiempo real sin requerir una base de datos autoritativa centralizada.",
    solution: "Implementación de tipos de datos replicados libres de conflicto (CRDTs basados en estado) con serialización binaria compacta, sincronización híbrida WebSockets/WebRTC y persistencia en Redis.",
    technologies: ["TypeScript", "React 18", "WebSockets", "WebRTC", "Redis", "Node.js"],
    metrics: [
      { label: "Propagación", value: "< 14 ms" },
      { label: "Concurrencia", value: "500+ peers" },
      { label: "Complejidad merge", value: "O(log N)" }
    ],
    githubUrl: "https://github.com/Leonin04/nexus-crdt-sync",
    demoUrl: "https://github.com/Leonin04/nexus-crdt-sync",
    featured: true
  },
  {
    id: "webgpu-shaderforge",
    title: "WebGPU ShaderForge",
    category: "Gráficos / Tooling",
    challenge: "Permitir prototipado, compilación en caliente y profiling interactivo de shaders gráficos directamente en el navegador con rendimiento nativo.",
    solution: "Entorno WebGPU con analizador de sintaxis AST ligero para WGSL/GLSL, pipeline de render diferido multicapa y visor de rendimiento de búfer de fotogramas sin dependencias pesadas.",
    technologies: ["WebGPU", "WGSL", "TypeScript", "Vite", "Tailwind CSS"],
    metrics: [
      { label: "Tasa de refresco", value: "60 FPS @ 4K" },
      { label: "AST Parse time", value: "< 1.4 ms" },
      { label: "Bundle Size", value: "< 42 KB gzip" }
    ],
    githubUrl: "https://github.com/Leonin04/webgpu-shaderforge",
    demoUrl: "https://github.com/Leonin04/webgpu-shaderforge",
    featured: true
  },
  {
    id: "aegis-telemetry-agent",
    title: "Aegis eBPF Agent",
    category: "Infraestructura",
    challenge: "Capturar métricas de red y trazabilidad de llamadas al sistema (syscalls) en contenedores Docker sin penalización perceptible en el rendimiento del host.",
    solution: "Agente en Go acoplado a sondas eBPF cargadas en el kernel Linux para muestreo de paquetes a nivel de socket y exportación de métricas OpenTelemetry hacia Prometheus.",
    technologies: ["Go", "eBPF (C)", "Docker", "Linux Kernel", "Prometheus"],
    metrics: [
      { label: "Overhead de CPU", value: "< 0.9%" },
      { label: "Captura de eventos", value: "85K syscalls/s" },
      { label: "Binario único", value: "14 MB estático" }
    ],
    githubUrl: "https://github.com/Leonin04/aegis-telemetry-agent",
    demoUrl: "https://github.com/Leonin04/aegis-telemetry-agent",
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Lenguajes de Programación",
    description: "Desarrollo en sistemas de tipos estáticos, bajo nivel y scripting de alto impacto.",
    skills: [
      { name: "C++ (17/20)", focus: "Gestión de memoria manual, RAII, plantillas, STL, multithreading" },
      { name: "TypeScript", focus: "Tipado estricto, genéricos avanzados, AST, runtime validation" },
      { name: "Python", focus: "Automatización, análisis de datos, tooling, profiling, asyncio" },
      { name: "Go", focus: "Concurrencia con goroutines/channels, microservicios, eBPF" },
      { name: "Rust", focus: "Ownership model, memoria segura, zero-cost abstractions" },
      { name: "SQL", focus: "Optimización de consultas, índices, planes de ejecución" }
    ]
  },
  {
    title: "Backend & Arquitectura de Sistemas",
    description: "Diseño de arquitecturas desacopladas, pipelines de datos y protocolos eficientes.",
    skills: [
      { name: "APIs & Protocolos", focus: "gRPC, Protocol Buffers, RESTful, WebSockets bidireccionales" },
      { name: "Bases de Datos", focus: "PostgreSQL, SQLite, Redis (Caché & Pub/Sub), modelado relacional" },
      { name: "Concurrencia", focus: "Modelos lock-free, pools de hilos, sincronización atómica" },
      { name: "Event-Driven", focus: "Arquitectura basada en eventos, colas de mensajes, CRDTs" }
    ]
  },
  {
    title: "Frontend & Web Engineering",
    description: "Aplicaciones web de alto rendimiento, interfaces accesibles y tooling moderno.",
    skills: [
      { name: "React 18+", focus: "Hooks avanzados, Server Components concepts, Concurrent Mode" },
      { name: "Vite & Tooling", focus: "Bundlers ESM, optimización de assets, Tree-shaking, Rollup" },
      { name: "Tailwind CSS", focus: "Sistemas de diseño atómicos, Dark Mode nativo, CSS Grid/Flex" },
      { name: "APIs Web Nativas", focus: "Web Workers, WebSockets, Canvas 2D/WebGPU, Fetch API" }
    ]
  },
  {
    title: "Infraestructura & DevOps",
    description: "Entornos reproducibles, integración continua y observabilidad de sistemas.",
    skills: [
      { name: "Docker & Containers", focus: "Multi-stage builds, imágenes scratch mínimas, aislamiento" },
      { name: "Linux / POSIX", focus: "Bash scripting, gestión de procesos, sockets Unix, systemd" },
      { name: "CI/CD & Git", focus: "GitHub Actions workflows, testing automatizado, deployment estático" },
      { name: "Observabilidad", focus: "Prometheus, Grafana, OpenTelemetry, profiling de CPU y memoria" }
    ]
  }
];

export const CV_DATA = {
  name: "David Bacas",
  title: "Software Engineer | Systems & Full-Stack",
  summary: "Ingeniero de software con sólida base en desarrollo de sistemas de alto rendimiento, aplicaciones web concurrentes y arquitecturas escalables. Apasionado por la optimización de recursos, código mantenible y soluciones elegantes a problemas complejos de ingeniería.",
  experience: [
    {
      role: "Lead Software & Systems Engineer",
      company: "Tech Systems Lab",
      period: "2023 - Presente",
      description: "Diseño e implementación de subsistemas de alta frecuencia y baja latencia en C++ y Go. Optimización de cuellos de botella en procesamiento concurrente reduciendo la latencia p99 en un 40%."
    },
    {
      role: "Senior Full-Stack Engineer",
      company: "Distributed Cloud Solutions",
      period: "2021 - 2023",
      description: "Desarrollo de paneles analíticos en tiempo real con React 18, TypeScript y WebSockets. Arquitectura de servicios backend en Node.js y Redis soportando más de 10k conexiones activas."
    }
  ],
  education: [
    {
      degree: "Grado en Ingeniería Informática / Software Engineering",
      institution: "Universidad Técnica",
      year: "2017 - 2021"
    }
  ]
};
