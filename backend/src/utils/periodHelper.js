export function getDateRangeFromPeriod(period) {
    const now = new Date();
    let from;

    switch (period) {
        case 'day':
            from = new Date(now);
            from.setDate(from.getDate() - 1);
            break;
        case 'week':
            from = new Date(now);
            from.setDate(from.getDate() - 7);
            break;
        case 'month':
            from = new Date(now);
            from.setMonth(from.getMonth() - 1);
            break;
        case 'year':
            from = new Date(now);
            from.setFullYear(from.getFullYear() - 1);
            break;
        default:
            throw new Error('Недопустимый период');
    }

    return { from, to: now };
}

// Функция для парсинга кастомных дат
export function parseDate(dateString) {
    const parsedDate = new Date(dateString);
    if (isNaN(parsedDate)) {
        throw new Error('Неверный формат даты');
    }
    return parsedDate;
}
