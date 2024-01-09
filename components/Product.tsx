'use client'
import { getProduct} from "@/lib/actions";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation'
import Productpage from "./Productpage";

const Product = (params:any)=>{

    const [data , setdata]= useState()

    useEffect(()=>{
        
        const getdata = async ()=>{
            try {
            const result:any = await getProduct(params.data)            
                setdata(result)
            } catch (error)
            {
                console.error('Error fetching data from server:', error);
            }
            
        }
        getdata();
        


    },[])

   
    

    return(
        <>
        <Productpage data={data} />
        </>
    );
}
export default Product;