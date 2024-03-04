'use strict';

const action = prompt('Вкажіть, яку математичну операцію Ви маєте намір виконати, де add - додавання, sub - віднімання, mult - множення, div - ділення');
const num1 = +prompt('Введіть перше число');
const num2 = +prompt('Введіть друге число');

if (action === 'add') {
    const add = num1 + num2;
    alert('Результат: ' + num1 + ' + ' + num2 + ' = ' + add);
} else if (action === 'sub') {
    const sub = num1 - num2;
    alert('Результат: ' + num1 + ' - ' + num2 + ' = ' + sub);
} else if (action === 'mult') {
    const mult = num1 * num2;
    alert('Результат: ' + num1 + ' * ' + num2 + ' = ' + mult);
} else if (action === 'div') {
    const div = num1 / num2;
    alert('Результат: ' + num1 + ' / ' + num2 + ' = ' + div);
} else {
    alert('Невірно вказаний оператор обчислення!');
}