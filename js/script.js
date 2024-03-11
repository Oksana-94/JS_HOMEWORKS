'use strict';

// 1
const a = 2;
const b = 6;
a === 0 ? console.log('Вірно') : console.log('Неправильно');

// 2
a > 0 ? console.log('Вірно') : console.log('Невірно');

// 3
a < 0 ? console.log('Вірно') : console.log('Невірно');

// 4
a >= 0 ? console.log('Вірно') : console.log('Неправильно');

// 5
a <= 0 ? console.log('Вірно') : console.log('Неправильно');

// 6
a !== 0 ? console.log('Вірно') : console.log('Невірно');

// 7
a === 'test' ? console.log('Вірно') : console.log('Неправильно');

// 8
a == '1' ? console.log('Вірно') : console.log('Невірно');

// 9
a > 0 && a < 5 ? console.log('Вірно') : console.log('Невірно');

// 10
a === 0 || a === 2 ? console.log(`${a + 7}`) : console.log(`${a / 10}`);

// 11
a <= 1 && b >=3 ? console.log(`${a + b}`) : console.log(`${a - b}`);

// 12
a > 2 && a < 11 || b >= 6 && b < 14 ? console.log('Вірно') : console.log('Невірно');

// 13
const num = 1;
let result;

switch(num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'літо';
        break;
    case 4:
        result = 'осінь';
        break;
}

console.log(result);