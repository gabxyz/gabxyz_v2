import type { ReactElement } from 'react'
import { useRouter } from 'next/router'

import * as NavMenu from '@radix-ui/react-navigation-menu'
import {
  BackpackIcon,
  GitHubLogoIcon,
  HomeIcon,
  InfoCircledIcon,
  LinkedInLogoIcon
} from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

import NavLink from './NavLink'
import Separator from 'components/Separator'
import ThemeSwitcher from 'components/ThemeSwitcher'
import Button from 'components/Button'

const NavDesktop = () => {
  const router = useRouter()
  const currentPath = router.asPath

  const header = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0 }
  }

  const nav = {
    hidden: { opacity: 0, y: -80 },
    show: { opacity: 1, y: 0 }
  }

  const container = {
    hidden: { opacity: 0, y: -60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const pages: { title: string; path: string; icon: ReactElement }[] = [
    {
      title: 'Home',
      path: '/',
      icon: <HomeIcon />
    },
    {
      title: 'Projects',
      path: '/projects',
      icon: <BackpackIcon />
    },
    {
      title: 'About',
      path: '/about',
      icon: <InfoCircledIcon />
    }
  ]

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex items-center justify-between rounded-xl bg-mauve-2 p-6 shadow-lg"
      >
        <div className="flex items-center gap-2.5">
          <div className="leading-none">
            <motion.h1 variants={header} className="text-xl font-semibold">
              Gabriel Rodrigues
            </motion.h1>
            <motion.h2 variants={header} className="indent-px text-mauve-11">
              Front-end Developer
            </motion.h2>
          </div>
          <motion.span variants={header} className="h-8">
            <Separator orientation="vertical" />
          </motion.span>
          <motion.div variants={header} className="flex gap-2">
            <Button as="a" href="https://github.com/gabxyz" target="_blank">
              <GitHubLogoIcon />
            </Button>
            <Button
              as="a"
              href="https://linkedin.com/in/gabxyz"
              target="_blank"
            >
              <LinkedInLogoIcon />
            </Button>
          </motion.div>
        </div>
        <motion.div
          variants={nav}
          className="flex items-center justify-between gap-4"
        >
          <NavMenu.Root>
            <NavMenu.List className="flex list-none gap-4">
              {pages.map(({ path, icon }) => (
                <NavMenu.Item key={path}>
                  <NavLink
                    href={path}
                    variant={path === currentPath ? 'active' : 'default'}
                  >
                    {icon}
                    {path === currentPath && (
                      <motion.span
                        className="absolute -inset-x-1.5 -top-2 h-px w-full rounded-full bg-gradient-to-r from-violet-9 to-crimson-9"
                        layoutId="topline"
                        transition={{
                          type: 'spring',
                          duration: 0.8,
                          stiffness: 80
                        }}
                      />
                    )}
                  </NavLink>
                </NavMenu.Item>
              ))}
            </NavMenu.List>
          </NavMenu.Root>
          <span className="h-8">
            <Separator orientation="vertical" />
          </span>
          <ThemeSwitcher />
        </motion.div>
      </motion.div>
    </>
  )
}

export default NavDesktop
