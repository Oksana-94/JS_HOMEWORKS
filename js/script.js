'use strict';

const num = +prompt('Введіть число');

switch (true) {
    case num === 0:
        alert(`Вам ${num} років.`);
        break;
    case num === 1 || num === 21 || num === 31:
        alert(`Вам ${num} рік.`);
        break;
    case num >= 2 && num <= 4 || num >= 22 && num <= 24 || num >= 32 && num <= 34:
        alert(`Вам ${num} роки.`);
        break;
    case num >= 5 && num <=20 || num >= 25 && num <= 30 || num >= 35 && num <= 40:
        alert(`Вам ${num} років`);
        break;
    case num >=41:
        alert('Ви у зрілому віці');
        break;
    case isNaN(num):
        alert('Ви ввели некоректне число!');
}