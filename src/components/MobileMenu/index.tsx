import {
  CodeIcon,
  Cross1Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  HomeIcon,
  InfoCircledIcon,
  LinkedInLogoIcon
} from '@radix-ui/react-icons'
import Box from 'components/Box'
import Separator from 'components/Separator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from './styles'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <S.MenuWrapper onOpenChange={() => setIsOpen(!isOpen)}>
      <S.MenuTrigger asChild>
        <S.IconButton aria-label="Open Menu">
          <HamburgerMenuIcon />
        </S.IconButton>
      </S.MenuTrigger>
      <S.StyledOverlay />
      <S.MenuContent>
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            my: '$xsmall',
            pl: '$xsmall'
          }}
        >
          <S.MenuClose asChild>
            <S.IconButton aria-label="Close Menu">
              <Cross1Icon />
            </S.IconButton>
          </S.MenuClose>
          <Box
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '$xxsmall',
              width: '100%',
              height: '$small'
            }}
          >
            <Box css={{ lineHeight: 1.5 }}>
              <S.StyledTitle>Gabriel Rodrigues</S.StyledTitle>
              <S.StyledDescription>Front-End Developer</S.StyledDescription>
            </Box>
            <Separator orientation="vertical" />
            <Box
              css={{ display: 'flex', alignItems: 'center', gap: '$xxsmall' }}
            >
              <S.SocialButton>
                <GitHubLogoIcon />
              </S.SocialButton>
              <S.SocialButton>
                <LinkedInLogoIcon />
              </S.SocialButton>
            </Box>
          </Box>
        </Box>
        <S.PagesWrapper>
          <S.ItemWrapper>
            <Link href="/" passHref>
              <S.ItemLink className={router.pathname === '/' ? 'active' : ''}>
                <HomeIcon />
                Home
              </S.ItemLink>
            </Link>
          </S.ItemWrapper>
          <S.ItemWrapper>
            <Link href="/portfolio" passHref>
              <S.ItemLink
                className={router.pathname === '/portfolio' ? 'active' : ''}
              >
                <CodeIcon />
                Portfolio
              </S.ItemLink>
            </Link>
          </S.ItemWrapper>
          <S.ItemWrapper>
            <Link href="/about" passHref>
              <S.ItemLink
                className={router.pathname === '/about' ? 'active' : ''}
              >
                <InfoCircledIcon />
                About
              </S.ItemLink>
            </Link>
          </S.ItemWrapper>
        </S.PagesWrapper>
      </S.MenuContent>
    </S.MenuWrapper>
  )
}
export default MobileMenu
