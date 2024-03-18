'use strict';

const str = 'Hello';
const num = 6;
const sym = '*';
const boo = true;
function padString(string, number, symbol, boolean) {

    if(string === undefined) return 'Помилка! Ви не ввели перший аргумент';
    if(number === undefined) return 'Помилка! Ви не ввели другий аргумент!';
    if(symbol === undefined) return 'Помилка! Ви не ввели третій аргумет!';
    if(boolean === undefined) return 'Помилка! Ви не ввели четвертий аргумент!';

    while(string.length < number && boolean === true) {
        string += symbol;
    }

    while(string.length < number && boolean === false) {
        string = symbol + string;
    }

    return string.substring(0, number);
}

console.log(padString(str, num, sym, boo));
