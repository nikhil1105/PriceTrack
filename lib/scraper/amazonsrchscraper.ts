'use server'
import axios from "axios";
import * as cheerio from "cheerio";

export default async function amazonsrchscraper(url: string) {
    if (!url) return;
    let mainurl =decodeURIComponent(url)
    url = 'https://www.amazon.in/s?k='+(mainurl.slice(-1)=='+'?mainurl.slice(0,-1):mainurl)

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
        let dataarr: any[] =[];
        let data :any[];



        const response = await axios.get(url, options)
        const $ = cheerio.load(response.data)



        const mainproduct = $('[data-component-type="s-search-result"]')

        mainproduct.each((index, element) => {
            link = $(element).find('[data-component-type="s-product-image"] a')
            img = $(element).find('[data-component-type="s-search-result"] [data-component-type="s-product-image"] a div img')
            title = $(element).find('[data-component-type="s-search-result"] [data-cy="title-recipe"] h2 a span')
            star = $(element).find('[data-component-type="s-search-result"] .a-icon-alt')
            price = $(element).find('[data-component-type="s-search-result"] span.a-price span span.a-price-whole')
            preprice = $(element).find('[data-component-type="s-search-result"] span:contains("M.R.P:") + span.a-price span:first-child')
            deal = $(element).find('[data-component-type="s-search-result"] span.a-letter-space + span:contains("% off")')
            review = $(element).find('[data-component-type="s-search-result"] span[aria-label] + span[aria-label] span')
            offer = $(element).find('[data-component-type="s-search-result"] .a-badge-text')

            mainarr[0][index] = 'https://www.amazon.in' + link.attr('href')
            mainarr[1][index] = img.attr('src')
            mainarr[2][index] = title.text()
            mainarr[3][index] = star.text().substring(0, 3).replace(/[^0-9.]/g, '')
            mainarr[5][index] = preprice.text().replace(/,|₹/g,'')
            mainarr[4][index] = price.text().replace(',','')
            mainarr[6][index] = deal.text()
            mainarr[7][index] = review.text().replace(',','')
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
                review:Number( mainarr[7][i]),
                offer: mainarr[8][i],
                outofstock: false,
                web:'Amazon'
                
            }

        }


        data = dataarr.filter((e) =>
            !(e.link === '') &&
            !(e.img === '') &&
            !(e.title === '') &&
            !(e.price==='')&&
            !(e.price===0)
            
        )        

        
        
        return data;



    } catch (error: any) {
        
        throw new Error(`Faild to scrap:${error.message}`)
    }
}