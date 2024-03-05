import { IProduct, Product } from "@/lib/model/product.model";
import { connecttoDB } from "@/lib/mongoose";
import amazonpagescraper from "@/lib/scraper/amazonpagescraper";
import { getAveragePrice, getEmailNotifType, getHighestPrice, getLowestPrice } from "@/lib/util";

export default async function GET() {
    // try {
    //     connecttoDB()

    //     const product = await Product.find({})

    //     if (!product) {
    //         throw new Error('no product found')
    //     }

    //     const updateProduct = await Promise.all(product.map(async (currentProduct) => {
    //         const scrapProduct = await amazonpagescraper(currentProduct.link)

    //         if (!scrapProduct) {
    //             throw new Error('no product found')
    //         }

    //         const updatedpricehistory = [
    //             ...currentProduct.pricehistory,
    //             { price: scrapProduct.price }
    //         ]

    //         const product = {
    //             ...scrapProduct,
    //             pricehistory: updatedpricehistory,
    //             low: getLowestPrice(updatedpricehistory),
    //             high: getHighestPrice(updatedpricehistory),
    //             avg: getAveragePrice(updatedpricehistory)
    //         }

    //         const updatedProduct = await IProduct.findOneAndUpdate({ link: scrapProduct.link },
    //             product
    //         )

    //         const emailNotifType = getEmailNotifType(
    //             scrapProduct, currentProduct
    //         )
                
    //         if(emailNotifType && updatedProduct.users.length > 0)
    //         {
    //             return
                
    //         }

    //         return 

    //     }))

    // } catch (error) {
    //     console.log('error in api', error);

    // }
}