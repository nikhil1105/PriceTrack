'use server'
import fet from 'node-fetch';
import { parse } from 'node-html-parser';

import axios from "axios";
import * as cheerio from "cheerio";
const sdk = require('api')('@smartproxy/v1.2#crnv82sltifv7h9');
import { HttpsProxyAgent } from 'https-proxy-agent'



export default async function flipkartsrchscraper(url: string) {
    if (!url) return;

    let mainurl = decodeURIComponent(url)
    console.log(mainurl);

    url = 'https://www.flipkart.com/search?q=' + (mainurl.slice(-1) == '+' ? mainurl.slice(0, -1) : mainurl)


    try {
        let link: any = ''

        let img: any = ''

        let title: any = ''

        let star: any = ''

        let price: any = ''

        let preprice: any = ''

        let deal: any = ''

        let review: any = ''

        let offer: any = ''

        const mainarr: any[] = [[], [], [], [], [], [], [], [], []]
        let dataarr: any[] = [];
        let data: any[] = [];
        let resdata: any;



        sdk.auth('U0000158347', 'PW1b26dc52b2d08a529495276dbd7e8fa7b');
        await sdk.postV2ScrapeUniversal({
            target: 'universal',
            url,
            headless: 'html',
            http_method: 'get',
            geo: 'India'
        }, { universal: '' })
            .then((res: any) => resdata = res.data.results[0].content)
            .catch((err: any) => console.error(err));



        const $ = cheerio.load(resdata)






        //console.log('web scr',req?.body);


        // const res = require('request-promise')({
        //     url: 'https://api.brightdata.com/dca/get\_result?response\_id=ID\_RESPONSE',
        //     headers: { 'Authorization': 'Bearer 57878723-7d78-4795-a896-937ca12d1af5 ' },
        // }).then(function (data: any) { console.log(data); },
        //     function (err: any) { console.error(err); });


        //https://www.flipkart.com/search?q=tablet&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off

        //https://www.flipkart.com/search?q=car&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off

        //https://www.flipkart.com/search?q=phone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off

        //https://www.flipkart.com/search?q=book&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off

        // console.log(response.data);


        const mainproduct = $('[data-id]')


        mainproduct.each((index, element) => {
            link = $(element).find('a')
            img = $(element).find('img')
            title = $(element).find('div._4rR01T').length == 0 ? $(element).find('a[title]') : $(element).find('div._4rR01T')
            star = $(element).find('span[id] div ')
            price = $(element).find('div._3I9_wc').prev() || $(element).find('div.css-1rynq56')
            preprice = $(element).find('div._3I9_wc')
            deal = $(element).find(' span:contains("% off")')
            review = $(element).find(' span._2_R_DZ ')
            offer = $(element).find('div._3xFhiH')

            mainarr[0][index] = 'https://www.flipkart.com' + link.attr('href')
            mainarr[1][index] = img.attr('src')
            mainarr[2][index] = title.text()
            mainarr[3][index] = star.text().substring(0, 3).replace(/[^0-9.]/g, '')
            mainarr[5][index] = preprice.text().replace(/,|₹/g, '')
            mainarr[4][index] = price.text().replace(/,|₹/g, '')
            mainarr[6][index] = deal.text()
            mainarr[7][index] = review.text().replace(/[^\d]/g, "")
            mainarr[8][index] = offer.text()

        })


        for (let i = 0; i < mainproduct.length; i++) {
            dataarr[i] = {
                link: mainarr[0][i],
                img: mainarr[1][i],
                title: mainarr[2][i],
                star: parseFloat(mainarr[3][i]),
                price: Number(mainarr[4][i]),
                preprice: Number(mainarr[5][i]),
                deal: mainarr[6][i],
                review: Number(mainarr[7][i]),
                offer: mainarr[8][i],
                outofstock: false,
                web: 'flipkart'

            }

        }


        data = dataarr.filter((e) =>
            !(e.link === '') &&
            !(e.img === '') &&
            !(e.title === '') &&
            !(e.price === '') &&
            !(e.price === 0)

        )




        return data;



    } catch (error: any) {

        throw new Error(`Faild to scrap:${error.message} `)
    }
}