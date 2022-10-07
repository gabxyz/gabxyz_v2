import Link, { LinkProps } from 'next/link'

type NavLinkProps = {
  size?: 'md' | 'lg'
  variant?: 'default' | 'active' | 'mobile' | 'mobile-active'
  iconOnly?: boolean
  children: React.ReactNode
} & LinkProps &
  React.HTMLProps<HTMLAnchorElement>

const NavLink: React.FC<NavLinkProps> = ({
  size = 'md',
  variant = 'default',
  iconOnly = false,
  as,
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  ...rest
}) => {
  const customClasses = `btn ${size} ${variant} ${iconOnly ? '' : 'space-x-2'}`

  return (
    <Link
      as={as}
      href={href}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <a {...rest} className={customClasses}>
        {children}
      </a>
    </Link>
  )
}

export default NavLink
