let link = ''

let img = ''

let title = ''

let star = ''

let price = ''

let preprice = ''

let deal = ''

let review = ''

let offer = ''

const mainarr = [[], [], [], [], [], [], [], [], []]
let dataarr= [];
let data = [];
let resdata ;
        
         const mainproduct = $('._1AtVbE div[data-tkid] ')
         console.log(mainproduct.length);
         

        mainproduct.map((index, element) => {
            link = $(element).find('a')
            img = $(element).find('img')
            title = $(element).find('div._4rR01T').length==0?$(element).find('a[title]'):$(element).find('div._4rR01T')
            star = $(element).find('span[id] div ')
            price = $(element).find('div._30jeq3')
            preprice = $(element).find( 'div._3I9_wc')
            deal = $(element).find(' span:contains("% off")')
            review = $(element).find(' span._2_R_DZ ')
            offer = $(element).find('div._3xFhiH')           
             
            mainarr[0][index] = 'https://www.flipkart.com' + link.attr('href')
            mainarr[1][index] = img.attr('src')
            mainarr[2][index] = title.text()
            mainarr[3][index] = star.text().substring(0, 3)
            mainarr[5][index] = preprice.text().replace(/,|₹/g,'')
            mainarr[4][index] = price.text().replace(',','')
            mainarr[6][index] = deal.text()
            mainarr[7][index] = review.text().replace(',','')
            mainarr[8][index] = offer.text()

        })
        

        for (let i = 0; i < mainproduct.length; i++) {
            dataarr[i] = {
                id:i,
                link: mainarr[0][i],
                img: mainarr[1][i],
                title: mainarr[2][i],
                star: mainarr[3][i],
                price: Number(mainarr[4][i]),
                preprice: Number(mainarr[5][i]),
                deal: mainarr[6][i],
                review:Number( mainarr[7][i]),
                offer: mainarr[8][i],
                outofstock: false,
                web:'flipkart'

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

return {data}