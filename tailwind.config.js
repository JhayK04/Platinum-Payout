/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
        'gradient': 'linear-gradient(to right, #FEC636, #DE680A)',
         coupons: "url('./../../assets/couponbg.png')",
      },
    },
  },
  plugins: [],
}