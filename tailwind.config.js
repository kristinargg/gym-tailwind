/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C303D',
        secondary: '#F15A24',
        success: '#1C822B',
        danger: '#EE1111',
        info: '#00819B',
        subhead: '#707070',
        card: '#F3F3F3',
        abu: '#79747E',
        member: '#BCBCBC',
        notif: '#E9E9E9',
        disabled: '#D8D8D8',
      },
      fontFamily: {
        roboto: 'Roboto',
        inter: 'Inter',
      },
      fontSize: {
        subhead1: '40px',
        subhead2: '32px',
      },
    },
  },
  plugins: [],
}
