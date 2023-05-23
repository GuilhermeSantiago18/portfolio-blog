module.exports = {
  purge: ['./src/app/**/*.{js,ts,jsx,tsx}'],
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
