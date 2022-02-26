module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0f0f0f',
        'secondary': '#d4810c',
        'tertiary': '#f2f2f2',
      },
      backgroundImage: {
        'home-texture': "url('./assets/images/bg-home.jpg')",
        'about-texture': "url('./assets/images/bg-about.jpeg')",
      },
    },
  },
  plugins: [],
}