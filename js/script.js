'use strict'

/*
Task 1*/
const a1 = 0;
if ( a1 === 0 ){
    console.log('Вірно')
} else {
    console.log('Неправильно')
}

/*
Task 2*/
const a2 = 1;
if ( a2 > 0 ){
    console.log('Вірно')
} else {
    console.log('Неправильно')
}

/*
Task 3*/
const a3 = -1;
if ( a3 < 0 ){
    console.log('Вірно')
} else {
    console.log('Неправильно')
}

/*
Task 4*/
const a4 = 1;
if ( a4 >= 0 ){
    console.log('Вірно')
} else {
    console.log('Неправильно')
}


/*
Task 5*/
const a5 = -1;
if ( a5 <= 0 ){
    console.log('Вірно')
} else {
    console.log('Неправильно')
}

/*
Task 6*/
const a6 = 1;
if ( a6 !== 0 ){
    console.log('Вірно')
} else {
    console.log('Неправильно')
}

/*
Task 7*/
const a7 = 'test';
if ( a7 === 'test' ){
    console.log('Вірно')
} else {
    console.log('Неправильно')
}

/*
Task 8*/
const a8 = '1';
if ( a8 === '1' ){
    console.log('Вірно')
} else {
    console.log('Неправильно')
}

/*
Task 9*/
const a9 = 4;
if ( a9 > 0 && a9 < 5 ){
    console.log('Вірно')
} else {
    console.log('Неправильно')
}

/*
Task 10*/
const a10 = 2;
if ( a10 === 0 || a10 === 2){
    console.log(a10 + 7)
} else {
    console.log(a10 / 10)
}

/*
Task 11*/
const a11 = 1;
const b1 = 3;
if ( a11 <= 1 && b1 >= 3){
    console.log(a11 + b1)
} else {
    console.log(a11 - b1)
}

/*
Task 12*/
const a12 = 4;
const b2 = 6;
if ( a12 > 2 && a12 < 11 || b2 >= 6 && b2 < 14){
    console.log('Вірно')
} else {
    console.log('Неправильно')
}

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
