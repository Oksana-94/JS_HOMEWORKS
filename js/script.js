'use strict';

const age = prompt('Введіть число');

switch (true) {
    case age === null:
        alert('Ви скасували запит');
            break;
    case +age[age.length - 1] === 1:
        alert(`Вам ${age} рік.`);
        break;
    case +age[age.length- 1] >= 2 && +age[age.length - 1] <= 4:
        alert(`Вам ${age} роки.`);
        break;
    case age % 2 === 1 || +age[age.length - 1] === 0 || age % 2 === 0:
        alert(`Вам ${age} років.`);
        break;
    case isNaN(+age):
        alert('Ви ввели некоректне число!');
}
