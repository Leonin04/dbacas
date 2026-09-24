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
          bg: '#F6F0E6',
          bgAlt: '#BFA078',
          surface: '#EDE4D4',
          surfaceAlt: '#AB8C64',
          panel: '#FFFDF9',
          panelAlt: '#F2EAE0',
          border: '#2C221E',
          borderMuted: '#D9CEBF',
          ink: '#2C221E',
          inkMuted: '#68594E',
          inkLight: '#918073',
          darkConsole: '#251E1A',
          darkConsoleBorder: '#3D312A',
          green: '#4A7C59',
          greenPastel: '#9EC5A6',
          greenLight: '#E2EFE4',
          cyan: '#3E7596',
          cyanPastel: '#9EC4D7',
          cyanLight: '#E0EEF5',
          yellow: '#A8731F',
          yellowPastel: '#EFC777',
          yellowLight: '#FCF3DC',
          red: '#B84C3C',
          redPastel: '#E89C90',
          redLight: '#FAE3DF',
          purple: '#7A5B83',
          purplePastel: '#C8AFD0',
          orange: '#BA612D',
          orangePastel: '#F0B18B',
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        arcade: ['VT323', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'pixel': '4px 4px 0px #2C221E',
        'pixel-sm': '2px 2px 0px #2C221E',
        'pixel-green': '4px 4px 0px #4A7C59',
        'pixel-yellow': '4px 4px 0px #A8731F',
        'pixel-cyan': '4px 4px 0px #3E7596',
        'pixel-red': '4px 4px 0px #B84C3C',
      },
    },
  },
  plugins: [],
}
