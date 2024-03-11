'use strict';

// 1
const x = 10;
const y = 7;

x > y ? console.log('x більше за y') : console.log('x не більше, ніж y');


// 3
const num = prompt('Введіть ціле число.');

if (num.length === 1 && +num > 0) {
    alert(`Число ${num} однозначне позитивне.`);
} else if (num.length === 2 && +num > 0) {
    alert(`Число ${num} двоцифрове позитивне.`);
} else if (num.length === 3 && +num > 0) {
    alert(`Число ${num} трицифрове позитивне.`);
} if (num.length === 2 && +num < 0) {
    alert(`Число ${num} однозначне негативне.`);
} else if (num.length === 3 && +num < 0) {
    alert(`Число ${num} двоцифрове негативне.`);
} else if (num.length === 4 && +num < 0) {
    alert(`Число ${num} трицифрове негативне.`);
}


// 4
const num1 = +prompt('Введіть перше число');
const num2 = +prompt('Введіть друге число');
const num3 = +prompt('Введіть третє число');

if (num1 > num2 && num1 > num3) {
    alert(`Найбільше число те, яке Ви ввели першим - ${num1}`)
} else if (num2 > num1 && num2 > num3) {
    alert(`Найбільше число те, яке Ви ввели другим - ${num2}`)
} else if (num3 > num1 && num3 > num2) {
    alert(`Найбільше число те, яке Ви ввели третім - ${num3}`)
}

// 5
const len1 = +prompt('Введіть довжину першої сторони трикутника');
const len2 = +prompt('Введіть довжину другої сторони трикутника');
const len3 = +prompt('Введіть довжину третьої сторони трикутника');

if ( ((len1 + len2) > len3) && ((len2 + len3) > len1) && ((len1 + len3) > len2) ) {
    alert('Трикутник може існувати при таких довжинах.');
} else {
    alert('Трикутник не може існувати при таких довжинах.');
}