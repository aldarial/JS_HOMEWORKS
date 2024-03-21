'use strict'

function powerNumber(base, exponent = 1){
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        return 'Error. The entered data must be numbers.';
    }
    const result = Math.pow(base, exponent);
    return result;
}

const num = +prompt('enter your number please:');
const exp = +prompt('enter the exponent of the number:');
const result = powerNumber(num, exp);

alert(`Result: ${result}`);

