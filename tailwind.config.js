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
        input: '#F5F5F5',
      },
      fontFamily: {
        poppins: ["var(--poppins)"],
        inter: ["var(--inter)"],
        k2d: ["var(--k2d)"],
      }, boxShadow: {
        'custom-light': '0px 1px 13px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
