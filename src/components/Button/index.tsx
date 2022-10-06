interface ButtonProps<T extends React.ElementType> {
  as?: T
  size?: 'md' | 'lg'
  children?: React.ReactNode
}

const Button = <T extends React.ElementType = 'button'>({
  size = 'md',
  as,
  children,
  ...rest
}: ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Wrapper = as || 'button'
  return (
    <Wrapper {...rest} className={`btn default ${size}`}>
      {children}
    </Wrapper>
  )
}

export default Button
