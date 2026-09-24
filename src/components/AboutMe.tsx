import React from 'react';
import { Zap, Shield, HardDrive, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutMeProps {
  onOpenCv: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenCv }) => {
  const principles = [
    {
      icon: <Zap className="w-5 h-5 text-retro-green" />,
      title: "EFICIENCIA & MEMORIA",
      description: "Optimización centrada en evitar contención de heap, reducción de basura de GC, zero-copy buffers y paralelismo SIMD a nivel de CPU."
    },
    {
      icon: <Shield className="w-5 h-5 text-retro-cyan" />,
      title: "TIPADO & DETERMINISMO",
      description: "Diseño de modelos de dominio seguros con TypeScript y C++. Eliminación de dependencias innecesarias y pruebas rigurosas en pipelines CI/CD."
    },
    {
      icon: <HardDrive className="w-5 h-5 text-retro-yellow" />,
      title: "SISTEMAS DISTRIBUIDOS",
      description: "Arquitecturas orientadas a eventos, protocolos binarios compactos, tolerancia a fallos y concurrencia sin bloqueos."
    }
  ];

  return (
    <section id="sobre-mi" className="relative min-h-[calc(100vh-54px)] flex flex-col justify-center py-8 sm:py-12 border-b-4 border-retro-border bg-retro-bgAlt">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-2 bg-retro-panel border-2 border-retro-border text-retro-cyan font-pixel text-[10px] font-bold shadow-[2px_2px_0px_#2C221E]">
            <span className="w-2 h-2 bg-retro-cyanPastel border border-retro-border inline-block animate-pulse" />
            <span>[STAGE 03] :: PERFIL &amp; FILOSOFÍA TÉCNICA</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-3xl text-retro-ink">
            SOBRE MÍ
          </h2>
          <p className="font-arcade text-xl text-[#3D3028] font-bold mt-2 max-w-xl">
            Enfoque de ingeniería pragmático: resolver cuellos de botella con fundamentos sólidos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Box */}
          <div className="lg:col-span-7 bg-retro-panel pixel-box p-6 sm:p-8 space-y-4 font-arcade text-xl sm:text-2xl text-retro-ink leading-relaxed">
            <p>
              Soy <strong className="text-retro-ink font-pixel text-base">{PERSONAL_INFO.name}</strong> (<span className="text-retro-green font-pixel text-xs font-bold">@{PERSONAL_INFO.handle}</span>). Trabajo en la intersección entre sistemas de alto rendimiento y aplicaciones web escalables.
            </p>
            <p>
              Experiencia diseñando subsistemas en <strong className="text-retro-ink font-bold">C++</strong> y <strong className="text-retro-ink font-bold">Go</strong> donde el uso de memoria y la concurrencia exigen control absoluto, combinada con interfaces web sólidas en <strong className="text-retro-ink font-bold">TypeScript</strong> y <strong className="text-retro-ink font-bold">React</strong>.
            </p>
            <p className="text-retro-inkMuted">
              Mi filosofía es simple: menos capas de abstracción innecesarias, mayor visibilidad sobre las llamadas al sistema operativo y pruebas deterministas.
            </p>

            <div className="pt-4 border-t-2 border-retro-border flex items-center gap-4">
              <button
                onClick={onOpenCv}
                className="pixel-btn px-4 py-2.5 bg-retro-greenPastel hover:bg-retro-greenLight text-retro-ink font-pixel text-xs flex items-center gap-2 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>CONSULTAR CV COMPLETO</span>
              </button>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 space-y-4">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-retro-panel pixel-box p-5 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-retro-surfaceAlt border border-retro-border">
                    {p.icon}
                  </span>
                  <h3 className="font-pixel text-xs text-retro-ink font-bold">
                    {p.title}
                  </h3>
                </div>
                <p className="font-arcade text-lg text-retro-inkMuted leading-normal">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
