'use strict';

const str = 'Hello';
const num = 5;
const sym = '*';
const boo = true;
function padString(string, number, symbol, boolean) {

    if(typeof string !== 'string') return 'STR should be in string type';
    if(typeof number !== 'number' || isNaN(number)) return 'number should be in number type';
    if(typeof symbol !== 'string' || symbol.length !== 1) return 'wrong symbol value';
    if(typeof boolean !== 'boolean') return 'boolean param should be in boolean type';

    while(string.length < number && boolean === true) {
        string += symbol;
    }

    while(string.length < number && boolean === false) {
        string = symbol + string;
    }

    return string.substring(0, number);
}

console.log(padString(str, num, sym, boo));
