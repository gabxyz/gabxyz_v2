import Link, { LinkProps } from 'next/link'

type NavLinkProps = {
  size?: 'md' | 'lg'
  variant?: 'default' | 'active' | 'mobile' | 'mobile-active'
  children: React.ReactNode
} & LinkProps &
  React.HTMLProps<HTMLAnchorElement>

const NavLink: React.FC<NavLinkProps> = ({
  size = 'md',
  variant = 'default',
  as,
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  ...rest
}) => {
  return (
    <Link
      as={as}
      href={href}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <a {...rest} className={`btn ${size} ${variant}`}>
        {children}
      </a>
    </Link>
  )
}

export default NavLink
