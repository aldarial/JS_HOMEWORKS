'use strict'

/*
Task 1*/
let str1 = '';

for (let i = 20; i <= 30; i += 0.5) {
    str1 += i + '; ';
}
console.log(str1)


/*Task 2*/
let str2 = '';

for (let i = 10; i <= 100; i += 10) {
    str2 += i * 27 + '; ';
}
console.log(str2)


/*Task 3*/
const N = 100;
for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    }
}


/*Task 4*/
const number = 7;
let isPrime = true;

if (number === 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime && number > 1) {
    console.log(`${number} є простим числом`);
} else {
    console.log(`${number} не є простим числом`);
}


/*Task 5*/
const num2 = 81;
for (let i = 1; i < num2; i++) {
    const calcNum = 3 ** i;
    if (calcNum !== num2) continue

    console.log('result: ', calcNum)
    break
}