'use server'
import axios from "axios";
import * as cheerio from "cheerio";


export default async function amazonpagescraper(params: any) {
    if (!params.link) return;
    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)
    const port = 22225
    const session_id = (1000000 * Math.random() | 0)
    const options = {

        auth: {
            username: `${username}-session-${session_id}`,
            password,

        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false
    }
    try {
        const link = params.link.slice(0, params.link.indexOf('ref='))

        const response = await axios.get(link, options)
        const $ = cheerio.load(response.data)
        let data: any;


        const images =
            $('#imgBlkFront').attr('data-a-dynamic-image') ||
            $('#landingImage').attr('data-a-dynamic-image') ||
            '{}'

        const img = Object.keys(JSON.parse(images)); const title = $('#productTitle').text().trim()
        const star = params.star
        const price = Number(params.price)
        const preprice = Number(params.preprice)
        const deal = params.deal
        const offer = params.offer
        const review = Number(params.review)
        let detail: any[];
        const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';


        const tab1 = $('div.a-section.a-spacing-small.a-spacing-top-small table span')
        const tab1arr: any = [[], []]

        const tab2 = $('#featurebullets_feature_div span')
        const tab2arr: any = []

        const tab3 = $('#productDetails_techSpec_section_1')
        const tab3arr: any = [[], []]


        tab1.each((index, element) => {
            index % 2 == 0 ? tab1arr[0].push($(element).text().trim()) : tab1arr[1].push($(element).text().trim())
        })

        tab2.each((i, e) => {
            tab2arr.push($(e).text().trim())
        })

        $(tab3).find('tr').each((i, e) => {
            tab3arr[0].push($(e).find('th').text().trim())
            tab3arr[1].push($(e).find('td').text().trim())
        })

        detail = [tab1arr, tab2arr, tab3arr]



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
            isoutofstock: outOfStock,
            detail,
        }




        return data;





    } catch (error: any) {
        throw new Error(`Faild to scrap:${error.message}`)
    }

}