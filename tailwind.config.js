module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1184px",
    },
    colors: {
      blue: {
        light: "#082443",
        DEFAULT: "#08203C",
        dark: "#0f172a",
        darkest: "#101729",
      },
      white: {
        DEFAULT: "#fff",
      },
      gray: {
        DEFAULT: "#959DAE",
      },
      accent: {
        DEFAULT: "#13DA5A",
      },
    },
    fontFamily: {
      sans: ["Sen", "sans-serif"],
      display: ["Inter", "sans-serif"],
    },
    letterSpacing: {
      widest: "0.2em",
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/static/img/hero-bg.png')",
        devices: "url('/static/img/devices-screenshots.png')",
        map: "url('/static/img/map-bg.jpg')",
        pickaxe: "url('/static/img/pick-axe.jpg')",
        constellations: "url('/static/img/constellations-bg.jpg')",
      }),
      fontSize: {
        'callout': "1.375rem",
      },
      flex: {
        '50': '1 0 50%'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
