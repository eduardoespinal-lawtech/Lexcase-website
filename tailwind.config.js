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
        ink: '#1d1d1f',
        smoke: '#6e6e73',
        whisper: '#f5f5f7',
        accent: {
          DEFAULT: '#0071e3',
          hover: '#0077ed',
          link: '#0066cc'
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
