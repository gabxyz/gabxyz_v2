import * as SeparatorPrimitive from '@radix-ui/react-separator'

type SeparatorProps = {
  orientation?: SeparatorPrimitive.Orientation
}

const Separator = ({ orientation = 'horizontal' }: SeparatorProps) => (
  <SeparatorPrimitive.Root
    orientation={orientation}
    className="bg-mauve-6 rdx-orientation-horizontal:h-px rdx-orientation-horizontal:w-full  rdx-orientation-vertical:h-full rdx-orientation-vertical:w-px"
  />
)
export default Separator
