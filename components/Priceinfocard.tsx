import React from 'react'
import Image from "next/image";

interface props{
    title:string;
    iconSrc:string;
    value:string;
    borderColor:string
}

const Priceinfocard = ({title,iconSrc,value,borderColor}:props) => {
  return (
    <div className={` flex-1 min-w-[200px] flex flex-col gap-2 border-[3px] rounded-xl bg-white px-5 py-4 border-l-[${borderColor}] max-sm:my-5 max-sm:w-auto`}>
      <p className='text-base text-black'>
        {title}
      </p>
      <div className='flex gap-1'>
            <Image src={iconSrc} alt={title} width={24} height={24} />
            <p className='text-2xl font-bold'>{value}</p>
      </div>
    </div>
  )
}

export default Priceinfocard
