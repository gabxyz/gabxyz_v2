import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from 'components/Nav'

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
      <div className="relative flex flex-col p-2 md:py-8">
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
            className="my-12 mx-6"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </>
  )
}

export default Base
