'use strict';

const temp = +prompt('Будь ласка, вкажіть числове значення темеператури (без одиниць виміру)');


if(!isNaN(temp)) {
    const type = prompt('Вкажіть одиниці виміру температури, де C - Цельсія, F - Фаренгейта');
    let result = null;

    if ( type.toUpperCase() === 'C') {
        result = ('Конвертоване значення ') + ((temp * 9 / 5) + 32) + (' градусів за Фаренгейтом');
    } else if ( type.toUpperCase() === 'F' ) {
        result = ('Конвертоване значення ') + (temp - 32) * 5 / 9 + (' градусів за Цельсієм');
    }

    alert(result);
} else {
    alert('Неправильний номер!')
}




