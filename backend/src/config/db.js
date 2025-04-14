import mongoose from 'mongoose';
import { config } from './env.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Подключение к базе данных успешно!');
    } catch (err) {
        console.error('Ошибка подключения к базе данных:', err.message);
        process.exit(1);
    }
};

