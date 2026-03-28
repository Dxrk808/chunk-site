/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        void: { DEFAULT: '#000000', deep: '#080810' },
        nebula: { DEFAULT: '#6b21a8', glow: '#7c3aed' },
        rift: { DEFAULT: '#b8860b', glow: '#d4a017' },
        chunk: { DEFAULT: '#3d2814', light: '#5c3d24' },
        primary: { DEFAULT: '#7c3aed', foreground: '#000000' },
        secondary: { DEFAULT: '#d4a017', foreground: '#000000' },
        foreground: '#f2f2f2',
        muted: { DEFAULT: '#1a1a2e', foreground: '#a0a0b0' },
        border: 'rgba(107,33,168,0.3)',
      },
    },
  },
  plugins: [],
}
