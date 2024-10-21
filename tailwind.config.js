/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FAFAFA",
        bgprimary: "#363738",
        bgsecondary: "#DB4444",
        textprimary: "#D37643",
        textsecondary1: "#DB4444",
        button1: "#00FF66",
        button2: "#DB4444",
        hover: "#E07575",
        shadow: "0 1 13px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        poppins: ["var(--poppins)"],
        inter: ["var(--inter)"],
        k2d: ["var(--k2d)"],
      },
    },
  },
  plugins: [],
};
