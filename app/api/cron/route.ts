import { NextResponse } from "next/server";

import { connecttoDB } from "@/lib/mongoose";
import { IProduct } from "@/lib/model/product.model";
import amazonpagescraper from "@/lib/scraper/amazonpagescraper";
import { generateEmailBody, sendEmail } from "@/lib/nodemailer";
import { getAveragePrice, getEmailNotifType, getHighestPrice, getLowestPrice } from "@/lib/util";

export const maxDuration = 10; // This function can run for a maximum of 300 seconds
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
    // try {
    //     connecttoDB();

    //     const products = await IProduct.find({});

    //     if (!products) throw new Error("No product fetched");

    //     // ======================== 1 SCRAPE LATEST PRODUCT DETAILS & UPDATE DB
    //     const updatedProducts = await Promise.all(
    //         products.map(async (currentProduct) => {
    //             // Scrape product
    //             const scrapedProduct = await amazonpagescraper(currentProduct);

    //             if (!scrapedProduct) return;

    //             const updatedpricehistory = [
    //                 ...currentProduct.pricehistory,
    //                 { price: scrapedProduct.price }
    //             ]

    //             const product = {
    //                 ...scrapedProduct,
    //                 pricehistory: updatedpricehistory,
    //                 low: getLowestPrice(updatedpricehistory),
    //                 high: getHighestPrice(updatedpricehistory),
    //                 avg: getAveragePrice(updatedpricehistory)
    //             }

    //             // Update Products in DB
    //             const updatedProduct = await IProduct.findOneAndUpdate(
    //                 {
    //                     url: product.url,
    //                 },
    //                 product
    //             );

    //             // ======================== 2 CHECK EACH PRODUCT'S STATUS & SEND EMAIL ACCORDINGLY
    //             const emailNotifType = getEmailNotifType(
    //                 scrapedProduct,
    //                 currentProduct
    //             );

    //             if (emailNotifType && updatedProduct.users.length > 0) {
    //                 const productInfo = {
    //                     title: updatedProduct.title,
    //                     url: updatedProduct.url,
    //                 };
    //                 // Construct emailContent
    //                 const emailContent = await generateEmailBody(productInfo, emailNotifType);
    //                 // Get array of user emails
    //                 const userEmails = updatedProduct.users.map((user: any) => user.email);
    //                 // Send email notification
    //                 await sendEmail(emailContent, userEmails);
    //             }

    //             return updatedProduct;
    //         })
    //     );

    //     return NextResponse.json({
    //         message: "Ok",
    //         data: updatedProducts,
    //     });
    // } catch (error: any) {
    //     throw new Error(`Failed to get all products: ${error.message}`);
    // }
}