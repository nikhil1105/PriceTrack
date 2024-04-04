'use client'
import Productpage from '@/components/Productpage';
import Navbar from '@/components/Navbarp';

function page() {
  return (
    <div className='flex flex-col items-center justify-center' >
      <Navbar/>
      <Productpage/>
    </div>
  )
}

export default page
