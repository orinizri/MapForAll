import dotenv from 'dotenv';
dotenv.config();

const { MONGOOSE_URI } = process.env;

const CorsConfig = {
    origin:["http://localhost:3000", "https://localhost:3000"] // "https://plot-in-short.herokuapp.com" , "http://plot-in-short.herokuapp.com"
}

export { MONGOOSE_URI, CorsConfig };
