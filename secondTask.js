// Запитати користувача про введення року
let year = prompt("Введіть рік:");

// Перевірка чи введене значення є числом і не від'ємним
if (!isNaN(year) && parseInt(year) >= 0) {
    // Перевірка останньої цифри року для визначення правильного слова
    let lastDigit = parseInt(year) % 10;
    let lastTwoDigits = parseInt(year) % 100;

    if ((lastTwoDigits >= 11 && lastTwoDigits <= 14) || (lastDigit === 0) || (lastDigit >= 5 && lastDigit <= 9)) {
        console.log(year + " років |");
    } else if (lastDigit === 1) {
        console.log(year + " рік |");
    } else {
        console.log(year + " роки |");
    }
} else {
    console.log("Введено некоректне значення. Будь ласка, введіть додатнє число.");
}

