'use client'

import { useState, useEffect, useRef } from 'react'
import Image from "next/image"
import { team } from "@/app/db/page"
import { CiTwitter } from "react-icons/ci"
import { IoLogoInstagram } from "react-icons/io"
import { RiLinkedinLine } from "react-icons/ri"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default function TeamCarousel() {
  const [swiper, setSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const autoplayTimeoutRef = useRef(null)

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
  }

  const goToSlide = (index) => {
    if (swiper) {
      swiper.slideTo(index)
    }
  }

  useEffect(() => {
    if (swiper) {
      autoplayTimeoutRef.current = setTimeout(() => {
        const nextIndex = (activeIndex + 1) % team.length
        goToSlide(nextIndex)
      }, 5000)
    }

    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current)
      }
    }
  }, [activeIndex, swiper])

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {team.map((member, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="font-inter text-2xl sm:text-3xl font-medium mb-2">{member.name}</h2>
              <p className="font-poppins text-sm sm:text-base font-normal mb-4">{member.title}</p>
              <ul className="flex gap-5 justify-center">
                <a href={member.twitter} rel="noreferrer" target="_blank" className="hover:text-primary transition-colors">
                  <CiTwitter className="text-xl sm:text-2xl" />
                </a>
                <a href={member.insta} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  <IoLogoInstagram className="text-xl sm:text-2xl" />
                </a>
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  <RiLinkedinLine className="text-xl sm:text-2xl" />
                </a>
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-6">
        {team.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 transition-colors ${
              activeIndex === index ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}