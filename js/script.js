'use strict'
const operation = prompt('Enter the action you want to perform (add, sub, mult, div):');

const operand1 = parseFloat(prompt('Enter the first number:'));
const operand2 = parseFloat(prompt('Enter the second number:'));

let result;
if (operation === 'add') {
    result = operand1 + operand2;
    alert('Result: ' + operand1 + ' + ' + operand2 + '=' + result);
} else if (operation === 'sub') {
    result = operand1 - operand2;
    alert('Result: '+ operand1 + ' - ' + operand2 + '=' + result);
} else if (operation === 'mult') {
    result = operand1 * operand2;
    alert('Result: '+ operand1 + ' * ' + operand2 + '=' + result);
} else if (operation === 'div') {
    if (operand2 !== 0){
    result = operand1 / operand2;
    alert('Result: '+ operand1 + ' / ' + operand2 + '=' + result);
    } else {
    alert('Division by zero is impossible.');
    }
} else {
alert ('Something went wrong. Please enter: : add, sub, mult or div.')
}