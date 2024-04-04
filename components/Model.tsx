'use client'
import React, { FormEvent, Fragment } from 'react'
import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Track } from '@/lib/actions'
import { useSession } from 'next-auth/react'


const Model = ({ data }: { data: any }) => {
    let [isOpen, setIsOpen] = useState(false)
    let [issubmit, setIssubmit] = useState(false)
    let [email, setemail] = useState('')
    

    const handlesubmit =async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIssubmit(true)
        await Track(data,email)
        setIssubmit(false)
        setemail('')
        closemodel()
        
    }

    const openmodel = () => setIsOpen(true)
    const closemodel = () => setIsOpen(false)

    return (
        
        <>
            <button onClick={openmodel} className=" w-[50%] bg-black mx-auto flex items-center justify-center gap-3 min-w-[200px] py-4 px-4 hover:bg-opacity-70 rounded-[30px] text-white text-lg font-semibold " >
                Track
            </button>

            <Transition appear show={isOpen} as={Fragment} >

            <Dialog as='div'  onClose={closemodel} className='fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60'>
               <div className='min-h-screen px-4 text-center'>
                    <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
                        <Dialog.Overlay className='fixed inset-0' />
                    </Transition.Child>
                    <span className='inline-block h-screen align-middle' aria-hidden={true}/>

                    
                    <Transition.Child
                    as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'
                    >
                        <div className='p-6  bg-white inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl' >
                            <div className='flex flex-col' >
                                <div className='flex justify-between' >
                                    <div className='p-3 border border-gray-200 rounded-10' >
                                        <Image
                                        src='/assets/icons/logo.svg'
                                        alt='logo'
                                        width={28}
                                        height={28}
                                        
                                        />
                                    </div>
                                    <Image
                                        src='/assets/icons/x-close.svg'
                                        alt='close'
                                        width={24}
                                        height={24}
                                        className=' cursor-pointer'
                                        onClick={closemodel}
                                        />
                                </div>
                                    <h4 className='text-black text-lg leading-[24px] font-semibold mt-4'>
                                    Stay updated with product pricing alerts right in your inbox!
                                    </h4>
                                    <p className='text-sm text-gray-600 mt-2'>
                                    Never miss a bargain again with our timely alerts!
                                    </p>

                            </div>
                            <form  className='flex flex-col my-5' onSubmit={handlesubmit}>
                                <label htmlFor="email" className='text-sm font-medium text-gray-700'>
                                Email address
                                </label>
                                <div className='px-5 py-3 mt-3 flex items-center gap-2 border border-gray-300 rounded-[27px]'>
                                <Image
                                        src='/assets/icons/mail.svg'
                                        alt='mail'
                                        width={18}
                                        height={18}
                                        
                                        />
                                <input required type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="PriceTrack@gmail.com" id="email" className='flex-1 pl-1 border-none text-gray-500 text-base focus:outline-none border border-gray-300 rounded-[27px] shadow-xs' />

                                </div>
                                <button type='submit' className=' px-5 py-3 text-white text-base font-semibold border border-black bg-black rounded-lg mt-8'>
                                    {issubmit?'Submitting...':'Track'}
                                </button>
                            </form>
                        </div>
                    </Transition.Child>
               </div>
            </Dialog>
            </Transition> 
        </>
    )
}

export default Model
