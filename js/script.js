'use strict';

const num = +prompt('Введіть число');
let i = 2;
for (; i <= 1000000; i++) {
    if (num % i === 0) break;
}

switch(true) {
    case num === 1:
        console.log('Ви ввели цифру 1. Відповідно, дільник також 1.');
        break;
    case num < 1:
        console.log('NaN');
        break;
    case num >= 1:
        console.log(i);
        break;
}