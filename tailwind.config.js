module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-100%)" },  // start from left outside
          "100%": { transform: "translateX(100%)" }, // move to right outside
        },
      },
      animation: {
        slideRight: "slideRight 35s linear infinite", // animation duration and repeat
      },
    },
  },
  plugins: [],
};
