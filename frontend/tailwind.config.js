module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  color: {
    yellow: '#997B54',
  },
  theme: {
    extend: {
      colors: {
        'th-background': 'var(--background)',
        'th-primary': 'var(--primary)',
        'th-secondary': 'var(--secondary)',
        whatsgreen: "#2AD46A"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
