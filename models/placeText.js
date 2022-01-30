import mongoose from 'mongoose';

const placeTextSchema = mongoose.Schema({
    placeName : {
        type: String
    },
    scrapeDate : {
        type: String
    },
    webName: {
        type: String
    },
    text: {
        type: String
    }
})
const PlaceText = mongoose.model('PlaceText', placeTextSchema)

export { PlaceText };
