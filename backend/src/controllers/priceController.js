import { fetchCurrentPrice, fetchHistoricalPrices } from '../services/priceService.js';

export async function getCurrentPrice(req, res) {
    try {
        const data = await fetchCurrentPrice();
        res.json(data);
    } catch {
        res.status(500).json({ error: 'Ошибка получения текущей цены' });
    }
}

export async function getHistoricalPrices(req, res) {
    const { period, from, to } = req.query;

    try {
        let data;

        // Если есть пользовательские даты, используем их
        if (from && to) {
            data = await fetchHistoricalPrices('custom', from, to);
        } else {
            // Иначе фильтруем по стандартному периоду
            data = await fetchHistoricalPrices(period);
        }

        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Ошибка получения исторических данных' });
    }
}
