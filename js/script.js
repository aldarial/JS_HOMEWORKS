'use strict'

/*
Task 1*/

let str1 = '';

for (let i = 10; i <= 20; i += 1) {
    str1 += i + ', ';
}
console.log(str1)

/*
Task 2*/

let str2 = '';

for (let i = 10; i <= 20; i += 1) {
    str2 += i * i + ', ';
}
console.log(str2)

/*
Task 3*/

let str3 = '';

for (let i = 1; i <= 10; i += 1) {
    str3 += i * 7 + ', ';
}
console.log(str3)

/*
Task 4*/

let str4 = 1;

for (let i = 15; i <= 35 ; i++) {
    str4 += i;
}
console.log(str4)


/*
Task 5*/

let str5 = 1;

for (let i = 15; i <= 35 ; i++) {
    str5 *= i;
}
console.log(str5)

/*
Task 6*/

let str6 = 1;

 for (let i = 1; i <= 500; i++){
     str6 += i;
 }
const average = str6 / 500;
 console.log(average)

/*
Task 7*/

let str7 = 0;

for(let i = 30; i <= 80; i++){
    if(i % 2 === 0){
        str7 += i;
    }
}
console.log(str7)

/*
Task 8*/

let str8 = '';

for(let i = 100; i <= 200; i += 1){
    if(i % 3 === 0){
        str8 += i + ', ';
    }
}
console.log(str8)

/*
Task 9*/
const number = +prompt("Введіть натуральне число:");
console.log(`Дільники числа ${number}: `);

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}

/*
Task 10*/

let count = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        count++;
    }
}

console.log(`Кількість парних дільників числа ${number}: ${count}`);

/*
Task 11*/
let sum = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        sum += i;
    }
}

console.log(`Сума парних дільників числа ${number}: ${sum}`);

/*
Task 12*/

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}