// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        popup: "popup 0.3s ease-out",
      },
      keyframes: {
        popup: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
};
