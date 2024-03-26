'use strict'

// #1
const arr0 = [1, 2, 3];
const arr1 = [4, 5, 6];
const arr = arr0.concat(arr1)
console.log(arr)

//#2
const arr2 = [1, 2, 3];
const reverse = arr2.reverse();
console.log(arr2)

//#3
const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(arr3)

//#4
const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);
console.log(arr4)

//#5
const arr5 = ['js', 'css', 'jq'];
const firstElement = arr5.shift();
console.log(firstElement);

//#6
const arr6 = ['js', 'css', 'jq'];
const lastElement = arr6.pop();
console.log(lastElement);

//#7
const arr7 = [1, 2, 3, 4, 5];
const newArr = arr7.slice(0, 3);
console.log(newArr);

//#8
const arr8 = [1, 2, 3, 4, 5];
const newArr1 = arr8.slice(3);
console.log(newArr1);

//#9
const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9)

//#10
const arr10 = [1, 2, 3, 4, 5];
const newArr2 = arr10.slice(1, 4);
console.log(newArr2);

//#11
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, 'a', 'b', 'c');
console.log(arr11)

//#12
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(6, 0, 'c');
arr12.push('e');
console.log(arr12);

//#13
const arr13 = [3, 4, 1, 2, 7];
arr13.sort();
console.log(arr13)

//#14
const arr14 = [5, 6, 7, 8, 9];
const result = arr14.reduce((sum, current) => sum + current, 0);
console.log(result);

//#15
const arr15 = [5, 6, 7, 8, 9];
const squaresArray = arr15.map(function(num) {
    return num * num;
});
console.log(squaresArray);

//#16
const arr16 = [1,-3, 5, 6,-7, 8, 9,-11];
const negativeNumbers = arr16.filter(function(num) {
    return num < 0;
});
console.log(negativeNumbers);

//#17
const arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
const evenNumbers = arr17.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);

//#18
const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const filteredArray = arr18.filter(function(str) {
    return str.length > 5;
});
console.log(filteredArray);

//#19
const arr19 = [1, 2, [3, 4], 5, [6, 7]];
const subArrays = arr19.filter(function(item) {
    return Array.isArray(item);
});
console.log(subArrays);

//#20
const arr20 = [5,-3, 6,-5, 0,-7, 8, 9];
const negativeNumbersCount = arr20.filter(function(num) {
    return num < 0;
}).length;
console.log(negativeNumbersCount);