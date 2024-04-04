'use server'
import { ID, IProduct, Product } from "../model/product.model";
import amazonsrchscraper from "../scraper/amazonsrchscraper";
import { revalidatePath } from "next/cache";
import { getAveragePrice, getHighestPrice, getLowestPrice } from "../util";
import { connecttoDB } from "../mongoose";
import amazonpagescraper from "../scraper/amazonpagescraper";
import { User } from "@/types";
import { generateEmailBody, sendEmail } from "../nodemailer";
import flipkartsrchscraper from "../scraper/flipkartsrchscraper";
import filpkartpagescraper from "../scraper/filpkartpagescraper";
export default async function Scrapeandstore(url: string) {
   if (!url) {
      return;
   }

   try {
      
      const data1 = await amazonsrchscraper(url);
      //const data2 = await flipkartsrchscraper(url)

      

      const data = data1//?.concat(data2)

      if (!data) {
         console.log('data not found');
         return;
      }

      const arrayOfObjects = data.map((obj, index) => {
         return { ...obj, id: index + 1 };
     });



      return arrayOfObjects ;


   } catch (error: any) {
      throw new Error(`Failed to create/update: ${error.message}`);
   }
}

export async function getProduct(params: any) {

   try {
      console.log( 'params', params);

      let data:any;
      if (params.web=='flipkart') {
          data = await filpkartpagescraper(params);

      }
      else{
          data = await amazonpagescraper(params);

      }
      
      console.log(data);
      
      return data
   }
   catch (error) {
      console.log('error', error);

   }
}

export async function getProductbyid(params: any) {

   try {
      connecttoDB();

      const data = await amazonpagescraper(params);

      if (!data) return null;

      let product = data;

      const exitingproduct = await IProduct.findOne({ link: data.link })

      if (exitingproduct) {
         const updatedpricehistory: any = [
            ...exitingproduct.pricehistory,
            { price: data.price }
         ]

         product = {
            ...data,
            pricehistory: updatedpricehistory,
            low: getLowestPrice(updatedpricehistory),
            high: getHighestPrice(updatedpricehistory),
            avg: getAveragePrice(updatedpricehistory)
         }
      }

      const newProduct = await IProduct.findOneAndUpdate({ link: data.link },
         product, { upsert: true, new: true }
      )

      return newProduct


   } catch (error) {
      console.log('error', error);

   }
}

export async function getallproducts(email:string) {
   try {
      await connecttoDB();
      console.log("user.email",email);
      
      const product = await IProduct.find({'email':email})
      return product;

   } catch (error) {
      console.log(error);

   }
}

export async function Track(params: any, userEmail: string) {
   try {

      const db = await connecttoDB()

      console.log('in track');


      var product = await IProduct.findOne({ link: params.link })

      console.log('product',product);

      if (!product) {
          product = await IProduct.findOneAndUpdate({ link: params.link },
            params, { upsert: true, new: true }
         )

      }
      console.log('new product',product);

      const isuser = product.user.some((user: User) => user.email === userEmail)


      if (!isuser) {
         product.user.push({
            email: userEmail
         })


         await product.save();

         const emailContent = await generateEmailBody(product, 'WELCOME')
         console.log(emailContent);

         await sendEmail(emailContent, [userEmail])
      }
      // 

   } catch (error) {
      console.log(error);

   }

}
