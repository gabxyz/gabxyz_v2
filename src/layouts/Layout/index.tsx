import DesktopMenu from 'components/DesktopMenu'
import MobileMenu from 'components/MobileMenu'

type LayoutTemplateProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutTemplateProps) => {
  return (
    <>
      <div className="mx-auto my-16 max-w-4xl">
        <div className="flex w-full items-center justify-between">
          <div className="md:hidden">
            <MobileMenu />
          </div>
          <div className="hidden md:block md:w-full">
            <DesktopMenu />
          </div>
        </div>

        <main className="my-14 md:my-20">{children}</main>
      </div>
    </>
  )
}

export default Layout
