import express from 'express';
import { config } from './config/env.js';
import priceRoutes from './routes/priceRoutes.js';
import { connectDB } from './config/db.js'; // Импортируем подключение к базе данных

const app = express();

// Подключаемся к базе данных
connectDB();

app.use('/api/price', priceRoutes);

app.listen(config.PORT, () => {
    console.log(`Сервер запущен на http://localhost:${config.PORT}`);
});
