import dotenv from 'dotenv';
dotenv.config();

export const config = {
    COINGECKO_API: process.env.COINGECKO_API,
    PORT: process.env.PORT || 3001,
    MONGODB_URI: process.env.MONGODB_URI,
};
