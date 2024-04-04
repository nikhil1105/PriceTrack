'use client'
import Scrapeandstore from "@/lib/actions";
import { useState,FormEvent } from "react";
import { useRouter } from 'next/navigation'

function Searchbar() {
    const [keyword, setKeyword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handlesubmit = async (event : FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setLoading(true)
            router.push(`/Searchproduct/${keyword.replaceAll(" ","+")}`)
        setLoading(false)
    }

    if (loading==true) {
        return (
            <div className="h-[100vh] flex justify-center items-center" >
                <div >
                    loading
                </div>
            </div>
        )
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
    disabled={keyword===""}
    className=' bg-slate-400 font-bold text-white p-3  sm:w-[120px] ml-5 sm:mx-5 rounded-lg text-[20px]'
    
    >{loading?'loading...':'Search'}</button>
    
          
    </form>
    )
}

export default Searchbar;