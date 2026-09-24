export interface Project {
  id: string;
  title: string;
  category: 'Sistemas' | 'Full-Stack' | 'Gráficos / Tooling' | 'Infraestructura';
  challenge: string;
  solution: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    focus: string;
    level?: string;
  }[];
}

export interface TerminalCommand {
  command: string;
  description: string;
}
