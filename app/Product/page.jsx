'use client'
import Productpage from '@/components/Productpage';
import Navbar from '@/components/Navbarp';
import { useEffect } from 'react';

function page() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='flex flex-col items-center justify-center' >
      <Navbar/>
      <Productpage/>
    </div>
  )
}

export default page
