import { useState } from 'react'
import { useRouter } from 'next/router'

import { motion } from 'framer-motion'
import * as DialogMenu from '@radix-ui/react-dialog'
import {
  ArrowTopRightIcon,
  Cross1Icon,
  HamburgerMenuIcon
} from '@radix-ui/react-icons'

import Separator from 'components/Separator'
import ThemeSwitcher from 'components/ThemeSwitcher'
import { Button, LinkButton } from 'components/Button'
import { pages, social } from './index'
import UnstyledLink from 'components/Button/UnstyledLink'

const NavMobile = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const currentPath = router.asPath

  const navDock = {
    hidden: { opacity: 0, y: -60 },
    show: {
      opacity: 1,
      y: 0
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

  return (
    <>
      <motion.div
        variants={navDock}
        initial="hidden"
        animate="show"
        className="flex justify-between rounded-xl bg-mauve-2 p-2 shadow-md"
      >
        <DialogMenu.Root open={open} onOpenChange={() => setOpen(!open)}>
          <DialogMenu.Trigger asChild>
            <Button>
              <HamburgerMenuIcon />
            </Button>
          </DialogMenu.Trigger>
          <DialogMenu.Overlay className="fixed inset-0 z-20 bg-blackA-9 backdrop-blur-[1px]" />
          <DialogMenu.Content className="fixed inset-0 z-30 w-4/5  border-r border-mauve-6 bg-mauve-2 p-4 rdx-state-closed:animate-close-menu rdx-state-open:animate-open-menu">
            <motion.div
              variants={container}
              className="flex justify-between gap-2"
            >
              <DialogMenu.Close asChild>
                <Button>
                  <Cross1Icon />
                </Button>
              </DialogMenu.Close>
              <motion.div
                variants={item}
                className="-space-y-1 truncate whitespace-nowrap"
              >
                <h1 className="font-semibold">
                  <UnstyledLink href="/" className="linkGradient">
                    gabxyz
                  </UnstyledLink>
                </h1>
                <h2 className="indent-px text-sm text-mauve-11">
                  front-end dev :: ui/ux
                </h2>
              </motion.div>
            </motion.div>
            <nav aria-label="Main Navigation">
              <motion.ul
                variants={container}
                className="my-12 flex flex-col gap-2"
              >
                {pages.map(({ title, path, icon }) => (
                  <motion.li variants={item} key={title}>
                    <LinkButton
                      href={path}
                      variant={
                        path === currentPath ? 'activeLink' : 'mobileLink'
                      }
                      onClick={() => setOpen(false)}
                    >
                      {icon}
                      <span>{title}</span>
                    </LinkButton>
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
                    <LinkButton href={path} key={path}>
                      <span className="flex h-full w-full items-center gap-2 font-sans">
                        {icon}
                        {title}
                      </span>
                      <ArrowTopRightIcon className="text-mauve-11" />
                    </LinkButton>
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
