'use string'

/*Task 1*/
const x = 10, y = 7;

const result = (x > y)? 'x більше за y' : 'x не більше, ніж y'
 console.log(result)

// /*Task 3*/

const number = prompt('Введіть число')
const num = parseInt(number);
if (!isNaN(num)) {
 let length = Math.abs(num).toString().length;

 let sign = (num > 0) ? 'позитивне' : 'негативне';

 let message;
 switch (length) {
  case 1:
   message = 'однозначне';
   break;
  case 2:
   message = 'двозначне';
   break;
  case 3:
   message = 'тризначне';
   break;
  default:
   message = 'число з більшою кількістю цифр';
 }

 console.log("Число " + num + " " + message + " " + sign);
} else {
 console.log("Введено не ціле число або не число.");
}

// /*Task 4*/

const number1 = +prompt('Please enter your first number')
const number2 = +prompt('Please enter your second number')
const number3 = +prompt('Please enter your third number')

let bigResult = ''
if (number1 > number2 && number3) {
 bigResult = 'First number is biggest';
} else if (number2 > number1 && number3) {
 bigResult = 'Second number is biggest' ;
} else {
 bigResult = 'Third number is biggest' ;
 }
console.log(bigResult)

// /*Task 5*/

const side1 = parseFloat(prompt("Введіть довжину першої сторони:"));
const side2 = parseFloat(prompt("Введіть довжину другої сторони:"));
const side3 = parseFloat(prompt("Введіть довжину третьої сторони:"));

if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3)) {
 if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  console.log("Такий трикутник може існувати.");
 } else {
  console.log("Такий трикутник не може існувати.");
 }
} else {
 console.log("Будь ласка, введіть числа.");
}
