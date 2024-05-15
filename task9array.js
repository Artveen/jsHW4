function myBlend(arr) {
    var currentIndex = arr.length, temporaryValue, randomIndex;

    // Поки не закінчаться елементи для перемішування
    while (0 !== currentIndex) {

        // Вибираємо випадковий індекс
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Міняємо місцями поточний елемент з випадковим
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    // Масив вже перемішаний, не потрібно повертати його
}

// Приклад використання
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Початковий масив:", arr);

// Виклик функції для перемішування масиву
myBlend(arr);
console.log("Після перемішування:", arr);о