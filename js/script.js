'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    return characters.slice(0, length);
}

const key = generateKey(16, characters);
console.log(key);