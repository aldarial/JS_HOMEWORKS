'use strict'

const age = prompt('Enter your age please')
let userAge = parseInt(age);

let year = ''

if (userAge >= 10 && userAge <= 20) {
    year = 'років';
} else {
    userAge = age % 10;
    if ( userAge === 1){
        year = 'рік';
    } else if (userAge >= 2 && userAge <= 4){
        year = 'роки';
    } else{
        year = 'років';
    }
}

alert ( age + ' ' + year)