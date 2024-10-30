'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { categoriesList } from '@/app/db/page'
import useEmblaCarousel from 'embla-carousel-react'

const Category = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    breakpoints: {
      '(min-width: 140px)': { slidesToScroll: 2 },
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 768px)': { slidesToScroll: 3 },
      '(min-width: 1024px)': { slidesToScroll: 4 },
      '(min-width: 1280px)': { slidesToScroll: 7 },
    }
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className='grid gap-5'>
      <div className="flex items-center gap-2">
      <span className="h-10 w-5 bg-bgsecondary rounded" aria-hidden="true"></span>
        <p className="font-poppins font-semibold text-sm sm:text-base text-bgsecondary">Categories</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mt-5">
        <h1 className='font-inter font-semibold text-2xl sm:text-3xl md:text-4xl'>Browse By Category</h1>
        <div className="md:flex items-center gap-2 hidden">
          <button
            className="relative h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            aria-label="Previous category"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="relative h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            aria-label="Next category"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden hidden md:block" ref={emblaRef}>
        <div className="flex">
          {categoriesList.map((category, index) => (
            <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] xl:flex-[0_0_16.66%] min-w-0 px-2">
              <div className="min-h-[145px] w-full flex flex-col border items-center justify-center hover:bg-bgsecondary transition-colors duration-300 cursor-pointer rounded hover:text-white gap-4 p-4">
                {category.icon}
                <h3 className="font-poppins text-sm sm:text-base text-center">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 font-poppins md:hidden">
          {categoriesList.map((category, index) => (
            <div key={index} className="">
              <div className="min-h-[145px] w-full flex flex-col border items-center justify-center hover:bg-bgsecondary transition-colors duration-300 cursor-pointer rounded hover:text-white gap-4 p-4">
                {category.icon}
                <h3 className="font-poppins text-sm sm:text-base text-center">{category.name}</h3>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center text-lg font-semibold hover:text-hover underline">
            View All
          </div>
        </div>
    </div>
  )
}

export default Category