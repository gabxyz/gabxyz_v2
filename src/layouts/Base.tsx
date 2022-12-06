import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

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
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col p-2 pb-4 md:py-8">
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
            className="relative my-12 mx-6 flex flex-1 flex-col"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  )
}

export default Base
