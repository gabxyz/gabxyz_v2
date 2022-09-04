import { styled } from 'stitches.config'

import * as TogglePrimitive from '@radix-ui/react-toggle'

export const Toggle = styled(TogglePrimitive.Root, {
  all: 'unset',
  bc: '$mauve3',
  color: '$mauve12',
  size: '$medium',
  br: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    bc: '$mauve4'
  },
  '&:focus': { boxShadow: `0 0 0 1px $colors$mauve7` }
})
