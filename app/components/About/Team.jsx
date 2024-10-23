import Image from "next/image"
import { team } from "@/app/db/page"
import { CiTwitter } from "react-icons/ci"
import { IoLogoInstagram } from "react-icons/io"
import { RiLinkedinLine } from "react-icons/ri"

export default function Team() {
  return (
    <div className="flex gap-8 px-4 sm:px-6 lg:px-8 overflow-auto ">
      {team.map((member, i) => (
        <div key={i} className="flex flex-col min-w-[270px] md:min-w-[370px]">
          <div className="relative w-full aspect-square mb-4">
            <Image
             src={member.image}
              alt={member.name}
              className="rounded-lg"
            />
          </div>
          <h2 className="font-inter text-2xl sm:text-3xl font-medium mb-2">{member.name}</h2>
          <p className="font-poppins text-sm sm:text-base font-normal mb-4">{member.title}</p>
          <ul className="flex gap-5 ">
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
      ))}
    </div>
  )
}