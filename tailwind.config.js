
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        blueprint: {
          navy: '#0a1628',
          dark: '#050c16',
          cyan: '#00d9ff',
          'cyan-dim': 'rgba(0, 217, 255, 0.1)',
          'cyan-glow': 'rgba(0, 217, 255, 0.3)',
          white: '#ffffff',
          'white-dim': 'rgba(255, 255, 255, 0.5)',
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(0, 217, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 217, 255, 0.05) 1px, transparent 1px)",
      },
      animation: {
        'scan': 'scan 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}
