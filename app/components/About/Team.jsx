'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from "next/image"
import { team } from "@/app/db/page"
import { CiTwitter } from "react-icons/ci"
import { IoLogoInstagram } from "react-icons/io"
import { RiLinkedinLine } from "react-icons/ri"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Team() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, setSliderRef] = useState(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  const goToSlide = useCallback((index) => {
    sliderRef?.slickGoTo(index)
  }, [sliderRef])

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentSlide + 1) % team.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide, goToSlide])

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <Slider ref={setSliderRef} {...settings}>
        {team.map((member, i) => (
          <div key={i} className="px-2">
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
          </div>
        ))}
      </Slider>
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