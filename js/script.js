'use strict'

let sum = 0;
for (let i = 1; i < 20; i++) {
    if (i % 2 !== 0) {
        sum += i;
    } else {
        continue;
    }
}
console.log(sum);