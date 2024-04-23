/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#00594C",
        "custom-yellow": "#FFE47A",
        "custom-blue": "#002B36",
        "custom-text": "#E8DDD0",
      },
      fontFamily: {
        margarine: ["Margarine", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      width: {
        "fit-content": "fit-content",
      },
    },
  },
  plugins: [],
};
