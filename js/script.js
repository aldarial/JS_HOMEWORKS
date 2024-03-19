'use strict'

const padString = function (str, length, symbol, right = true){
    if(typeof str !== 'string') return 'STR should be in string type';
    if(typeof length !== 'number' || isNaN(length)) return 'length should be in number type';
    if(str.length >= length) return str.substring(0, length);
    if(typeof symbol !== 'string' || symbol.length !== 1) return 'wrong symbol value';
    if(typeof  right !== 'boolean') return 'right param should be in boolean type';

    const repeatedElements = symbol.repeat(length - str.length);
    return right ? str + repeatedElements : repeatedElements + str;
}

console.log(padString('hello', 8, '&'));
console.log(padString('hello', 8, '*', false));
console.log(padString('hello', 3, '*', false));