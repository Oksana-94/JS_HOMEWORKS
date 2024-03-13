'use strict';

// 1
let str = '';
for(let i = 10; i <= 20; i++) {

    str += i;

    if(i === 20) continue;
    str += ', ';

}
console.log(str);


// 2
let b = '';
for(let a = 10; a <= 20; a++) {

    b += Math.pow(a, 2);

    if(a === 20) continue;
    b += ', ';

}
console.log(b);


// 3
for(let i = 1; i <= 10; i++) {
    let mult = 7;
    mult *= i;
    console.log(`${i} * 7 = ${mult}`);
}


// 4
let sum = 0;
for(let i = 1; i <= 15; i++) {

    sum += i;
}
console.log(sum);


// 5
let mul = 1;
for(let i = 15; i <= 35; i++) {
    mul *= i;
}
console.log(mul);

// 6
let mean = 0;
let summa = 0;
for (let i = 1; i <= 500; i++) {
    summa += i;
    mean = summa / 500;
}
console.log(mean);


// 7
let even = 0;
for (let i = 30; i <= 80; i++) {

    if(i % 2 !== 0) continue;
    even += i;
}
console.log(even);


// 8
for (let i = 100; i <= 200; i++) {

    if(i % 3 !== 0) continue;
    console.log(i);
}


// 9 + 10 + 11
let num = +prompt('Введіть число')

let sumb = 0;
let sumOfEvenDivisors = 0;
let dividers = '';
for (let i = 1; i < 1000000; i++) {

    if (num % i !== 0) continue;
    console.log(i);


    if (i % 2 !== 0) continue;
    sumb += 1;
    sumOfEvenDivisors += i;


}

console.log(sumb);
console.log(sumOfEvenDivisors);


// 12

// for(let i = 1; i <= 10; i++) {
//     let mult = 7;
//     mult *= i;
//     console.log(`${i} * 7 = ${mult}`);
// }

let table = 1;
for (let i = 1; i <= 10; i++) {


    for(let j = 1; j <= 10; j++) {
        table = i * j;
        console.log(table);
    }


}

