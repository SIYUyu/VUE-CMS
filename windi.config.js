import { defineConfig } from "windicss/helpers" //for ts type check
import colors from "windicss/colors"
import typography from "windicss/plugin/typography"

export default defineConfig({
  // darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  // 用分组变量的形式写class
  attributify: {
    prefix: "w:"
  },

  // 用于修改各种已有属性值，如：screen-sm
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      },
      colors: {
        gray: colors.coolGray,
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"]
      },
      spacing: {
        128: "32rem",
        144: "36rem"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: [
    // plugin(({ addUtilities }) => {
    //   const newUtilities = {
    //     ".skew-10deg": {
    //       transform: "skewY(-10deg)"
    //     },
    //     ".skew-15deg": {
    //       transform: "skewY(-15deg)"
    //     }
    //   }
    //   addUtilities(newUtilities)
    // })
    // plugin(({ addComponents }) => {
    //   const buttons = {
    //     '.btn': {
    //       padding: '.5rem 1rem',
    //       borderRadius: '.25rem',
    //       fontWeight: '600',
    //     },
    //     '.btn-blue': {
    //       'backgroundColor': '#3490dc',
    //       'color': '#fff',
    //       '&:hover': {
    //         backgroundColor: '#2779bd',
    //       },
    //     },
    //     '.btn-red': {
    //       'backgroundColor': '#e3342f',
    //       'color': '#fff',
    //       '&:hover': {
    //         backgroundColor: '#cc1f1a',
    //       },
    //     },
    //   }
    //   addComponents(buttons)
    // }),
    // plugin(({ addDynamic, variants }) => {
    //   addDynamic('skew', ({ Utility, Style }) => {
    //     return Utility.handler
    //       .handleStatic(Style('skew'))
    //       .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
    //       .createProperty('transform')
    //   }, variants('skew'))
    // }),
    // require('windicss/plugin/filters'),
    // require('windicss/plugin/forms'),
    // require('windicss/plugin/aspect-ratio'),
    // require('windicss/plugin/line-clamp'),
    // require('windicss/plugin/typography')({
    //   modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    // }),
  ],
  shortcuts: {
    "full-window": ""
  }
})
