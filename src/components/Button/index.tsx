interface ButtonProps<T extends React.ElementType> {
  as?: T
  size?: 'md' | 'lg'
  children?: React.ReactNode
}

const Button = <T extends React.ElementType = 'button'>({
  as,
  size = 'md',
  children,
  ...rest
}: ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Wrapper = as || 'button'
  const customClasses = `btn default ${size}`
  return (
    <Wrapper {...rest} className={customClasses}>
      {children}
    </Wrapper>
  )
}

export default Button
