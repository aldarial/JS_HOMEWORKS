'use strict'

/*
Task 1*/
const a1 = 0;
const result1 = (a1 === 0)? 'Вірно': 'Неправильно'
console.log(result1)

/*
Task 2*/
const a2 = 1;
const result2 = (a2 > 0)? 'Вірно': 'Неправильно'
console.log(result2)

/*
Task 3*/
const a3 = -1;
const result3 = (a3 < 0)? 'Вірно': 'Неправильно'
console.log(result3)

/*
Task 4*/
const a4 = 1;
const result4 = (a4 >= 0)? 'Вірно': 'Неправильно'
console.log(result4)


/*
Task 5*/
const a5 = -1;
const result5 = (a5 >= 0)? 'Вірно': 'Неправильно'
console.log(result5)

/*
Task 6*/
const a6 = 1;
const result6 = (a6 !== 0)? 'Вірно': 'Неправильно'
console.log(result6)

/*
Task 7*/
const a7 = 'test';
const result7 = (a7 === 'test')? 'Вірно': 'Неправильно'
console.log(result7)

/*
Task 8*/
const a8 = '1';
const result8 = (a8 === '1')? 'Вірно': 'Неправильно'
console.log(result8)

/*
Task 9*/
const a9 = 4;
const result9 = ( a9 > 0 && a9 < 5 )? 'Вірно': 'Неправильно'
console.log(result9)

/*
Task 10*/
const a10 = 2;
const result10 = ( a10 === 0 || a10 === 2)? 'Вірно': 'Неправильно'
console.log(result10)

/*
Task 11*/
const a11 = 1;
const b1 = 3;
const result11 = ( a11 <= 1 && b1 >= 3)? 'Вірно': 'Неправильно'
console.log(result11)


/*
Task 12*/
const a12 = 4;
const b2 = 6;
const result12 = ( a12 > 2 && a12 < 11 || b2 >= 6 && b2 < 14)? 'Вірно': 'Неправильно'
console.log(result12)

/*
Task 13*/
const num = 2;
let result;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'літо';
        break;
    case 4:
        result = 'осінь';
        break;
    default:
        result = 'невідомий сезон';
}

console.log(result);
