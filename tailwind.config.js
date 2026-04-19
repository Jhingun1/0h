/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#00247D", light: "#0047AB", dark: "#001A5E" },
        secondary: { DEFAULT: "#008080", light: "#20B2AA", dark: "#006666" },
        accent: { DEFAULT: "#FFCD00", light: "#FFE55C", dark: "#CCA400" },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
};
