/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        primaryLight: "#172135"
      },
      fontFamily: {
        SourceCodePro: ["Source Code Pro", "monospace"]
      },
    },
  },
  plugins: [],
}

