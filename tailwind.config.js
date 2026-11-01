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
        ink: '#f5f5f7',
        smoke: '#9496a1',
        whisper: '#13141b',
        dark: {
          bg: '#08090C',
          surface: '#0e1017',
          card: 'rgba(255, 255, 255, 0.03)',
          cardHover: 'rgba(255, 255, 255, 0.06)',
          border: 'rgba(255, 255, 255, 0.08)',
          borderGlow: 'rgba(0, 113, 227, 0.4)'
        },
        accent: {
          DEFAULT: '#0071e3',
          hover: '#0077ed',
          link: '#2997ff',
          glow: 'rgba(0, 113, 227, 0.35)'
        },
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
        }
      },
      fontFamily: {
        sans: [
          '-apple-system', 'BlinkMacSystemFont',
          '"SF Pro Text"', '"SF Pro Display"',
          '"Segoe UI Variable"', '"Segoe UI"',
          'system-ui', 'sans-serif'
        ]
      }
    }
  },
  plugins: []
}
