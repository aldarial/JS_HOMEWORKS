'use strict'

const temp = Number(prompt('Please enter the temperature.'))
const type =prompt('Please enter degrees Celsius (C) or Fahrenheit (F).')

if (!isNaN(temp)){
    let result= null;

    if ( type.toUpperCase() === 'F' ){
        result = ('It will be ') + (temp - 32) * 5/9 + ('degrees Fahrenheit.');
    } else if ( type.toUpperCase() === 'C' ){
        result = ('It will be ') + ((temp * 9/5) + 32) + ('degrees Celsius.');
    } else {
        result = ('Something went wrong. Please check the entered data and try again.');
    }

    alert(result);
} else {
    alert('Something went wrong, please try again.');

}

