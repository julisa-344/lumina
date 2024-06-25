/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#D99594',
          700: '#6d28d9',
          800: '#99103e',
        },
        secondary: {
          light: '#FFECB3',
          DEFAULT: '#FFC107',
          dark: '#FFA000',
        },
        accent: {
          light: '#FF80AB',
          DEFAULT: '#FF4081',
          dark: '#F50057',
        },
        // Añade más colores personalizados aquí
      },
    },
  },
  plugins: [      
    require('@tailwindcss/aspect-ratio'),
  ],
  
}