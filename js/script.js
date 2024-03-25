'use strict';

// 1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const toGet = arr1.concat(arr2);
console.log(toGet);

// 2
const arr3 = [1, 2, 3];
const item3 = arr3.pop();
const item2 = arr3.pop();
arr3.unshift(item2);
arr3.unshift(item3);
console.log(arr3);

// 3
const arr4 = [1, 2, 3];
const arr5 = arr4.concat([4, 5, 6]);
console.log(arr5);

// 4
const arr6 = [1, 2, 3];
arr6.unshift(4, 5, 6);
console.log(arr6);

// 5
const arr7 = ['js', 'css', 'jq'];
console.log(arr7[0]);

// 6
const arr8 = ['js', 'css', 'jq'];
console.log(arr8[arr8.length - 1]);

// 7
const arr9 = [1, 2, 3, 4, 5];
const arr10 = arr9.slice(0, 3);
console.log(arr10);

// 8
const arr11 = [1, 2, 3, 4, 5];
const arr12 = arr11.slice(3, 5);
console.log(arr12);

// 9
const arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 2);
console.log(arr13);

// 10
const arr14 = [1, 2, 3, 4, 5];
const arr15 = arr14.slice(1, 4);
console.log(arr15);