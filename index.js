import express from 'express';
import mongoose from 'mongoose';
import { MONGOOSE_URI, CorsConfig } from './config.js'
import { monitorScraping } from './Scraper/monitor.js';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { placesRouter } from './routes/routes.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

app.use(cors(CorsConfig))
app.use(express.json());


const publicPath = path.join(__dirname, '../client/build');

app.use(express.static(publicPath));

// const placesRouter = express.Router();
app.use('/', placesRouter)
// placesRouter.get('/places' , (req,res) => {
//     try {
//         console.log("arrived")
//         res.send("tudu BOM")
//     } catch (e) {
//         res.send({ error: e.message })
//     }
// })
// read hard coded, fetch URL and scrape. 
// create function to map urls and scrape them into the data base
// monitor if text already exist before scraping

// app.get('/', (req, res) => {
//     res.send('Welcome to homepage')
// })

mongoose.connect(MONGOOSE_URI, () => {
    console.log(`Connected to ${MONGOOSE_URI}`)
});

const port = process.env.PORT || 8080
app.listen(port, ()=> {
    console.log('Wazzzaaap');
});

const PlacesData = fs.readFileSync('./DB/places.json', 'utf8')
const PlacesObj = JSON.parse(PlacesData)
// console.log(PlacesObj);



app.post('/', async (req,res) => {
    try {
        monitorScraping(PlacesObj);
        // const { webName } = req.params;
        // const isAvailable = PlaceText.find({ webName })
        // res.send(isAvailable)
        // if (!isAvailable) {
        //     const scrapedWebText = await scrapeWeb()
        //     console.log(typeof scrapedWebText)
        //     const newWeb = new PlaceText(scrapedWebText);
        //     await newWeb.save()
        //     res.send(newWeb)
        // } else {
        //     res.send("place Text already exists")
        // }
    } catch (e) {
        res.send({nooooo : e.message})
    }
})

export { app };