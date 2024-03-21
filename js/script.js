'use strict';

const num1 = +prompt('Введіть число');
const num2 = +prompt('Введіть ступінь, до якого це число необхідно піднести');

const toExponentiation = function (number, degree = 1) {

    if (isNaN(number) || isNaN(degree)) return 'Помилка';

    return (number ** degree);
}

alert(toExponentiation(num1, num2));