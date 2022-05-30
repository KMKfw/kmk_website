const { useContext } = require("react");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
    },
    extend: {},
    screens: {
      'xs': '460px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [require("daisyui")],
  corePlugins: { preflight: false },
  important: '#tailwind',
  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         ...require("daisyui/src/colors/themes")["[data-theme=light]"],
  //         primary: "#845eff",
  //       },
  //     },
  //   ],
  // },
};
