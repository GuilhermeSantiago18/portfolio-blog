module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  color: {
    yellow: '#997B54'
  },
  theme: {
    extend: {
      colors: {
        'th-background': 'var(--background)',
        'th-primary': 'var(--primary)',
        'th-secondary': 'var(--secondary)',
        whatsgreen: "#25D366",
        'th-text-color': 'var(--text-color)'
      },
    }

  },
  variants: {
    extend: {}
  },
  plugins: []
};
