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
import ThemeSwitcher from 'components/ThemeSwitcher'

import { motion } from 'framer-motion'
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
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
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
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
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
                  <Link href={path} passHref>
                    <Button
                      variant={
                        path === currentPath ? 'default-active' : 'default'
                      }
                      as={NavMenu.Link}
                    >
                      {icon}
                      {path === currentPath && (
                        <motion.span
                          className="absolute inset-x-0 -top-2 h-px rounded-full bg-gradient-to-r from-violet-9 to-crimson-9"
                          layoutId="topline"
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
        </motion.div>
      </motion.div>
    </>
  )
}

export default NavDesktop
