### Homework 12
Задача 1

Створіть порожній об'єкт user.
Додайте властивість name зі значенням John.
Додайте властивість surname зі значенням Smith.
Змініть значення властивості name на Pete.
Видаліть властивість name з об'єкта.


Задача 2

Чи можна змінити об'єкт, оголошений за допомогою const?

const user = {
name: 'John'
};

// чи буде це працювати і чому ?

user.name = 'Pete';


Задача 3

У нас є об'єкт, у якому зберігаються зарплати нашої команди:

const salaries = {
John: 100,
Ann: 160,
Pete: 130
}
Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum