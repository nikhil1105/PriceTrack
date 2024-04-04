'use server'
import { connecttoDB } from "@/lib/mongoose";
import { IProduct } from "@/lib/model/product.model";

export default async function cartdata(e:any) {

    let data;
    
    try {

        connecttoDB()

     data = await IProduct.find({"user.email":'xaviwak357@sinyago.com'});

    console.log(data);
 

        
    } catch (error) {
        console.log('error',error);
        
    }

    return data

}
