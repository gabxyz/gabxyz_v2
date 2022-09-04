import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'

import { styled, keyframes } from 'stitches.config'

const fade = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
})

const iconButtonStyles = {
  all: 'unset',
  bc: '$mauve3',
  color: '$mauve12',
  size: '$large',
  br: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    bc: '$mauve4'
  },
  '&:focus': { boxShadow: `0 0 0 1px $colors$mauve7` },
  '& svg': {
    size: 15
  }
}
export const MenuWrapper = NavigationMenuPrimitive.Root

export const MenuList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  gap: '$xxsmall',
  listStyle: 'none'
})

export const MenuLink = styled(NavigationMenuPrimitive.Link, {
  ...iconButtonStyles,
  color: 'inherit',
  textDecoration: 'none',
  width: '90px',
  height: '$medium',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$xxsmall',
  br: '$2',
  bc: '$loContrast',
  px: '$xxsmall',
  fontSize: '$small',
  fontWeight: '$normal',
  '&:hover': {
    bc: '$mauve3'
  },
  '&[data-active]': {
    animation: `${fade} 800ms linear`,
    color: '$loContrast',
    backgroundImage:
      'linear-gradient(45deg, hsla(252, 69%, 76%, 1) 40%, hsla(336, 62%, 73%, 1) 100%)'
  }
})

export const Name = styled('h1', {
  fontSize: '$large',
  fontWeight: '$bold'
})

export const Description = styled('h2', {
  fontSize: '$small',
  color: '$mauve11',
  fontWeight: '$light',
  ml: 2
})

export const IconButton = styled('button', {
  ...iconButtonStyles
})
