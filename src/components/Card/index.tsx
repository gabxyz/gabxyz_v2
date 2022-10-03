import { ArrowRightIcon } from '@radix-ui/react-icons'
import cn from 'classnames'
import Button from 'components/Button'
import Image from 'next/image'
import { useState } from 'react'

interface CardProps {
  title: string
  description: string
  tools: string[]
  bannerUrl: string
}

const Card = ({ title, description, tools, bannerUrl }: CardProps) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <>
      <div className="w-full max-w-md rounded-lg bg-mauve-2 shadow-lg">
        <a className="group cursor-pointer">
          <div className="aspect-w-16 aspect-h-9 relative w-full overflow-hidden rounded-t-md">
            <Image
              src={bannerUrl}
              layout="fill"
              objectFit="cover"
              className={cn(
                'duration-500 ease-in-out group-hover:opacity-75',
                isLoading ? 'grayscale blur-md' : 'grayscale-0 blur-0'
              )}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        </a>

        <div className="flex flex-col items-start gap-6 p-4">
          <section className="space-y-1">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="font-mono text-sm font-semibold text-mauve-11">
              {description}
            </p>
          </section>
          <div className="flex w-full items-center justify-between">
            <p className="font-mono text-sm font-bold">{tools.join(' :: ')}</p>
            <Button as="a">
              <span className="mr-2 font-mono text-sm font-bold">
                Learn more
              </span>
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
