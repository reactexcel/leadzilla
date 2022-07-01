const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
        gilroybold: ["Gilroy Bold"],
        gilroylight: ["Gilroy Light"],
        // experience: ["'Playfair Display'", "serif"],
      },
      colors: {
        "voilet-bg": "#AB78FF",
        "yellow-bg": "#FAFFEE",
        "regal-green": "#94E7CB",
        "skin-bg": "rgba(255, 229, 0, 0.1)",
        "skin-border": "#D5DBE8",
        "grey-bg": "#F6F6F6",
        "pricing-border": "#E0E0E0",
        "brown-bg": "#FFF9EC",
        "green-bg": "#F4FFB4",
        "purple-bg": "#E471FF",

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
        blue: {
          300: "#E0FDFE",
        },
        blur: {
          200: "#6F7B99",
        },
        inputblack: {
          100: "#C2CEDD",
        },
        voiletw: {
          300: "#FAE2FF",
        },
        glad: {
          100: "#E5DFFE",
        },
        bordergray: {
          200: "#F4F4F4",
        },
        backgray: {
          200: "#F2F2F2",
        },
        faqtextcolor: {
          200: "#3F5671",
        },
        aboutustextcolor: {
          200: "#2B3044",
        },
        bluedon: {
          300: "#4659FF",
        },
        pinky: {
          300: "#FF71CA",
        },
        grace: {
          600: "#495377",
        },
        darkcolor: {
          200: "#000000",
        },
        signupbg: {
          200: "#E471FF",
        },
        pricingtextcolor: {
          200: "#10121B",
        },
        lightgrayblog: {
          200: "#828282",
        },
        whitebagfeature: {
          100: "#FFFFFF",
        },
        grayfeature: {
          100: "#CCCCCC",
        },
        darkgrayfeature: {
          100: "#A3A3A3",
        },
        bluefeature: {
          100: "#4659FF",
        },
        bluefeature:{
          100:"#4659FF"
        },
        graytextcol: {
          200: "#8891B6"
        }

      },
      backgroundImage: {
        "pink-bg": "url('/assets/rectanglelanding.svg')",
        "signup-bg": "url('/assets/signup/backgroundimg.svg')",
        "purples-bg": "url('/assets/signup/reactangle.svg')",

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
