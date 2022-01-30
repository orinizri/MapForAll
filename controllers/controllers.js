import { Place } from "../models/place.js";
import { PlaceText } from "../models/placeText.js";

const getPlaceInfo = async (req, res) => {
    try {
        const { name } = req.params;
        const allPlacesText = await PlaceText.find({ "placeName": { "$regex" : `${name}` } });
        res.send(allPlacesText)
    } catch (e) {
        res.send({ error: e.message })
    }
}
const getAllPlaces = async (req, res) => {
    try {
        const allPlaces = await Place.find();
        res.send(allPlaces)
    } catch (e) {
        res.send({ error: e.message })
    }
}

export { getAllPlaces, getPlaceInfo };