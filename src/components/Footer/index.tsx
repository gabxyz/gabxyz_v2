import UnstyledLink from 'components/Button/UnstyledLink'
import Tooltip from 'components/Tooltip'
import LastVisit from './LastVisit'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 text-sm text-mauve-11 sm:flex-row">
      <p>
        beauty{' '}
        <Tooltip content="do it">
          <UnstyledLink
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="-ml-px mr-px font-bold italic hover:text-mauve-12 motion-safe:duration-150 motion-safe:ease-productive-standard"
          >
            lies{' '}
          </UnstyledLink>
        </Tooltip>
        in the balance of form and function
      </p>
      <div className="mt-0.5 hidden h-1 w-1 flex-none rounded-full bg-mauve-11 sm:inline-flex" />
      <LastVisit />
    </footer>
  )
}

export default Footer
