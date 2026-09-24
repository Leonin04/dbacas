import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, RotateCcw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface OutputLine {
  id: string;
  type: 'command' | 'response' | 'error';
  content: string | React.ReactNode;
}

export const TerminalWidget: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([
    {
      id: 'init-1',
      type: 'response',
      content: (
        <div className="text-zinc-300 font-arcade text-xl space-y-1">
          <p className="text-retro-green font-pixel text-xs">LEONIN04 DOS v3.2 (C) 2026</p>
          <p>Escribe <span className="text-retro-yellow font-bold">help</span> o pulsa los botones de comando para interactuar.</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const rawCmd = cmdText.trim().toLowerCase();
    if (!rawCmd) return;

    const newCommandEntry: OutputLine = {
      id: `cmd-${Date.now()}`,
      type: 'command',
      content: rawCmd,
    };

    let responseEntry: OutputLine;

    switch (rawCmd) {
      case 'help':
        responseEntry = {
          id: `res-${Date.now()}`,
          type: 'response',
          content: (
            <div className="space-y-1 text-zinc-300 font-arcade text-xl">
              <p className="text-zinc-500 font-pixel text-[10px]">// COMANDOS DISPONIBLES:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                <div><span className="text-retro-green font-bold">cat about.txt</span> : Visión técnica y perfil</div>
                <div><span className="text-retro-green font-bold">skills</span> : Resumen de stack y paradigmas</div>
                <div><span className="text-retro-green font-bold">projects</span> : Lista rápida de casos de estudio</div>
                <div><span className="text-retro-green font-bold">metrics</span> : Métricas de entorno y arquitectura</div>
                <div><span className="text-retro-green font-bold">clear</span> : Limpiar la pantalla</div>
              </div>
            </div>
          ),
        };
        break;

      case 'cat about.txt':
      case 'about':
        responseEntry = {
          id: `res-${Date.now()}`,
          type: 'response',
          content: (
            <div className="space-y-2 text-zinc-300 font-arcade text-xl">
              <p className="text-retro-yellow font-pixel text-xs">// {PERSONAL_INFO.name} (@{PERSONAL_INFO.handle})</p>
              <p>Software Engineer enfocado en sistemas concurrentes, arquitecturas de baja latencia y frontend de alto rendimiento.</p>
              <p className="text-zinc-400">
                Priorizo la simplicidad de diseño, el perfilado riguroso de CPU/memoria y la eliminación de capas superfluas.
              </p>
            </div>
          ),
        };
        break;

      case 'skills':
        responseEntry = {
          id: `res-${Date.now()}`,
          type: 'response',
          content: (
            <div className="space-y-1 font-arcade text-xl text-zinc-300">
              <div className="text-retro-green font-pixel text-xs">[INVENTORY MATRIX]</div>
              <div>• <strong className="text-white">Lenguajes:</strong> C++20, TypeScript, Python, Go, Rust, POSIX Shell</div>
              <div>• <strong className="text-white">Sistemas:</strong> SIMD, Lock-free queues, Concurrencia, eBPF</div>
              <div>• <strong className="text-white">Web:</strong> React 18, Vite, Tailwind CSS, WebSockets, WebGPU</div>
              <div>• <strong className="text-white">Infra:</strong> Docker, Linux Kernel, Redis, PostgreSQL, GitHub Actions</div>
            </div>
          ),
        };
        break;

      case 'projects':
        responseEntry = {
          id: `res-${Date.now()}`,
          type: 'response',
          content: (
            <div className="space-y-1.5 font-arcade text-xl text-zinc-300">
              <p className="text-retro-green font-pixel text-xs">// PROYECTOS PRINCIPALES:</p>
              <div>[1] <strong className="text-white">StreamCore-Engine:</strong> C++20 lock-free ring buffer (1.85M msg/s)</div>
              <div>[2] <strong className="text-white">Nexus-Sync:</strong> Motor CRDT distribuido en tiempo real (&lt;14ms sync)</div>
              <div>[3] <strong className="text-white">WebGPU-ShaderForge:</strong> Pipeline gráfico y transpiler AST</div>
              <div>[4] <strong className="text-white">Aegis-Telemetry:</strong> Sondas eBPF en kernel Linux (&lt;0.9% CPU)</div>
            </div>
          ),
        };
        break;

      case 'metrics':
        responseEntry = {
          id: `res-${Date.now()}`,
          type: 'response',
          content: (
            <div className="space-y-2 font-arcade text-xl text-zinc-300">
              <p className="text-retro-cyan font-pixel text-xs">// ARQUITECTURA &amp; TELEMETRÍA:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="p-2 bg-zinc-900 border border-zinc-700">
                  <div className="font-pixel text-[9px] text-zinc-500">CONCURRENCY</div>
                  <div className="text-retro-green font-bold">Lock-Free Queues</div>
                </div>
                <div className="p-2 bg-zinc-900 border border-zinc-700">
                  <div className="font-pixel text-[9px] text-zinc-500">MEMORY</div>
                  <div className="text-retro-yellow font-bold">Zero-Copy Paths</div>
                </div>
                <div className="p-2 bg-zinc-900 border border-zinc-700">
                  <div className="font-pixel text-[9px] text-zinc-500">EXECUTION</div>
                  <div className="text-retro-cyan font-bold">POSIX / Linux</div>
                </div>
              </div>
            </div>
          ),
        };
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        responseEntry = {
          id: `res-${Date.now()}`,
          type: 'error',
          content: (
            <div className="font-arcade text-xl text-retro-red">
              ERROR: Comando &quot;{rawCmd}&quot; no reconocido. Escribe &quot;help&quot; para ayuda.
            </div>
          ),
        };
    }

    setHistory((prev) => [...prev, newCommandEntry, responseEntry]);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const quickCommands = ['help', 'cat about.txt', 'skills', 'projects', 'metrics', 'clear'];

  return (
    <section id="terminal" className="py-16 md:py-20 border-b-4 border-black bg-[#0a0a0f] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-retro-green font-pixel text-xs mb-2">
            [STAGE 03] :: BASH / DOS ENVIRONMENT
          </div>
          <h2 className="font-pixel text-xl sm:text-3xl text-white">
            CONSOLA DEL SISTEMA
          </h2>
          <p className="font-arcade text-xl text-zinc-400 mt-1">
            Inspecciona comandos y especificaciones técnicas en una shell interactiva.
          </p>
        </div>

        {/* Quick Command Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-pixel text-[10px] text-retro-yellow">CMD:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="pixel-btn px-2.5 py-1 bg-retro-panel font-pixel text-[9px] text-zinc-300 hover:text-retro-green"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Box */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="bg-black pixel-box p-4 sm:p-6 cursor-text relative overflow-hidden"
        >
          {/* CRT scanlines effect */}
          <div className="absolute inset-0 crt-scanlines" />

          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-zinc-800 font-pixel text-[10px] text-zinc-400 relative z-10">
            <div className="flex items-center gap-2 text-retro-green">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>TERMINAL // ROOT@KERNEL</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHistory([]);
              }}
              className="p-1 hover:text-white"
              title="Reset terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* History */}
          <div className="space-y-3 max-h-[350px] overflow-y-auto relative z-10">
            {history.map((entry) => (
              <div key={entry.id}>
                {entry.type === 'command' ? (
                  <div className="flex items-center gap-2 text-white font-arcade text-xl">
                    <span className="text-retro-green font-pixel text-xs">C:\&gt;</span>
                    <span>{entry.content}</span>
                  </div>
                ) : (
                  <div className="mt-1">{entry.content}</div>
                )}
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleFormSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-retro-green font-pixel text-xs shrink-0">C:\&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="escribe un comando..."
                className="flex-1 bg-transparent text-white font-arcade text-2xl focus:outline-none placeholder:text-zinc-700"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="submit"
                className="text-zinc-600 hover:text-retro-green p-1"
                aria-label="Ejecutar"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
};
