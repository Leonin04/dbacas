import React, { useState } from 'react';
import { Github, ExternalLink, Activity } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Sistemas', 'Full-Stack', 'Gráficos / Tooling', 'Infraestructura'];

  const filteredProjects = filter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="py-16 md:py-20 border-b-4 border-black bg-[#0a0a0f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-retro-green font-pixel text-xs mb-2">
              [STAGE 01] :: INGENIERÍA &amp; CASOS DE ESTUDIO
            </div>
            <h2 className="font-pixel text-xl sm:text-3xl text-white">
              PROYECTOS DESTACADOS
            </h2>
            <p className="font-arcade text-xl sm:text-2xl text-zinc-400 mt-2 max-w-xl">
              Arquitecturas reales resueltas con foco en throughput, eficiencia de memoria y estabilidad bajo carga.
            </p>
          </div>

          {/* Filter Chips - Arcade Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-retro-panel pixel-box">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`pixel-btn px-2.5 py-1.5 font-pixel text-[9px] sm:text-[10px] uppercase transition-all ${
                  filter === cat
                    ? 'bg-retro-green text-black font-bold'
                    : 'bg-black text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-retro-panel pixel-box p-6 sm:p-7 flex flex-col justify-between hover:border-retro-cyan transition-colors relative"
            >
              <div>
                {/* Top header: Category tag & Action links */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2 py-1 bg-black border-2 border-retro-yellow text-retro-yellow font-pixel text-[9px] uppercase">
                    &gt; {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-btn p-1.5 bg-black border-2 border-zinc-700 text-zinc-300 hover:text-retro-green hover:border-retro-green"
                      title="Código fuente en GitHub"
                      aria-label={`Ver repo de ${project.title}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pixel-btn p-1.5 bg-black border-2 border-zinc-700 text-zinc-300 hover:text-retro-cyan hover:border-retro-cyan"
                        title="Ver demo o benchmarks"
                        aria-label={`Ver demo de ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-pixel text-base sm:text-lg text-white mb-4">
                  {project.title}
                </h3>

                {/* Technical Challenge & Solution */}
                <div className="space-y-3 font-arcade text-lg sm:text-xl leading-relaxed">
                  <div className="p-3 bg-black/60 border border-zinc-800">
                    <span className="font-pixel text-[10px] text-retro-red uppercase block mb-1">
                      [RETO TÉCNICO]
                    </span>
                    <p className="text-zinc-300">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="p-3 bg-black/60 border border-zinc-800">
                    <span className="font-pixel text-[10px] text-retro-cyan uppercase block mb-1">
                      [ARQUITECTURA &amp; SOLUCIÓN]
                    </span>
                    <p className="text-zinc-400">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom: Tech Stack badges & Metrics */}
              <div className="mt-6 pt-4 border-t-2 border-black space-y-4">
                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-black border border-zinc-700 font-pixel text-[9px] text-retro-green"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 p-2 bg-black border-2 border-zinc-800 font-arcade text-center">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="p-1">
                      <div className="text-xs font-pixel text-zinc-500 uppercase truncate">
                        {metric.label}
                      </div>
                      <div className="text-lg font-bold text-retro-yellow flex items-center justify-center gap-1 mt-0.5">
                        <Activity className="w-3 h-3 text-zinc-500" />
                        <span>{metric.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
