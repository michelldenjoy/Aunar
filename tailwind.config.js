/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Caribeña Elegante y Discreta
        caribbean: {
          50: '#f0fdfa',   // Casi blanco con tinte turquesa
          100: '#e6faf7',  // Muy muy suave
          200: '#ccf5ef',  // Suave elegante
          300: '#99ebe0',  // Tono medio discreto
          400: '#5dd9c8',  // Turquesa suave
          500: '#3bc9b5',  // Turquesa principal - MÁS SUAVE
          600: '#2ba89a',  // Turquesa profundo elegante
          700: '#238073',  // Turquesa oscuro
          800: '#1d6660',  // Verde azulado oscuro
          900: '#19524d',  // Muy oscuro
        },
        sand: {
          50: '#fdfdfb',   // Arena casi invisible
          100: '#faf9f6',  // Arena muy suave
          200: '#f5f3ee',  // Arena clara elegante
          300: '#ede9e0',  // Arena visible pero suave
          400: '#dfd9cc',  // Arena dorada suave
        },
        elegant: {
          navy: '#2c3e50',    // Navy suave (menos intenso)
          slate: '#475569',   // Slate para textos
          warm: '#78716c',    // Gris cálido
          light: '#f8fafc',   // Casi blanco
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.3em',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}