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
export default async function Scrapeandstore(url: string) {
   if (!url) {
      return;
   }

   try {
      
      const data = await amazonsrchscraper(url);
      console.log('flipkartsrchscraper');
      

      if (!data) {
         console.log('  data not found');
         return;
      }

      return data;
   } catch (error: any) {
      throw new Error(`Failed to create/update: ${error.message}`);
   }
}

export async function getProduct(params: any) {

   try {
      const data = await amazonpagescraper(params);
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

export async function getallproducts() {
   try {
      await connecttoDB();
      const product = await Product.find()
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
