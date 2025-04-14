import express from 'express';
import { config } from './config/env.js';
import priceRoutes from './routes/priceRoutes.js';
import { connectDB } from './config/db.js'; // Импортируем подключение к базе данных
import cors from 'cors';

const app = express();
app.use(cors());
// Подключаемся к базе данных
connectDB();

app.use('/api/price', priceRoutes);

app.listen(config.PORT, () => {
    console.log(`Сервер запущен на http://localhost:${config.PORT}`);
});
