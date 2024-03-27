'use strict'

//#1
const arr1 = ['a', 'b', 'c', 'd'];
const result = arr1.slice(0, 2).join('+') + ', ' + arr1.slice(2).join('+');
console.log(result);

//#2
const arr2 = [2, 5, 3, 9];
const result2 = (arr2[0] * arr2[1]) + (arr2[2] * arr2[3]);
console.log(result2);

//#3
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr3[1][0])

//#4
const obj = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' };
console.log(obj.js[0]);

//#5
const arr5 = [];
for (let i = 1; i <= 5; i++) {
    arr5.push('x'.repeat(i));
}
console.log(arr5);

//#6
const arr6 = [];
for (let i = 1; i <= 5; i++) {
    arr6.push(String(i).repeat(i));
}
console.log(arr6);

//#7
function arrayFill(value, length) {
    const arr7 = [];
    for (let i = 0; i < length; i++) {
        arr7.push(value);
    }
    return arr7;
}

console.log(arrayFill('x', 5));

//#8
function elementsToSumOverTen(arr8) {
    let sum = 0; //конст не подходит
    for (let i = 0; i < arr8.length; i++) {
        sum += arr8[i];
        if (sum > 10) {
            return i + 1;
        }
    }
    return -1;
}

console.log(elementsToSumOverTen([1, 2, 3, 4, 5]));

//#9
const reverse = function (arr9){
    for(let i =0; i < arr9.length; i++) {
        const currentElement = arr9[i];
        const lastElement = arr9[arr9.length - (1 + i)];

        arr9[i] = lastElement;
        arr9[arr9.length - (1 + i)] = currentElement

        if(i + 1 === Math.floor(arr9.length / 2)) break
    }
    return arr9;
}
console.log(reverse([1, 2, 3, 4, 5, 6]))

//#10
function sumOfArrayElements(arr10) {
    let sum = 0;
    for (let i = 0; i < arr10.length; i++) {
        if (Array.isArray(arr10[i])) {
            sum += sumOfArrayElements(arr10[i]);
        } else {
            sum += arr10[i];
        }
    }
    return sum;
}
console.log(sumOfArrayElements([[1, 2, 3], [4, 5], [6]]));


//#11
function sumOfArrayElements2(arr11) {
    let sum = 0;
    for (let i = 0; i < arr11.length; i++) {
        if (Array.isArray(arr11[i])) {
            sum += sumOfArrayElements2(arr11[i]);
        } else {
            sum += arr11[i];
        }
    }
    return sum;
}
console.log(sumOfArrayElements2([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]));