import * as DialogPrimitive from '@radix-ui/react-dialog'

import { keyframes, styled } from 'stitches.config'

const open = keyframes({
  '0%': {
    left: '-100%'
  },
  '100%': { left: 0 }
})

const close = keyframes({
  '0%': {
    left: 0
  },
  '100%': { left: '-100%' }
})

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

export const MenuWrapper = DialogPrimitive.Root
export const MenuTrigger = DialogPrimitive.Trigger
export const MenuClose = DialogPrimitive.Close

export const MenuContent = styled(DialogPrimitive.Content, {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  bc: '$mauve3',
  p: '$xxsmall',
  position: 'fixed',
  width: '70vw',
  height: '100vh',
  '&:focus': { outline: 'none' },
  '&[data-state="open"]': {
    animation: `${open} 400ms cubic-bezier(.4,0,.2,1)`
  },
  '&[data-state="closed"]': {
    animation: `${close} 400ms cubic-bezier(.4,0,.2,1)`
  }
})

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  bc: '$blackA9',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
})

export const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: '$bolder',
  fontSize: '$small',
  color: '$mauve11'
})

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  br: '$2',
  size: '$medium',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  cursor: 'pointer'
})

export const PagesWrapper = styled('ul', {
  listStyle: 'none',
  my: '$large'
})

export const ItemWrapper = styled('li', {})

export const ItemLink = styled('a', {
  color: 'inherit',
  textDecoration: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '$xsmall',
  br: '$2',
  px: '$xxsmall',
  py: 6,
  fontSize: '$small',
  '&.active': {
    color: '$mauve1',
    backgroundImage:
      'linear-gradient(90deg, hsla(252, 71%, 84%, 1) 40%, hsla(333, 73%, 91%, 1) 100%)'
  }
})
