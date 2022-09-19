import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'

import * as NavMenu from '@radix-ui/react-navigation-menu'
import {
  CodeIcon,
  GitHubLogoIcon,
  HomeIcon,
  InfoCircledIcon,
  LinkedInLogoIcon
} from '@radix-ui/react-icons'

import Separator from 'components/Separator'

import { motion } from 'framer-motion'
import Button from 'components/Button'
import ThemeSwitcher from 'components/ThemeSwitcher'

const DesktopMenu = () => {
  const router = useRouter()
  const currentPath = router.asPath

  const pages: { title: string; path: string; icon: ReactElement }[] = [
    {
      title: 'Home',
      path: '/',
      icon: <HomeIcon />
    },
    {
      title: 'Portfolio',
      path: '/portfolio',
      icon: <CodeIcon />
    },
    {
      title: 'About',
      path: '/about',
      icon: <InfoCircledIcon />
    }
  ]

  return (
    <div className="flex items-center justify-between">
      <header className="flex items-center gap-2">
        <div>
          <h1 className="text-xl  font-semibold">Gabriel Rodrigues</h1>
          <h2 className="ml-px text-base font-light text-mauve-11">
            Front-End Developer
          </h2>
        </div>
        <span className="h-10">
          <Separator orientation="vertical" />
        </span>
        <div className="flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-md bg-mauve-3 hover:bg-mauve-4">
            <GitHubLogoIcon />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-md bg-mauve-3 hover:bg-mauve-4">
            <LinkedInLogoIcon />
          </button>
        </div>
      </header>
      <div className="flex items-center justify-between gap-4">
        <NavMenu.Root>
          <NavMenu.List className="flex list-none gap-4">
            {pages.map(({ path, icon }) => (
              <NavMenu.Item key={path}>
                <Link href={path} passHref>
                  <Button
                    variant={path === currentPath ? 'active' : 'default'}
                    size="lg"
                    as={NavMenu.Link}
                  >
                    {icon}
                    {path === currentPath && (
                      <motion.span
                        className="absolute inset-x-0 -bottom-1.5 h-px bg-gradient-to-r from-violet-9 to-crimson-9"
                        layoutId="underline"
                        transition={{
                          type: 'spring',
                          duration: 0.8,
                          stiffness: 80
                        }}
                      />
                    )}
                  </Button>
                </Link>
              </NavMenu.Item>
            ))}
          </NavMenu.List>
        </NavMenu.Root>
        <span className="h-8">
          <Separator orientation="vertical" />
        </span>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default DesktopMenu
