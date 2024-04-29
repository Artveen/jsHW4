function pad(str, symbol, count, isStart) {
    // Перевіряємо, чи потрібно додавати символи до початку чи кінця рядка
    if (isStart) {
        // Додаємо символи до початку рядка
        return symbol.repeat(Math.max(0, count - str.length)) + str;
    } else {
        // Додаємо символи до кінця рядка
        return str + symbol.repeat(Math.max(0, count - str.length));
    }
}

// Перевірка
console.log(pad('qwerty', '+', 6, true));  // "+++qwerty"
console.log(pad('qwerty', '+', 6, false)); // "qwerty+++"
