import { ReactElement } from 'react'
import {
  BackpackIcon,
  GitHubLogoIcon,
  HomeIcon,
  InfoCircledIcon,
  LinkedInLogoIcon
} from '@radix-ui/react-icons'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

export const pages: { title: string; path: string; icon: ReactElement }[] = [
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

export const social: { title: string; path: string; icon: ReactElement }[] = [
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

const Nav = () => {
  return (
    <>
      <header className="flex w-full items-center">
        <div className="w-full md:hidden">
          <NavMobile />
        </div>
        <div className="hidden md:block md:w-full">
          <NavDesktop />
        </div>
      </header>
    </>
  )
}

export default Nav
