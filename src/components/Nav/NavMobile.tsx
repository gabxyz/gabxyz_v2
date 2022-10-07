import { useRouter } from 'next/router'
import { ReactElement, useState } from 'react'

import * as DialogMenu from '@radix-ui/react-dialog'
import {
  ArrowTopRightIcon,
  BackpackIcon,
  Cross1Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  HomeIcon,
  InfoCircledIcon,
  LinkedInLogoIcon
} from '@radix-ui/react-icons'
import { motion } from 'framer-motion'

import Separator from 'components/Separator'
import ThemeSwitcher from 'components/ThemeSwitcher'
import Button from 'components/Button'

import NavLink from './NavLink'

const NavMobile = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const currentPath = router.query.slug
    ? router.asPath.replace(`/${router.query.slug.toString()}`, '')
    : router.asPath

  const header = {
    hidden: { opacity: 0, y: -60 },
    show: { opacity: 1, y: 0 }
  }
  const containerNav = {
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

  const item = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0 }
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

  const social: { title: string; path: string; icon: ReactElement }[] = [
    {
      title: 'Github',
      path: 'https://github.com/gabxyz',
      icon: <GitHubLogoIcon />
    },
    {
      title: 'LinkedIn',
      path: 'https://linkedin.com/in/gabxyz',
      icon: <LinkedInLogoIcon />
    }
  ]

  return (
    <>
      <motion.div
        variants={containerNav}
        initial="hidden"
        animate="show"
        className="flex justify-between rounded-xl bg-mauve-2 p-2 shadow-md"
      >
        <DialogMenu.Root open={open} onOpenChange={() => setOpen(!open)}>
          <Button as={DialogMenu.Trigger} iconOnly>
            <HamburgerMenuIcon />
          </Button>
          <DialogMenu.Overlay className="fixed inset-0 z-20 bg-blackA-9 backdrop-blur-[1px]" />
          <DialogMenu.Content className="fixed inset-0 z-30 w-4/5  border-r border-mauve-6 bg-mauve-2 p-4 rdx-state-closed:animate-close-menu rdx-state-open:animate-open-menu">
            <motion.div
              variants={container}
              className="flex justify-between gap-2"
            >
              <Button as={DialogMenu.Close} iconOnly>
                <Cross1Icon />
              </Button>
              <div className="flex flex-col items-end gap-2">
                <div className="whitespace-nowrap leading-tight">
                  <motion.h1 variants={header} className="font-semibold">
                    Gabriel Rodrigues
                  </motion.h1>
                  <motion.h2
                    variants={header}
                    className="indent-px text-sm text-mauve-11"
                  >
                    Front-end Developer
                  </motion.h2>
                </div>
              </div>
            </motion.div>
            <nav aria-label="Main Navigation">
              <motion.ul
                variants={container}
                className="my-12 flex flex-col gap-2"
              >
                {pages.map(({ title, path, icon }) => (
                  <motion.li variants={item} key={title}>
                    <NavLink
                      href={path}
                      variant={
                        path === currentPath ? 'mobile-active' : 'mobile'
                      }
                      onClick={() => setOpen(false)}
                    >
                      {icon}
                      <span>{title}</span>
                    </NavLink>
                  </motion.li>
                ))}
                <motion.span variants={item} className="m-2 w-full self-center">
                  <Separator />
                </motion.span>
                <motion.div
                  variants={item}
                  className="flex flex-col gap-2 text-sm font-semibold"
                >
                  {social.map(({ title, path, icon }) => (
                    <Button as="a" href={path} key={path} target="_blank">
                      <span className="flex h-full w-full items-center gap-2">
                        {icon}
                        {title}
                      </span>
                      <ArrowTopRightIcon className="text-mauve-11" />
                    </Button>
                  ))}
                </motion.div>
              </motion.ul>
            </nav>
          </DialogMenu.Content>
        </DialogMenu.Root>
        <ThemeSwitcher />
      </motion.div>
    </>
  )
}
export default NavMobile
