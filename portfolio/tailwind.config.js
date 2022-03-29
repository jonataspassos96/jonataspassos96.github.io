module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0f0f0f',
        'secondary': '#7277fd',
        'tertiary': '#f2f2f2',
      },
      backgroundImage: {
        'home-texture': "url('./assets/images/bg-home.jpg')",
        'about-texture': "url('./assets/images/bg-about.jpeg')",
      },
      fontFamily: {
        
      },
    },
  },
  plugins: [],
}