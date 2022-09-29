import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import { CodeIcon, RocketIcon } from '@radix-ui/react-icons'
import Button from 'components/Button'
import Separator from 'components/Separator'
import Image from 'next/image'

interface CardProps {
  title: string
  description: string
  tools: string
  imgUrl: string
  liveUrl?: string
  repoUrl?: string
}

const Card = ({
  title,
  description,
  tools,
  imgUrl,
  liveUrl,
  repoUrl
}: CardProps) => {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-mauve-2 px-4 py-6 shadow-default hover:shadow-card-hover focus:shadow-card-focus md:w-2/3">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="w-full">
          <AspectRatio.Root ratio={16 / 9} className="rounded-md shadow-image">
            <Image
              className="rounded-md "
              src={imgUrl}
              layout="fill"
              objectFit="cover"
            />
          </AspectRatio.Root>
        </div>
        <div className="mt-4 flex flex-col items-start gap-4">
          <section className="space-y-1">
            <h2 className="font-semibold">About this project</h2>
            <p className="text-mauve-11">{description}</p>
          </section>
          <Separator />
          <section className="space-y-1">
            <h2 className="font-semibold">Tools used</h2>
            <p className="text-mauve-11">{tools}</p>
          </section>
          <Separator />
          <section className="space-y-2">
            <h2 className="font-semibold">Resources</h2>
            <div className="space-x-2 text-sm font-semibold text-mauve-11 md:space-x-4">
              <Button as="a" href={liveUrl} target="_blank">
                <RocketIcon />
                <p className="ml-1">Live project</p>
              </Button>
              <Button as="a" href={repoUrl} target="_blank">
                <CodeIcon />
                <p className="ml-1">Code repository</p>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Card
