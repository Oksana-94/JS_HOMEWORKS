'use strict';

// Задача 1
let user = {

}

user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';
delete user.name;

// console.log(user);

// Задача 2
const userMy = {
    name: 'John'
};

userMy.name = 'Pete';

// console.log(userMy);
// Все працює, властивості об'єкта можуть змінюватися, навіть якщо об'єкт прописаний через const, так як це посилальний тип даних.

// Задача 3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = salaries.John + salaries.Ann + salaries.Pete;
// console.log(sum);