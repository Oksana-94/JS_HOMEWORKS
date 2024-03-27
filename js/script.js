'use strict';

// 1
const arr1 = ['a', 'b', 'c', 'd'];
alert(`${arr1[0]} + ${arr1[1]} , ${arr1[2]} + ${arr1[3]}`);

// 2
const arr2 = [2, 5, 3, 9];
const result = arr2[0] * arr2[1] + arr2[2] * arr2[3];
alert(result);

// 3
const arr4 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(arr4[1][0]);

// 4
const obj = {
    js:['jQuery', 'Angular'],
    php: 'hello', css: 'world'
};
console.log(obj.js[0]);

// 5
const arr5 = [];
let sumArr = 'x';
for(let i = 0; i < 10; i++) {
    arr5.push(sumArr);
    sumArr += 'x';
}
console.log(arr5);

// 6
const arr6 = [];
for (let i = 1; i < 10; i++){
    let str = '';
    for (let j = 0; j < i; j++) {
        str += i;
    }
    arr6.push(str);
}
console.log(arr6);

// 7
const arr7 = [];
const arrayFill = function(value, number) {
    for(let i = 0; i < number; i++) {
        arr7.push(value);
    }
    return arr7;
}
console.log(arrayFill('x', 5));

// 8
const foo = function(arr) {
     let sum = 0;
     for (let i = 0 ; i < arr.length; i++) {
         sum += arr[i];
         if (sum > 10) {
             return i + 1;
         }
     }
 }
 console.log(foo([7, 2, 3, 4, 5, 6, 7, 8, 9]));

// 9
const arr8 = [1, 3, 5, 6, 7, 9];
let result2 = [];
   for (let i = arr8.length - 1; i >= 0; i--) {
    result2.push(arr8[i]);
}
console.log(result2);

// 10
const arr9 = [[1, 2, 3], [4, 5], [6]];
let sum2 = 0;
for (let i = 0; i < arr9.length; i++) {
    for (let j = 0; j < arr9[i].length; j++) {
        sum2 += arr9[i][j];
    }
}
console.log(sum2);

// 11
const arr10 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum3 = 0;
for(let i = 0; i < arr10.length; i++) {
    for(let j = 0; j < arr10[i].length; j++) {
        for(let x = 0; x < arr10[i][j].length; x++) {
            sum3 += arr10[i][j][x];
        }
    }
}
console.log(sum3);