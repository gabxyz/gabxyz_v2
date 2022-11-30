import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  align?: TooltipPrimitive.TooltipContentProps['align']
  side?: TooltipPrimitive.TooltipContentProps['side']
}

const Tooltip = ({
  children,
  content,
  align = 'center',
  side = 'bottom'
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          sideOffset={7}
          className="inline-flex items-center rounded-xl bg-gradient-to-r from-violet-5 to-sky-5 px-3 py-1.5 text-sm font-semibold text-mauve-12 drop-shadow rdx-side-bottom:animate-slide-down-fade rdx-side-left:animate-slide-left-fade
          rdx-side-right:animate-slide-right-fade
          rdx-side-top:animate-slide-up-fade"
        >
          {content}
          <TooltipPrimitive.Arrow
            width={14}
            height={6}
            className="fill-violet-5"
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}

export default Tooltip
