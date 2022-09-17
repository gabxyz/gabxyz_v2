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
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrainsMono', ...defaultTheme.fontFamily.mono]
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
        }
      },
      animation: {
        'open-menu': 'in 0.2s ease-in-out',
        'close-menu': 'out 0.2s ease-in-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-radix')({ variantPrefix: 'rdx' }),
    require('windy-radix-palette')
  ]
}
