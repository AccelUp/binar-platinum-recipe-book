/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        mobile: "320px",
        tablet: "639px",
        laptop: "1023px",
        desktop: "1279px",
      },
      colors: {
        primary: "#E9B824",
        blackk: "#080202",
        whitee: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
