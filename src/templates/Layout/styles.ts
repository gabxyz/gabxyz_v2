import { styled } from 'stitches.config'

export const NavWrapper = styled('nav', {
  variants: {
    screen: {
      mobile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      desktop: {
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'flex-end',
        gap: '$small'
      }
    }
  },
  defaultVariants: {
    screen: 'mobile'
  }
})
