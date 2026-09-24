import React, { useState } from 'react';
import { Code2, Server, Globe, Cpu, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<{ name: string; focus: string } | null>(null);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-retro-green" />;
      case 1:
        return <Server className="w-4 h-4 text-retro-cyan" />;
      case 2:
        return <Globe className="w-4 h-4 text-retro-yellow" />;
      case 3:
        return <Cpu className="w-4 h-4 text-retro-red" />;
      default:
        return <Terminal className="w-4 h-4 text-retro-green" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 border-b-4 border-black bg-[#0a0a0f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-retro-yellow font-pixel text-xs mb-2">
            [STAGE 02] :: INVENTARIO TÉCNICO &amp; PARADIGMAS
          </div>
          <h2 className="font-pixel text-xl sm:text-3xl text-white">
            STACK DE DESARROLLO
          </h2>
          <p className="font-arcade text-xl sm:text-2xl text-zinc-400 mt-2 max-w-xl">
            Tecnologías y herramientas aplicadas en producción. Sin métricas falsas ni porcentajes arbitrarios.
          </p>
        </div>

        {/* 4 Categorized Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <div
              key={category.title}
              className="bg-retro-panel pixel-box p-6 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-black">
                  <span className="p-1 bg-black border border-zinc-700">
                    {getCategoryIcon(catIndex)}
                  </span>
                  <h3 className="font-pixel text-xs sm:text-sm text-retro-green">
                    {category.title}
                  </h3>
                </div>

                <p className="font-arcade text-lg text-zinc-400 mb-4">
                  {category.description}
                </p>

                {/* Skill Chips / Cartridges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isSelected = activeSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setActiveSkill(isSelected ? null : skill)}
                        onMouseEnter={() => setActiveSkill(skill)}
                        className={`pixel-btn px-2.5 py-1.5 font-pixel text-[9px] uppercase transition-all ${
                          isSelected
                            ? 'bg-retro-yellow text-black font-bold'
                            : 'bg-black text-zinc-300 border-2 border-zinc-800 hover:border-retro-green hover:text-white'
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Item Inspector / Dialogue Box */}
              <div className="mt-5 p-3 bg-black border-2 border-zinc-800 min-h-[58px] flex items-center">
                {activeSkill && category.skills.some((s) => s.name === activeSkill.name) ? (
                  <div className="font-arcade text-lg text-retro-green flex items-start gap-2">
                    <span className="font-pixel text-xs text-retro-yellow shrink-0">&gt;</span>
                    <div>
                      <strong className="text-white font-pixel text-xs mr-2">{activeSkill.name}:</strong>
                      <span className="text-zinc-300">{activeSkill.focus}</span>
                    </div>
                  </div>
                ) : (
                  <div className="font-arcade text-base text-zinc-600">
                    &gt; Selecciona o pasa el cursor por cualquier elemento para ver especificaciones.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
