'use strict'

/*#1*/
const line1 = prompt('Enter the first line:');
const line2 = prompt('Enter the second line:');
const line3 = prompt('Enter the third line:');

const allLines= line1 + " " + line2 + " " + line3;

console.log(allLines);



/* #2*/

const num = 42378;
const result = num.toString().split('').join(' ');
console.log(result);

