// Функция для генерации случайного целого числа от min до max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации пароля
function generatePassword() {
    const length = getRandomInt( 5,   6); // Длина пароля от 3 до 6 цифр
    let password = '';

    // Генерация пароля
    for (let i = 0; i < length; i++) {
        password += getRandomInt(0, 9);  // Добавляем случайную цифру от 0 до 9
    }

    return password;
}

// Получаем ссылку на кнопку и контейнер для пароля
const generateButton = document.getElementById('generate-btn');
const passwordContainer = document.getElementById('password-container');

// Добавляем обработчик события для кнопки
generateButton.addEventListener('click', function() {
    const newPassword = generatePassword(); // Генерируем новый пароль
    passwordContainer.textContent = newPassword; // Отображаем пароль на странице
});
