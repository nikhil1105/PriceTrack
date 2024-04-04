'use client'
import Image from 'next/image'
import Link from 'next/link'
import Searchbar from './Searchbar'
import { useSession } from 'next-auth/react'

const navIcons = [
  { src: '/assets/icons/track.png', alt: 'search' },
  { src: '/assets/icons/profile-user.png', alt: 'search' },

  ]


const HNavbar = () => {
  
  return (
    <header className="w-full">
      <nav className="flex justify-between px-[16px] py-[24px] md:py-[50px] xl:py-[24px] text-[30px] gap-1 font-bold">
        <Link href="/" className="flex items-center ">
          <Image 
            src="/assets/icons/logo.svg"
            width={30}
            height={30}
            alt="logo"
          />

          <p className="max-sm:text-[20px]">
            Price<span className=' text-red-600'>Track</span>
          </p>
        </Link>
        

        
      </nav>
    </header>
  )
}

export default HNavbar
