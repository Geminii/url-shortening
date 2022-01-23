module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      cyan: 'var(--cyan)',
      'cyan-light': 'var(--cyan-light)',
      'dark-violet': 'var(--dark-violet)',
      red: 'var(--red)',
      gray: 'var(--gray)',
      'gray-light': 'var(--gray-light)',
      'grayish-violet': 'var(--grayish-violet)',
      'very-dark-blue': 'var(--very-dark-blue)',
      'very-dark-violet': 'var(--very-dark-violet)',
      white: 'var(--white)',
    },
    extend: {
      screens: {
        'desktop': 'var(--desktop-container)'
      },
      minWidth: {
        'container': 'var(--desktop-container)'
      },
      maxWidth: {
        'container': 'var(--desktop-container)'
      }
    }
  },
  plugins: [],
}
