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

// 11
const arr16 = [1, 2, 3, 4, 5];
arr16.splice(3, 0, 'a', 'b', 'c');
console.log(arr16);

// 12
const arr17 = [1, 2, 3, 4, 5];
arr17.splice(1, 0, 'a', 'b');
arr17.splice(-1, 0, 'c');
arr17.push('e');
console.log(arr17);

// 13
const arr18 = [3, 4, 1, 2, 7];
arr18.sort();
console.log(arr18);

// 14
const arr20 =  [5, 6, 7, 8, 9];
const result = arr20.reduce((sum, current) => sum + current, 0);
// const sum = arr20[0] + arr20[1] + arr20[2] + arr20[3] + arr20[4];
console.log(result);

// 15
const arr21 =  [5, 6, 7, 8, 9];
const arr22 = [arr21[0] ** 2, arr21[1] ** 2, arr21[2] ** 2, arr21[3] ** 2, arr21[4] ** 2];
console.log(arr22);

// 16
const arr23 =  [1,-3, 5, 6,-7, 8, 9,-11];
const arr24 = arr23.filter(num => num < 0);
console.log(arr24);

// 17
const arr25 =  [1,-3, 5, 6,-7, 8, 9,-11];
const arr26 = arr25.filter(num => num % 2 === 0);
console.log(arr26);

// 18
const arr27 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const arr28 = arr27.filter(item => item.length > 5);
console.log(arr28);

// 19
const arr29 = [1, 2, [3, 4], 5, [6, 7]];
arr29.splice(0, 2);
arr29.splice(1, 1);
console.log(arr29);

// 20
const arr30 = [5, -3, 6, -5, 0, -7, 8, 9];
const arr31 = arr30.filter(num => num < 0);
console.log(`Кількість від'ємних чисел у масиві - ${arr31.length}`);

