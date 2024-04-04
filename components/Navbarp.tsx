'use client'
import Image from 'next/image'
import Link from 'next/link'
import Searchbar from './Searchbar'
import { useSession } from 'next-auth/react'

const navIcons = [
  { src: '/assets/icons/track.png', alt: 'search' },
  { src: '/assets/icons/profile-user.png', alt: 'search' },

  ]

const Navbar = () => {
  const {data: session} = useSession()
  console.log(session);
  
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
        
        <div className=' hidden md:block px-10 w-full'>
          <Searchbar />
        </div>

        <div className="flex items-center gap-8">
        
            {
              session?
              <Link href='/Profile' className='cursor-pointer' >
              
              <img 
                src='/assets/icons/userred.png'
                alt='user'
                className="object-contain w-8 sm:w-12 "
              />
            </Link>:
            <Link href='/login' className='cursor-pointer' >
              
            <img 
              src='/assets/icons/userred.png'
              alt='user'
              className="object-contain w-8 sm:w-12 "
            />
          </Link>

            }
        </div>
      </nav>
      <div className='md:hidden sm:px-10 w-full'>
          <Searchbar />
        </div>
    </header>
  )
}

export default Navbar
