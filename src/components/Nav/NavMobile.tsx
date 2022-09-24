import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, useState } from 'react'

import * as DialogMenu from '@radix-ui/react-dialog'
import {
  CodeIcon,
  Cross1Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  HomeIcon,
  InfoCircledIcon,
  LinkedInLogoIcon
} from '@radix-ui/react-icons'

import Separator from 'components/Separator'
import { motion } from 'framer-motion'
import ThemeSwitcher from 'components/ThemeSwitcher'
import Button from 'components/Button'

const NavMobile = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const currentPath = router.asPath

  const header = {
    hidden: { opacity: 0, y: -20 },
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

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 }
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
      <div className="flex justify-between">
        <DialogMenu.Root open={open} onOpenChange={() => setOpen(!open)}>
          <Button as={DialogMenu.Trigger}>
            <HamburgerMenuIcon />
          </Button>
          <DialogMenu.Overlay className="fixed inset-0 z-20 bg-blackA-9" />
          <DialogMenu.Content className="fixed inset-0 z-30 w-4/5 border-r border-mauve-6 bg-mauve-1 px-2.5 rdx-state-closed:animate-close-menu rdx-state-open:animate-open-menu">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center justify-between gap-1.5 py-4"
            >
              <Button as={DialogMenu.Close}>
                <Cross1Icon />
              </Button>
              <div className="flex items-center justify-end space-x-1.5">
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
                <motion.span variants={header} className="h-8">
                  <Separator orientation="vertical" />
                </motion.span>
                <motion.div
                  variants={header}
                  className="flex items-center gap-1.5"
                >
                  <Button
                    as="a"
                    href="https://github.com/gabxyz"
                    target="_blank"
                  >
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
            </motion.div>
            <nav aria-label="Pages Navigation">
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="my-4 flex flex-col gap-2"
              >
                {pages.map(({ title, path, icon }) => (
                  <motion.li variants={item} key={title}>
                    <Link href={path} passHref key={title}>
                      <Button
                        as="a"
                        variant={
                          path === currentPath ? 'mobile-active' : 'mobile'
                        }
                        onClick={() => setOpen(false)}
                      >
                        {icon}
                        {title}
                      </Button>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </DialogMenu.Content>
        </DialogMenu.Root>
        <ThemeSwitcher />
      </div>
    </>
  )
}
export default NavMobile
