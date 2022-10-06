import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import cn from 'classnames'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import NavLink from 'components/Nav/NavLink'
import Separator from 'components/Separator'

interface CardProps {
  slug: string
  title: string
  description: string
  bannerUrl: string
  stack: string[]
}

const Card = ({ slug, title, description, bannerUrl, stack }: CardProps) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <>
      <div className="w-full max-w-full rounded-lg bg-mauve-2 shadow-lg md:max-w-md">
        <Link href={`projects/${slug}`}>
          <a className="group cursor-pointer">
            <Image
              src={bannerUrl}
              width={640}
              height={360}
              objectFit="cover"
              objectPosition="center"
              className={cn(
                'overflow-hidden rounded-t-lg duration-500 ease-in-out group-hover:opacity-75',
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
              <span className="mr-2 font-mono text-sm font-bold">
                Learn more
              </span>
              <ArrowRightIcon />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
