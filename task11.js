let liverpoolFC = {
    name: "Liverpool Football Club",
    founded: 1892,
    trophies: 47,
    getInfo: function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ": " + this[key]);
            }
        }
    }
};

// Перевірка
liverpoolFC.getInfo(); // Виводить всю інформацію про футбольний клуб

// Додаємо нову властивість до об'єкта
liverpoolFC.stadium = 'Anfield';
liverpoolFC.getInfo(); // Виводить всі властивості, включаючи щойно додану
