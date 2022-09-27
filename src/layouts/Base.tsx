import Nav from 'components/Nav'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

type BaseProps = {
  children: React.ReactNode
}

const container = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0
  }
}

const Base = ({ children }: BaseProps) => {
  const { asPath } = useRouter()
  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main
          key={asPath}
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 250
          }}
          className="my-14 indent-px md:my-28"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  )
}

export default Base
