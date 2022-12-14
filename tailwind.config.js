const defaultTheme = require('tailwindcss/defaultTheme')

// Calculates ideal letterSpacing for a given font size
function dynamicTracking(fontSize) {
  const a = -0.0223
  const b = 0.0 // 0.185 default
  const c = -0.1745
  // tracking = a + b * e ^ (c * fontSize)
  const value = a + b * Math.E ** (c * (fontSize * 16))

  return `${value.toFixed(3)}em`
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: [
        '0.75rem',
        { lineHeight: '1rem', letterSpacing: dynamicTracking(0.75) }
      ],
      sm: [
        '0.875rem',
        { lineHeight: '1.25rem', letterSpacing: dynamicTracking(1.25) }
      ],
      base: [
        '1rem',
        { lineHeight: '1.5rem', letterSpacing: dynamicTracking(1) }
      ],
      lg: [
        '1.125rem',
        { lineHeight: '1.75rem', letterSpacing: dynamicTracking(1.125) }
      ],
      xl: [
        '1.25rem',
        { lineHeight: '1.75rem', letterSpacing: dynamicTracking(1.75) }
      ],
      '2xl': [
        '1.5rem',
        { lineHeight: '2rem', letterSpacing: dynamicTracking(1.5) }
      ],
      '3xl': [
        '1.875rem',
        { lineHeight: '2.25rem', letterSpacing: dynamicTracking(1.875) }
      ],
      '4xl': [
        '2.25rem',
        { lineHeight: '2.5rem', letterSpacing: dynamicTracking(2.25) }
      ],
      '5xl': ['3rem', { lineHeight: '1', letterSpacing: dynamicTracking(2.3) }],
      '6xl': [
        '3.75rem',
        { lineHeight: '1', letterSpacing: dynamicTracking(3.75) }
      ],
      '7xl': [
        '4.5rem',
        { lineHeight: '1', letterSpacing: dynamicTracking(4.5) }
      ],
      '8xl': ['6rem', { lineHeight: '1', letterSpacing: dynamicTracking(6) }],
      '9xl': ['8rem', { lineHeight: '1', letterSpacing: dynamicTracking(8) }]
    },
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrainsMono', ...defaultTheme.fontFamily.mono]
      },
      backgroundImage: {
        'dark-texture': "url('/img/dark-nnnoise.svg')",
        'light-texture': "url('/img/light-nnnoise.svg')"
      },
      boxShadow: {
        'button-focus':
          '0px 0px 2px 0px var(--violet7), 0px 0px 2px 0px var(--crimson7)',
        'button-hover':
          '0px 0px 2px 0px var(--violet8), 0px 0px 2px 0px var(--crimson8)'
      },
      keyframes: {
        in: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': { transform: 'translateX(0)' }
        },
        out: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },

        'slide-up-fade': {
          '0%': { opacity: 0, transform: 'translateY(0.25rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'slide-right-fade': {
          '0%': { opacity: 0, transform: 'translateX(-0.25rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        'slide-down-fade': {
          '0%': { opacity: 0, transform: 'translateY(-0.25rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'slide-left-fade': {
          '0%': { opacity: 0, transform: 'translateX(0.25rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        }
      },
      animation: ({ theme }) => ({
        'open-menu': `in 240ms ${theme(
          'transitionTimingFunction.expressive-entrance'
        )}`,
        'close-menu': `out 150ms ${theme(
          'transitionTimingFunction.productive-exit'
        )}`,

        'slide-up-fade': `slide-down-fade 150ms ${theme(
          'transitionTimingFunction.productive-standard'
        )}`,
        'slide-down-fade': `slide-up-fade 150ms ${theme(
          'transitionTimingFunction.productive-standard'
        )}`,
        'slide-right-fade': `slide-left-fade 150ms ${theme(
          'transitionTimingFunction.productive-standard'
        )}`,
        'slide-left-fade': `slide-right-fade 150ms ${theme(
          'transitionTimingFunction.productive-standard'
        )}`
      }),
      transitionTimingFunction: {
        /**
         * See: https://carbondesignsystem.com/guidelines/motion/overview/
         */
        'productive-standard': 'cubic-bezier(0.2, 0, 0.38, 0.9)',
        'productive-entrance': 'cubic-bezier(0, 0, 0.38, 0.9)',
        'productive-exit': 'cubic-bezier(0.2, 0, 1, 0.9)',
        'expressive-standard': 'cubic-bezier(0.4, 0.14, 0.3, 1)',
        'expressive-entrance': 'cubic-bezier(0, 0, 0.3, 1)',
        'expressive-exit': 'cubic-bezier(0.4, 0.14, 1, 1)'
      }
    }
  },
  plugins: [
    require('tailwindcss-radix')({ variantPrefix: 'rdx' }),
    require('windy-radix-palette'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('windy-radix-typography')
  ]
}
