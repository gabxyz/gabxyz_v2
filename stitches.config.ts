import { mauve, mauveDark, violet, violetDark, blackA } from '@radix-ui/colors'

import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      ...mauve,
      ...violet,
      ...blackA,

      hiContrast: '$mauve12',
      loContrast: '$mauve1'
    },
    fonts: {
      default:
        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
    },
    fontWeights: {
      light: 300,
      normal: 400,
      bold: 600,
      bolder: 700
    },
    space: {
      xxsmall: '8px',
      xsmall: '16px',
      small: '24px',
      medium: '32px',
      large: '40px',
      xlarge: '48px',
      xxlarge: '56px'
    },
    sizes: {
      xxsmall: '8px',
      xsmall: '16px',
      small: '24px',
      medium: '32px',
      large: '40px',
      xlarge: '48px',
      xxlarge: '56px'
    },
    fontSizes: {
      xsmall: '12px',
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px',
      xxlarge: '28px',
      huge: '52px'
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px'
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999'
    }
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)'
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value
    }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value
    }),
    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value
    })
  }
})

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...mauveDark,
    ...violetDark,

    hiContrast: '$mauve12',
    loContrast: '$mauve1'
  }
})

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 300,
      src: 'local(""), url("/fonts/inter-v12-latin-300.woff2") format("woff2")'
    },
    {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      src: 'local(""), url("/fonts/inter-v12-latin-400.woff2") format("woff2")'
    },
    {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      src: 'local(""), url("/fonts/inter-v12-latin-600.woff2") format("woff2")'
    },
    {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 700,
      src: 'local(""), url("/fonts/inter-v12-latin-700.woff2") format("woff2")'
    }
  ],

  '*': {
    margin: 0,
    padding: 0,
    'box-sizing': 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',

    '&::before, &::after': {
      'box-sizing': 'inherit'
    }
  },
  'html, body': {
    height: '100%'
  },
  body: {
    fontFamily: '$default',
    fontSize: '$medium',
    lineHeight: 1.8,
    backgroundColor: '$loContrast',
    color: '$hiContrast'
  }
})
