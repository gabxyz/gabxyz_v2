import {
  CodeIcon,
  GitHubLogoIcon,
  HomeIcon,
  InfoCircledIcon,
  LinkedInLogoIcon
} from '@radix-ui/react-icons'
import Separator from 'components/Separator'
import Box from 'components/Box'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './styles'

const DesktopMenu = () => {
  const router = useRouter()
  const isActive = router.asPath

  return (
    <Box
      css={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '$xxsmall'
        }}
      >
        <Box css={{ lineHeight: 1.5 }}>
          <S.Name>Gabriel Rodrigues</S.Name>
          <S.Description>Front-End Developer</S.Description>
        </Box>

        <Separator
          css={{ '&[data-orientation=vertical]': { height: '90%' } }}
          orientation="vertical"
        />
        <S.IconButton>
          <GitHubLogoIcon />
        </S.IconButton>
        <S.IconButton>
          <LinkedInLogoIcon />
        </S.IconButton>
      </Box>
      <Box css={{ alignSelf: 'center' }}>
        <S.MenuWrapper>
          <S.MenuList>
            <Link href="/" passHref>
              <S.MenuLink active={isActive === '/'}>
                <HomeIcon />
                Home
              </S.MenuLink>
            </Link>

            <Link href="/portfolio" passHref>
              <S.MenuLink active={isActive === '/portfolio'}>
                <CodeIcon />
                Portfolio
              </S.MenuLink>
            </Link>

            <Link href="/about" passHref>
              <S.MenuLink active={isActive === '/about'}>
                <InfoCircledIcon />
                About
              </S.MenuLink>
            </Link>
          </S.MenuList>
        </S.MenuWrapper>
      </Box>
    </Box>
  )
}

export default DesktopMenu
