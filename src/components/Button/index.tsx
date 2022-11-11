interface ButtonProps<T extends React.ElementType> {
  as?: T
  variant?:
    | 'default'
    | 'active'
    | 'embla-arrow'
    | 'embla-dot'
    | 'embla-dot-active'
  children?: React.ReactNode
}

const Button = <T extends React.ElementType = 'button'>({
  as,
  variant = 'default',
  children,
  ...rest
}: ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Wrapper = as || 'button'
  const customClasses = `btn ${variant}`
  return (
    <Wrapper {...rest} className={customClasses}>
      {children}
    </Wrapper>
  )
}

export default Button
