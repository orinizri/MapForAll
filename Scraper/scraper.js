import puppeteer from 'puppeteer';
import { PlaceText } from '../models/placeText.js';



const scrapeWeb = async (name, url) => {
    const scraped = [];
    const browser = await puppeteer.launch({ headless: true, defaultViewport:false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('.mw-parser-output > p');
    const webName = await page.title();
    console.log(webName);
    const innerPage = await page.$$('.mw-parser-output > p');
    for (const prgh of innerPage) {
        const singleP = await page.evaluate(el => el.textContent, prgh);
            scraped.push(singleP);
    }
    const webObject = {
        placeName : name.toString(),
        scrapeDate : Date.now().toString(),
        webName : webName.toString(), 
        text : scraped.toString()
    };
    console.log(webObject)
    const newWeb = new PlaceText(webObject);
    await newWeb.save();
    await browser.close();
    return "success"
};

export { scrapeWeb };