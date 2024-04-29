function myIsNaN(value) {
    // Перевіряємо, чи передане значення не дорівнює самому собі
    return value !== value;
}

// Перевірка
console.log(myIsNaN(NaN));  // true
console.log(myIsNaN(5));    // false
console.log(myIsNaN('abc')); // false