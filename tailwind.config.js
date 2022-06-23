module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        // experience: ["'Playfair Display'", "serif"],
      },
      colors: {
        "regal-green": "#94E7CB",
        "skin-bg": "rgba(255, 229, 0, 0.1)",
        "skin-border": "#D5DBE8",
        "grey-bg": "#F6F6F6",
        "pricing-border": "#E0E0E0",

        // blue: {
        //   950: "#1E2637",
        //   650: "#2C4A8A",
        //   550: "#334A8A",
        //   450: "#2C4A89",
        //   850: "#1e2637",
        //   50: "#f7f9fe",
        // },
        // gray: {
        //   350: "#6e6e6e",
        // },
        yellow: {
          500: "#FFE500",
        },
      },
      backgroundImage: {
        "pink-bg": "url('/assets/background.png')",
        // "slide-2": "url('/images/slider-2.jpg')",
        // "more-services": "url('/images/bgimage-4.jpg')",
        // "footer-img": "url('/images/footer-img.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
