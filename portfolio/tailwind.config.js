module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: '#0f0f0f'
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'ui-sans-serif'],
        'serif': ['Times New Roman', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
}