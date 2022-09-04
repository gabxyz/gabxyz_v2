import Box from 'components/Box'
import DesktopMenu from 'components/DesktopMenu'
import MobileMenu from 'components/MobileMenu'
import ThemeSwitcher from 'components/ThemeSwitcher'
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
        '@md': { p: '$medium' }
      }}
    >
      <S.NavWrapper screen={{ '@initial': 'mobile', '@md': 'desktop' }}>
        <Box css={{ '@md': { display: 'none' } }}>
          <MobileMenu />
        </Box>
        <Box
          css={{
            display: 'none',
            '@md': { display: 'initial', width: '100%' }
          }}
        >
          <DesktopMenu />
        </Box>
        <ThemeSwitcher />
      </S.NavWrapper>

      <Box css={{ m: '$medium' }}>{children}</Box>
    </Box>
  )
}

export default Layout
