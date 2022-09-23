import React from 'react'
import cn from 'classnames'

interface ButtonProps<T extends React.ElementType> {
  as?: T
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'default-active' | 'mobile' | 'mobile-active'
  children?: React.ReactNode
}

const Button = <T extends React.ElementType = 'button'>({
  size = 'md',
  variant = 'default',
  as,
  children,
  ...rest
}: ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Wrapper = as || 'button'
  return (
    <Wrapper {...rest} className={cn(`btn ${size} ${variant}`)}>
      {children}
    </Wrapper>
  )
}

export default Button
