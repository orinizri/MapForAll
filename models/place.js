import mongoose from 'mongoose';

const URLSchema = mongoose.Schema({
    link : {
        type: String,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now
    },
    scraping : {
        type: [String],
        required: false
    }
});

const placeSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    city : {
        type: String,
        required: true,    
    },
    religions : {
        type: [String],
        required: true,
    },
    coordinates : {
        type: [Number],
        required: true,
        validator: function (value) {
            if (value.length === 2) {
                return value;
            }
        }
    },
    urls : {
        type: [URLSchema],
        required: true
    },
    images : {
        type: [String],
        default: []
    }
});

const Place = mongoose.model('Place', placeSchema);

export { Place };