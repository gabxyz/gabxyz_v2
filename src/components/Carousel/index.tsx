import { useCallback, useEffect, useState, createContext } from 'react'

import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { Button } from 'components/Button'
import Tooltip from 'components/Tooltip'

interface ContextValue {
  embla: EmblaCarouselType | undefined
  selectedIndex: number
}

interface CarouselProps {
  children: React.ReactNode[]
}

export const CarouselContext = createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1
})

const Carousel = ({ children }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    skipSnaps: false
  })

  const [isVisible, setIsVisible] = useState(false)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return

    setTimeout(() => {
      emblaApi.reInit()
      setIsVisible(true)
    })
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect, isVisible])

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div className={`embla ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {children.map((slide, index) => (
              <div className="embla__slide" key={index}>
                {slide}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto flex w-3/4 min-w-fit items-center justify-between gap-2 rounded-xl bg-mauve-2 p-3 shadow-md ">
          <Tooltip content={prevBtnEnabled && 'Previous'}>
            <Button
              variant="emblaArrow"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ArrowLeftIcon />
            </Button>
          </Tooltip>

          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => (
              <Button
                key={index}
                variant={
                  index === selectedIndex ? 'activeEmblaDot' : 'emblaDot'
                }
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
          <Tooltip content={nextBtnEnabled && 'Next'}>
            <Button
              variant="emblaArrow"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ArrowRightIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export default Carousel
