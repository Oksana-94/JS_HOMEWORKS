'use strict';

// 1
const x = 10;
const y = 7;

x > y ? console.log('x більше за y') : console.log('x не більше, ніж y');


// 3
const num = prompt('Введіть ціле число.');

if (num.length === 1 && +num >= 0) {
    alert(`Число ${num} однозначне позитивне.`);
} else if (num.length === 2 && +num >= 0) {
    alert(`Число ${num} двозначне позитивне.`);
} else if (num.length === 3 && +num >= 0) {
    alert(`Число ${num} тризначне позитивне.`);
} if (num.length === 2 && +num < 0) {
    alert(`Число ${num} однозначне негативне.`);
} else if (num.length === 3 && +num < 0) {
    alert(`Число ${num} двозначне негативне.`);
} else if (num.length === 4 && +num < 0) {
    alert(`Число ${num} тризначне негативне.`);
} else {
    alert('Ви ввели завелике число або нечислове значення.');
}