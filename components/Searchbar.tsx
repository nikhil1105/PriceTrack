'use client'
import Scrapeandstore from "@/lib/actions";
import { useState,FormEvent } from "react";
import { useRouter } from 'next/navigation'

interface Props {
    lodading:(e:boolean)=>void
}

function Searchbar(props:Props) {
    const [keyword, setKeyword] = useState('')
    const router = useRouter()
    const [loading, setLoading] = useState(false)


    const handlesubmit = async (event : FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        props.lodading(true)
        setLoading(true)
            router.push(`/Searchproduct/${keyword.replaceAll(" ","+")}`)
        setLoading(false)
    }

    
    return(
        <form
        onSubmit={handlesubmit}
        className='sm:text-[20px] w-full flex '>
    <input
    value={keyword}
    onChange={(e)=>(setKeyword(e.target.value))}
     className='border-gray-300 border rounded-lg p-4 sm:h-[50px] shadow-x5 focus:outline-none flex-1 w-full sm:w-min-[200px]'
    type="text" placeholder='Search Your Product'
    />
    <button type="submit"
    onClick={()=>setLoading(true)}
    disabled={keyword===""}
    className=' bg-slate-400 font-bold text-white p-3  sm:w-[120px] ml-5 sm:mx-5 rounded-lg text-[20px]'
    
    >{loading&&'loading...'}{!loading&&'Search'}</button>
    </form>
    )
}

export default Searchbar;