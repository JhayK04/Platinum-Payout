module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}" // Include all paths where Tailwind classes will be used
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 0.7s linear infinite"
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" }
        }
      }
    }
  },
  plugins: []
};
