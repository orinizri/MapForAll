import { scrapeWeb } from './scraper.js';




// to do : compare now date and place's date before scraping
const monitorScraping = async (placesArray) => {
    try {
        // console.log(placesArray[0].name + 0, placesArray[0].urls[0].link)
        // const scrapedWebText = await scrapeWeb(placesArray[0].name + 0, placesArray[0].urls[0].link)
        // console.log(scrapedWebText)
        placesArray.map( async (place) => {
            for (let i = 0 ; i< place.urls.length ; i++ ) {
                const scrapedWebText = await scrapeWeb(place.name + i , place.urls[i].link)
                console.log(scrapedWebText)
            }
        })
    } catch (e) {
        throw new Error(e)
    }

}


export { monitorScraping };

