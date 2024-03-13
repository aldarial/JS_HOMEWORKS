'use strict'

const num = +prompt('Please, enter the number');
let divisor = 2;
while (num % divisor !==0) {
    divisor++;
}
console.log(divisor)