'use strict'


const operand1 = parseFloat(prompt('Enter the first number:'));
const operand2 = parseFloat(prompt('Enter the second number:'));
const operand3 = parseFloat(prompt('Enter the third number:'));

let average = (operand1 + operand2 + operand3) / 3;

alert('Arithmetic mean:' + average);