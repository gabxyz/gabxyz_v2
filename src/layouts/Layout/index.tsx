import DesktopMenu from 'components/DesktopMenu'
import MobileMenu from 'components/MobileMenu'
import ThemeSwitcher from 'components/ThemeSwitcher'

type LayoutTemplateProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutTemplateProps) => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <nav className="flex items-center justify-between md:flex-col-reverse md:items-end md:gap-8">
          <div className="md:hidden">
            <MobileMenu />
          </div>
          <div className="hidden md:block md:w-full">
            <DesktopMenu />
          </div>
          <ThemeSwitcher />
        </nav>

        <main className="my-14 md:my-20">{children}</main>
      </div>
    </>
  )
}

export default Layout
