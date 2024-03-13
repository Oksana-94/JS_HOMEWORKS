'use strict';

// 1
const arr = [1, 2, 3, 4, 5];
let sum = 0;
let square = 0;

for (let i of arr) {
    sum += i;
    square += Math.pow(i, 2);

}
console.log(sum);
console.log(square);

