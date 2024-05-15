function findValueByKey(COMPANY_NAME, COMPANY) {
    // Перевіряємо, чи відповідає поточна компанія шуканій назві
    if (COMPANY.name === COMPANY_NAME) {
        return COMPANY;
    }

    // Перевіряємо, чи компанія має клієнтів
    if (COMPANY.clients) {
        // Перебираємо всіх клієнтів компанії
        for (let client of COMPANY.clients) {
            // Рекурсивно викликаємо функцію для кожного клієнта
            const result = findValueByKey(COMPANY_NAME, client);
            // Якщо знайдено компанію, повертаємо результат
            if (result) {
                return result;
            }
        }
    }

    // Якщо компанія не знайдена, повертаємо null
    return null;
}

// Приклад використання
const COMPANY = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

// Приклад виклику функції
const COMPANY_NAME = 'Клієнт 1.2.3';
const result = findValueByKey(COMPANY_NAME, COMPANY);
if (result) {
    console.log(`Інформація про компанію ${COMPANY_NAME}:`, result);
} else {
    console.log(`Компанія ${COMPANY_NAME} не знайдена.`);
}
