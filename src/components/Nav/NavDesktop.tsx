import { useRouter } from 'next/router'

import * as NavMenu from '@radix-ui/react-navigation-menu'
import { motion } from 'framer-motion'

import Separator from 'components/Separator'
import ThemeSwitcher from 'components/ThemeSwitcher'
import { LinkButton } from 'components/Button'
import Tooltip from 'components/Tooltip'
import { pages, social } from './index'
import UnstyledLink from 'components/Button/UnstyledLink'

const NavDesktop = () => {
  const router = useRouter()
  const currentPath = router.asPath

  const navDock = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.3 }
    }
  }

  const navItems = {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <>
      <motion.div
        variants={navDock}
        initial="hidden"
        animate="show"
        className="flex items-center justify-between rounded-xl bg-mauve-2 p-6 shadow-lg"
      >
        <motion.div variants={navItems} className="flex items-center gap-4">
          <div className="flex flex-col -space-y-1">
            <h1 className="text-lg font-semibold">
              <UnstyledLink
                href="/"
                className="hover:text-mauve-11 motion-safe:duration-150 motion-safe:ease-productive-standard"
              >
                gabxyz
              </UnstyledLink>
            </h1>
            <h2 className="indent-px text-sm font-light text-mauve-11">
              front-end dev :: ui/ux
            </h2>
          </div>
          <span className="h-8">
            <Separator orientation="vertical" />
          </span>
          <motion.div className="flex gap-2.5">
            {social.map(({ title, path, icon }) => (
              <Tooltip key={path} content={title}>
                <LinkButton href={path}>{icon}</LinkButton>
              </Tooltip>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          variants={navItems}
          className="flex items-center justify-between gap-4"
        >
          <NavMenu.Root>
            <NavMenu.List className="flex list-none gap-4">
              {pages.map(({ path, icon, title }) => (
                <NavMenu.Item key={path}>
                  <Tooltip content={title}>
                    <LinkButton
                      href={path}
                      variant={path === currentPath ? 'activeLink' : undefined}
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
                    </LinkButton>
                  </Tooltip>
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
