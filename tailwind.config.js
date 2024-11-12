/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'contact.html', 'portfolio.html', 'resume.html'],
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
    },
    extend: {
      colors: {
        'abuabu': '#1e1e1f',
        'abuterang': '#282829',
        'abuborder': '#383838',
      },
    },
  },
  plugins: [],
}

