'use strict'

const arr = [1, 2, 3, 4, 5];
// сума
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);

// сумa квадратів
let sum2 = 0;
for (let i = 0; i < arr.length; i++) {
    sum2 += Math.pow(arr[i], 2);
}

console.log(sum2);