import { Place } from "../models/place.js"


const getAllPlaces = async (req,res) => {
    try {
        const allPlaces = await Place.find();
        res.send(allPlaces)
    } catch (e) {
        res.send({ error: e.message })
    }
}

export { getAllPlaces };