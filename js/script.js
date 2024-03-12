'use strict';

let i = 1;
let sum = 0;

for(; i <= 20; i++) {


    if (i % 2 === 0) continue;

    sum += i;
}

alert(sum);