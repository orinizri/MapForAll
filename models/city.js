import mongoose, { mongo } from 'mongoose';

const citySchema = mongoose.Schema({
    name : {
        type: String,
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
    population: {
        type: String,
        default: 0,
    }
});

const City = mongoose.model('City', citySchema);

export { City };