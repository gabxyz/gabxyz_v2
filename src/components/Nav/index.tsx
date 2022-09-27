import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

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
