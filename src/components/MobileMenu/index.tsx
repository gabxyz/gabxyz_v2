import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, useState } from 'react'
import cn from 'classnames'

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

const MobileMenu = () => {
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
      <DialogMenu.Root open={open} onOpenChange={() => setOpen(!open)}>
        <DialogMenu.Trigger className="flex h-8 w-8 items-center justify-center rounded-md bg-mauve-3">
          <HamburgerMenuIcon />
        </DialogMenu.Trigger>

        <DialogMenu.Overlay className="fixed inset-0 z-20 bg-blackA-9 transition-all duration-200 ease-in-out" />
        <DialogMenu.Content className="fixed inset-0 z-30 w-3/4 border-r border-mauve-6 bg-mauve-1 p-2 rdx-state-closed:animate-close-menu rdx-state-open:animate-open-menu">
          <div className="mt-4 ml-4 flex items-center justify-between">
            <DialogMenu.Close className="flex h-8 w-8 items-center justify-center rounded-md bg-mauve-3">
              <Cross1Icon />
            </DialogMenu.Close>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex items-center justify-between gap-2"
            >
              <div>
                <motion.h1 variants={header} className="text-sm font-semibold">
                  Gabriel Rodrigues
                </motion.h1>
                <motion.h2
                  variants={header}
                  className="ml-px text-xs font-light text-mauve-11"
                >
                  Front-End Developer
                </motion.h2>
              </div>
              <motion.span variants={header} className="h-10">
                <Separator orientation="vertical" />
              </motion.span>
              <motion.div variants={header} className="flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-md bg-mauve-3">
                  <GitHubLogoIcon />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-md bg-mauve-3">
                  <LinkedInLogoIcon />
                </button>
              </motion.div>
            </motion.div>
          </div>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="my-8 flex flex-col gap-2"
          >
            {pages.map(({ title, path, icon }) => (
              <motion.li variants={item} key={title}>
                <Link href={path} passHref key={title}>
                  <a
                    className={cn(
                      path === currentPath
                        ? 'font-semibold bg-gradient-to-r from-violet-9 to-crimson-9'
                        : 'font-light',
                      'w-full flex items-center justify-start gap-2 rounded-md text-sm p-2'
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {icon}
                    {title}
                  </a>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </DialogMenu.Content>
      </DialogMenu.Root>
    </>
  )
}
export default MobileMenu
