import Box from 'components/Box'
import MobileMenu from 'components/MobileMenu'
import ThemeSwitcher from 'components/ThemeSwitcher'
import Link from 'next/link'
import * as S from './styles'

type LayoutTemplateProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutTemplateProps) => {
  return (
    <Box
      css={{
        maxWidth: '900px',
        mx: 'auto',
        p: '$small',
        '@md': { p: '$large' }
      }}
    >
      <S.NavWrapper>
        <Box css={{ '@md': { display: 'none' } }}>
          <MobileMenu />
        </Box>
        <Box css={{ display: 'none', '@md': { display: 'initial' } }}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Portfolio</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
        </Box>
        <ThemeSwitcher />
      </S.NavWrapper>

      <Box css={{ p: '$medium' }}>{children}</Box>
    </Box>
  )
}

export default Layout
