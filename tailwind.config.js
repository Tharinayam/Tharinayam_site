/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          maroon: "#751525",
          maroonDark: "#520E1A",
          maroonLight: "#962337",
          gold: "#D4AF37",
          goldLight: "#F5E6AB",
          goldDark: "#9E7B15",
          sand: "#F8F5EE",
          sandDark: "#EFE8DA",
          teal: "#0D5C5B",
          tealLight: "#16807F",
          terracotta: "#C84B31",
          silk: "#FCFBF7",
          charcoal: "#1F2421",
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', 'Georgia', 'Cambria', 'serif'],
        tamil: ['"Noto Serif Tamil"', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(117, 21, 37, 0.08)',
        'elevated': '0 10px 30px -4px rgba(117, 21, 37, 0.12)',
        'gold': '0 4px 20px -2px rgba(212, 175, 55, 0.25)',
      }
    },
  },
  plugins: [],
}

