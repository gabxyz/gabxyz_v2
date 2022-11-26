import React from 'react'

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink'

type btnVariants = {
  variant?:
    | 'mobileLink'
    | 'activeLink'
    | 'emblaArrow'
    | 'emblaDot'
    | 'activeEmblaDot'
}

interface ButtonProps
  extends btnVariants,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, ...rest }, forwardedRef) => (
    <button ref={forwardedRef} className={`baseBtn ${variant}`} {...rest}>
      {children}
    </button>
  )
)

type LinkBtnProps = UnstyledLinkProps & btnVariants

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkBtnProps>(
  ({ variant, href, children, ...rest }, forwardedRef) => (
    <UnstyledLink
      href={href}
      ref={forwardedRef}
      className={`baseBtn ${variant}`}
      {...rest}
    >
      {children}
    </UnstyledLink>
  )
)

export { Button, LinkButton }
