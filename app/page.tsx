import React from 'react'
import Image from "next/image";
import Searchbar from "../components/Searchbar";
import Content from "../components/Content";
import HNavbar from '@/components/Navbar';
import LoginForm from "@/components/LoginForm"

const Home = () => {
  return (
    
    <>
    <HNavbar/>
    <section className=' tracking-wider leading-tight' >
    <div className=' xl:flex items-center xl:h-[800px]'>
    <div>
    <div>
    <div className='flex p-1'>
      <p className='p-1 text-red-500 text-[15px] sm:text-[20px] font-bold'>Smart Shopping Starts Here:</p>
      <Image
      src='/assets/icons/arrow-right.svg'
      alt=''
      width={20}
      height={20}
      />
    </div>

    <p className='sm:text-[60px] text-[30px] font-bold my-4'>
    Unleash the Power of <span className='text-red-500'>PriceTrack</span>
    </p>
    <p className='sm:text-[20px] text-[15px] my-8'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.</p>
    </div>
    <Searchbar/>
    </div>
    <div className='xl:w-auto w-full flex items-center justify-center'>
    <Content/>
    </div>
    </div>
    </section>
    
    </>
  )
}

export default Home
