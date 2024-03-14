'use strict';

// 1
let i = 20;
let all = '';
for (; i <= 30; i += 0.5) {

    all += i + ' ';

}

console.log(all);


// 2
let gr = 1;
for(let dol = 10; dol <= 100; dol += 10) {
    gr = dol * 27;
    console.log(`${dol} доларів коштує ${gr} гривень.`);
}


// 3
for (let i = 1; i <= 100; i++) {
    if(Math.pow(i, 2) <= 25) {
        console.log(i);
    }
}


// 4
const simple = 4;
let sum = 0;
let x = 2;
for(; x <= 100; x++) {
    if(simple % x === 0)
    sum += 1;
}

if (simple === 1) {
    console.log('Число 1')
} else if (sum === 1) {
    console.log('Число просте.');
} else {
    console.log('Число має інші дільники, крім 1 і себе.')
}


// 5
const number = 9;

if (number % 3 === 0 && number) {
    console.log('Число можна одержати шляхом зведення числа 3 у деякий ступінь.');
}   else {
    console.log('Число отримати неможливо шляхом зведення числа 3 у деякий ступінь.');
}