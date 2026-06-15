/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EEF2FF',
          100: '#D6DEFA',
          200: '#A8B6F0',
          300: '#7689DC',
          400: '#4F65BC',
          500: '#2D4498',
          600: '#1F347C',
          700: '#162760',
          800: '#0E1D4A',
          900: '#061230'
        },
        ink: '#0B1430'
      },
      fontFamily: {
        sans: [
          '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"',
          '"Segoe UI Variable"', '"Segoe UI"', 'system-ui', 'sans-serif'
        ],
        display: [
          '"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont',
          '"Segoe UI Variable"', 'system-ui', 'sans-serif'
        ]
      },
      backgroundImage: {
        'frame-gradient':
          'linear-gradient(170deg, #16285A 0%, #0E1D4A 45%, #091640 100%)',
        'radial-navy':
          'radial-gradient(circle at 20% 0%, rgba(45,68,152,0.35), transparent 55%), radial-gradient(circle at 100% 30%, rgba(31,52,124,0.25), transparent 50%)'
      },
      boxShadow: {
        glow: '0 30px 80px -20px rgba(14, 29, 74, 0.45)',
        ring: '0 0 0 1px rgba(168,182,240,0.18)'
      },
      maxWidth: {
        '7xl': '80rem'
      }
    }
  },
  plugins: []
}
