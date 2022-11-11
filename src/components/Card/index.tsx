import { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import cn from 'classnames'
import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@radix-ui/react-icons'

import NavLink from 'components/Nav/NavLink'
import Separator from 'components/Separator'
import { CarouselContext } from 'components/Carousel'

interface CardProps {
  index: number
  slug: string
  title: string
  description: string
  bannerUrl: string
  stack: string[]
}

const Card = ({
  index,
  slug,
  title,
  description,
  bannerUrl,
  stack
}: CardProps) => {
  const [isLoading, setLoading] = useState(true)
  const { selectedIndex } = useContext(CarouselContext)
  const isActive = selectedIndex === index

  const cardVariants = {
    inactive: {
      opacity: 0.6,
      y: 0,
      filter: 'blur(1px)'
    },
    active: {
      opacity: 1,
      y: -20,
      filter: 'blur(0px)'
    }
  }

  return (
    <>
      <motion.div
        variants={cardVariants}
        animate={isActive ? 'active' : 'inactive'}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 250,
          duration: 0.5,
          delay: 0.2
        }}
        className="w-full max-w-lg overflow-hidden rounded-lg bg-mauve-2 shadow-md"
      >
        <Link href={`projects/${slug}`}>
          <a className="group cursor-pointer">
            <Image
              src={bannerUrl}
              width={640}
              height={360}
              objectFit="cover"
              objectPosition="center"
              className={cn(
                'rounded-t-lg duration-500 ease-in-out group-hover:opacity-90',
                isLoading ? 'grayscale blur-md' : 'grayscale-0 blur-0'
              )}
              onLoadingComplete={() => setLoading(false)}
            />
          </a>
        </Link>

        <div className="flex flex-col items-start space-y-4 p-4">
          <section className="space-y-1">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="font-mono text-sm font-semibold text-mauve-11">
              {description}
            </p>
          </section>
          <Separator />
          <div className="flex w-full items-center justify-between">
            <p className="font-mono text-sm font-bold">{stack.join(' :: ')}</p>
            <NavLink href={`projects/${slug}`}>
              <span>Learn more</span>
              <ChevronRightIcon />
            </NavLink>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Card
