'use client'

import { useState, useRef, useEffect } from 'react'
import Image from "next/image"
import { team } from "@/app/db/page"
import { CiTwitter } from "react-icons/ci"
import { IoLogoInstagram } from "react-icons/io"
import { RiLinkedinLine } from "react-icons/ri"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Team() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const swiperRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index)
    }
  }

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
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
              currentSlide === index ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}