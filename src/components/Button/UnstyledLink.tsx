import React from 'react'
import Link from 'next/link'

export interface UnstyledLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  href: string
}

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ href, children, ...rest }, forwardedRef) => {
    const isInternalLink =
      typeof href == 'string' && (href.startsWith('/') || href.startsWith('#'))

    if (isInternalLink) {
      return (
        <Link href={href}>
          <a ref={forwardedRef} {...rest}>
            {children}
          </a>
        </Link>
      )
    }

    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a
        ref={forwardedRef}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
      >
        {children}
      </a>
    )
  }
)

export default UnstyledLink
