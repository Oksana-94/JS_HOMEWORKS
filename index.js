'use strict';

// 1
const array = [1, 2, 3, 4, 5];

const indexOf = function(arr, item, fromIndex = 0) {
  for(let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf(array, 3));

// 2
const array2 = [1, 2, 3, 4, 5, 2];

const lastIndexOf = function(arr, item, fromIndex = arr.length - 1) {
  for(let i = fromIndex; i >= 0; i--) {
    if(arr[i] === item) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf(array2, 2));

// 3
const array3 = ['a', 'b', 'c', 'd', 'e'];

const find = function(arr, item) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      return item;
    }
  }
  return undefined;
}

console.log(find(array3, 'a'));

// 4
const array4 = ['a', 'b', 'c', 'd', 'e'];

const findIndex = function(arr, item) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex(array4, 'a'));

// 5
const array5 = ['a', 'b', 'c', 'd', 'e'];

const includes = function(arr, item) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      return true;
    }
  }
  return false;
}

console.log(includes(array5, 'a'));

// 6
const array6 = [2, 3, 4, 5, 6];

const every = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

console.log(every(array6, function(item) {
  return item > 1;
}));

 // 7
const array7 = [2, 3, 4, 5, 6];

const some = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}

console.log(some(array7, function(item) {
  return item > 5;
}));

// 8
const users = [
    {age: 2},
    {age: 3},
    {age: 4}
];
const reduce = function(arr, callback, accumulator) {
  let result = accumulator;
  for(let i = 0; i < arr.length; i++) {
    result += callback(accumulator, arr[i], i, arr)
  }
  return result;
}

console.log(
    reduce(users, function(accum, item) {
      accum = item.age;
      return accum;
    }, 0)
);