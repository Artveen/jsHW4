function checkProbabilityTheory(count) {
    let generatedCount = 0;
    let evenCount = 0;

    // Генеруємо випадкові числа та рахуємо кількість парних чисел
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        generatedCount++;
        if (randomNumber % 2 === 0) {
            evenCount++;
        }
    }

    // Рахуємо кількість непарних чисел
    const oddCount = generatedCount - evenCount;

    // Обчислюємо відсоток парних чисел
    const evenPercentage = (evenCount / generatedCount) * 100;
    const oddPercentage = (oddCount / generatedCount) * 100;

    // Виводимо інформацію
    console.log("Кількість згенерованих чисел:", generatedCount);
    console.log("Парних чисел:", evenCount);
    console.log("Непарних чисел:", oddCount);
    console.log("Відсоток парних до непарних:", evenPercentage.toFixed(2) + "% : " + oddPercentage.toFixed(2) + "%");
}

// Перевірка
checkProbabilityTheory(1000);
