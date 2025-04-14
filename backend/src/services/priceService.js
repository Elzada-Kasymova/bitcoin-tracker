import fetch from 'node-fetch';
import { config } from '../config/env.js';
import { getDateRangeFromPeriod, parseDate } from '../utils/periodHelper.js';
import Price from '../models/Price.js'; // Импортируем модель

// Получаем текущую цену и сохраняем в базу данных
export async function fetchCurrentPrice() {
    const url = `${config.COINGECKO_API}/simple/price?ids=bitcoin&vs_currencies=usd,eur,gbp`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data = await response.json();
    const currentPrice = {
        time: new Date().toISOString(),
        usd: data.bitcoin.usd,
        eur: data.bitcoin.eur,
        gbp: data.bitcoin.gbp,
    };

    // Сохраняем текущую цену в базу данных
    const price = new Price(currentPrice);
    await price.save();

    return currentPrice;
}

// Получаем исторические данные и сохраняем в базу
export async function fetchHistoricalPrices(period, from, to) {
    let startDate, endDate;

    if (period === 'custom') {
        startDate = parseDate(from);
        endDate = parseDate(to);
    } else {
        const dateRange = getDateRangeFromPeriod(period);
        startDate = dateRange.from;
        endDate = dateRange.to;
    }

    const fromUnix = Math.floor(startDate.getTime() / 1000);
    const toUnix = Math.floor(endDate.getTime() / 1000);

    const url = `${config.COINGECKO_API}/coins/bitcoin/market_chart/range?vs_currency=usd&from=${fromUnix}&to=${toUnix}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
    }

    const data = await response.json();

    // Сохраняем полученные данные в базу данных
    const prices = data.prices.map(([timestamp, price]) => ({
        time: new Date(timestamp).toISOString(),
        usd: price,
        eur: price * 0.85,  // Примерная конвертация для EUR, можно добавить точные данные для других валют
        gbp: price * 0.75,  // Примерная конвертация для GBP
    }));

    await Price.insertMany(prices); // Сохраняем все цены

    return {
        prices: prices,
    };
}
