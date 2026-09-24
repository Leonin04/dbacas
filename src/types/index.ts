export interface Project {
  id: string;
  title: string;
  category: string;
  challenge: string;
  functionality?: string;
  solution?: string;
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  demoUrl?: string;
  videoFolder?: string;
  videoUrl?: string;
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
