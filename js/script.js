'use strict';

const action = prompt('Вкажіть, яку дію Ви хочете виконати, де add - додавання, sub - віднімання, mult - множення, div - ділення');
const num1 = +prompt('Вкажіть перше число');
const num2 = +prompt('Вкажіть друге число');


if(action === 'add') {
    alert(`${num1} + ${num2} = ${num1 + num2}`);
} else if(action === 'sub') {
    alert(`${num1} - ${num2} = ${num1 - num2}`);
} else if(action === 'mult') {
    alert(`${num1} * ${num2} = ${num1 * num2}`);
} else if(action === 'div') {
    alert(`${num1} / ${num2} = ${num1 / num2}`);
} else {
    alert('Невірно вказана дія');
}
