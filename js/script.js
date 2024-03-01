'use strict'

const operand1 = parseFloat(prompt('Enter the first number:'));
const operand2 = parseFloat(prompt('Enter the second number:'));

const add = operand1 + operand2;
console.log('Result of addition:', operand1, "+", operand2, "=", add)

const sub = operand1 - operand2;
console.log('Result of subtraction:', operand1, "-", operand2, "=", sub)

const multi = operand1 * operand2;
console.log('Result of multiplication:', operand1, "*", operand2, "=", multi)

const div = operand1 / operand2;
console.log('Result of division:', operand1, "/", operand2, "=", div)

