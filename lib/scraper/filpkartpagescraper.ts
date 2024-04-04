'use server'
import axios from "axios";
import * as cheerio from "cheerio";
const sdk = require('api')('@smartproxy/v1.2#crnv82sltifv7h9');


export default async function filpkartpagescraper(params: any) {
    if (!params.link) return;
    let resdata : any;

    console.log(params);
    

    try {
        const link = params.link.slice(0, params.link.indexOf('ref='))

        console.log('param',params);
        

        sdk.auth('U0000158347', 'PW1b26dc52b2d08a529495276dbd7e8fa7b');
        await sdk.postV2ScrapeUniversal({
            target: 'universal',
            link,
            headless: 'html',
            http_method: 'get',
            geo: 'India'
        }, { universal: '' })
            .then((res: any) => resdata = res.data.results[0].content)
            .catch((err: any) => console.error(err));

        const $ = cheerio.load(resdata)
        let data: any;


        const images = ''
            
            

        const img = ''; 
        const title = $('span.css-1qaijid').text().trim()
        const star = params.star
        const price = Number(params.price)
        const preprice = Number(params.preprice)
        const deal = params.deal
        const offer = params.offer
        const review = Number(params.review)
        let detail: any[];


        detail = [[],[],[]]



        data = {
            link,
            title,
            img: img[0],
            star,
            price,
            preprice,
            pricehistory: [],
            low: price || preprice,
            high: preprice || price,
            avg: price || preprice,
            deal,
            review,
            offer,
            isoutofstock: '',
            detail,
        }




        return data;





    } catch (error: any) {
        throw new Error(`Faild to scrap:${error.message}`)
    }

}