const plugin = require('tailwindcss/plugin')
const { colors, fontSize } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      body: ['rajdhani'],
    },
    colors: {
      c1: '#EE44C7',
      c2: '#00CC81',
      c3: '#FF3227',
      c4: '#203AF3',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      gray: {
        ...colors.gray,
        default: '#707070',
        medium: '#888888',
      },
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    borderWidth: {
      default: '0.7px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
    },
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          borderWidth: theme('borderWidth.2'),
          borderColor: theme('borderColor.c2'),
          backgroundColor: theme('colors.white'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          }
        },
        select: {
          borderRadius: theme('borderRadius.lg'),
          borderWidth: theme('borderWidth.2'),
          borderColor: theme('borderColor.c2'),
          backgroundColor: theme('colors.white')
        },
        textarea: {
          borderRadius: theme('borderRadius.lg'),
          borderWidth: theme('borderWidth.2'),
          borderColor: theme('borderColor.c2'),
          backgroundColor: theme('colors.white')
        },
        checkbox: {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
        },
      },
    })
  },
  // extend: {
  //   fontSize: {
  //     ...fontSize,
  //     '7xl': '10rem',
  //   },
  // },
  variants: {
    extend: {
      backgroundColor: ['active'],
      translate: ['motion-safe'],
    }
  },
  plugins: [require('tailwindcss-debug-screens'), require('@tailwindcss/forms')],
}