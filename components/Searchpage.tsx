'use client'
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { createData } from "../lib/redux/slice";
import { useDispatch } from "react-redux";

const Searchpage = (params: any) => {

    const dataarr = params.id
    const dispatch = useDispatch()
    console.log(dataarr);
    

    useEffect(() => {
        dispatch(createData(dataarr))
    }, [])



    return (
        <div className="flex flex-col ">
            {
                dataarr?.map((e: any) => (
                    <Link href={`/IProducts/${e.id}`}
                        className="flex justify-start m-2"
                        key={e.id}
                    >
                        <div key={e.id} className=" hover:bg-slate-200 border-slate-200 my-4 w-full  py-4 border rounded-lg  flex flex-row items-center  justify-items-start ">
                            <div className=" flex items-center mx-8 rounded-xl ">
                                <Image src={e.img} alt={e.title} width={200} height={250} className=" object-contain max-h-[250px] " />
                            </div>
                            <div className=" text-black text-[20px] font-bold m-4 ">
                                <div className="text-[24px] text-violet-900 py-1">{e.web}</div>
                                <p className="py-2 max-sm:text-[12px] ">{e.title}</p>
                                <div className="flex flex-wrap">
                                <div className="flex items-center  gap-2 px-3 py-2 bg-[#FBF3EA] rounded-[27px]">
                                    <Image src='/assets/icons/star.svg' alt="" width={16} height={16} />
                                    <p className="text-sm max-sm:text-[12px] text-[#D48D3B] font-semibold">{e.star}</p>
                                </div>                          <div className="flex items-center gap-2 px-3 py-2 bg-white-200 rounded-[27px]">
                                    <Image src='/assets/icons/comment.svg' alt="" width={16} height={16} />
                                    <p className="text-sm max-sm:text-[12px] font-semibold">
                                        {e.review} Reviews
                                    </p>

                                </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                    <p className=" text-[34px] max-sm:text-[18px] text-black font-bold ">
                                        ₹ {e.price}
                                    </p>
                                    <p className=" text-[21px] max-sm:text-[12px] text-black opacity-50 line-through font-bold ">
                                        ₹ {e.preprice}
                                    </p>
                                </div>                          
                                <span className=" text-red-600 max-sm:text-[12px]  m-1 px-2 py-[2px]">{e.offer}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}
export default Searchpage;