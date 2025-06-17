// Създаваме Map за месеците
export const MONTHS = new Map([
    ['Jan', 1],
    ['Feb', 2],
    ['Mar', 3],
    ['Apr', 4],
    ['May', 5],
    ['Jun', 6],
    ['Jul', 7],
    ['Aug', 8],
    ['Sep', 9],
    ['Sept', 9],
    ['Oct', 10],
    ['Nov', 11],
    ['Dec', 12]
]);

// Помощна функция за получаване на номер на месец
export function getMonthNumber(monthName) {
    return MONTHS.get(monthName);
}