import dotenv from 'dotenv';
dotenv.config();

const { MONGOOSE_URI } = process.env;

export { MONGOOSE_URI };