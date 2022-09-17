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
          <h2 className="text-base text-mauve-11 font-light ml-px">
            Front-End Developer
          </h2>
        </div>
        <span className="h-10">
          <Separator orientation="vertical" />
        </span>
        <div className="flex gap-2">
          <button className="bg-mauve-3 w-10 h-10 flex items-center justify-center rounded-md hover:bg-mauve-4">
            <GitHubLogoIcon />
          </button>
          <button className="bg-mauve-3 w-10 h-10 flex items-center justify-center rounded-md hover:bg-mauve-4">
            <LinkedInLogoIcon />
          </button>
        </div>
      </header>

      <NavMenu.Root className="pt-3">
        <NavMenu.List className="flex gap-2 list-none">
          {pages.map(({ title, path, icon }) => (
            <Link href={path} passHref key={title}>
              <NavMenu.Link className="w-24 h-8 flex items-center justify-center gap-1 relative text-sm rounded-md hover:bg-mauve-4">
                {icon}
                {title}
                {path === currentPath && (
                  <motion.span
                    className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-violet-9 to-crimson-9"
                    layoutId="underline"
                    transition={{
                      type: 'spring',
                      duration: 0.8,
                      stiffness: 80
                    }}
                  />
                )}
              </NavMenu.Link>
            </Link>
          ))}
        </NavMenu.List>
      </NavMenu.Root>
    </div>
  )
}

export default DesktopMenu
