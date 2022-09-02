import { styled } from 'stitches.config'

import * as TogglePrimitive from '@radix-ui/react-toggle'

export const Toggle = styled(TogglePrimitive.Root, {
  all: 'unset',
  bc: '$slate3',
  color: '$slate12',
  size: '$6',
  br: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
