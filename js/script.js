'use strict';

const arr = [1, 2, 3, -1, -2, -3];
// const arr = [];
const checkArr = function (array) {

    let exampleArr = [];

    if (array.length === 0) return 'масив, переданий як параметр у функцію, є порожнім';

    for(let i = 0; i < array.length; i++) {
        if (array[i] < 0) continue;
        exampleArr.push(array[i]);
    }

    return (exampleArr.length === 0) ? null : exampleArr;
}

console.log(checkArr(arr));