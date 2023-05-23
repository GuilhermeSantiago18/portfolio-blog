module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'th-background': 'var(--background)',
        'th-primary': 'var(--primary)',
        'th-secondary': 'var(--secondary)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
