module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral': '#0f0f0f',
        'custom-yellow': '#d4810c',
      },
      backgroundImage: {
        'home-texture': "url('./assets/images/bg-home.jpg')",
      },
    },
  },
  plugins: [],
}