/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        retro: {
          bg: '#0a0a0f',
          surface: '#12131c',
          panel: '#181926',
          border: '#2e3046',
          green: '#00ff66',
          cyan: '#00f0ff',
          yellow: '#ffe600',
          red: '#ff0055',
          purple: '#b026ff',
          orange: '#ff8800',
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        arcade: ['VT323', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'pixel': '4px 4px 0px #000000',
        'pixel-sm': '2px 2px 0px #000000',
        'pixel-green': '4px 4px 0px #00ff66',
        'pixel-yellow': '4px 4px 0px #ffe600',
        'pixel-cyan': '4px 4px 0px #00f0ff',
        'pixel-red': '4px 4px 0px #ff0055',
      },
    },
  },
  plugins: [],
}
