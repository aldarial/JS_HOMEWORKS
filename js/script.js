'use strict'

/*
Task 1*/
const user1 = {};

user1.name = 'John';
user1.surname = 'Smith';

user1.name = 'Pete';

delete user1.name;

console.log(user1);


/*
Task 2*/
const user = {
    name: 'John'
};
// Можно изменить свойства объекта, но сам объект остается таким же, так как указан 'const'.

user.name = 'Pete';

// Будет работать и просто заменит свойство 'name'.


/*
Task 3*/
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const salaryValues = Object.values(salaries);
const sum = salaryValues.reduce((total, salary) => total + salary, 0);

console.log(sum);
