const readlineSync = require('readline-sync');

let numbers = readlineSync.question();
const arr_of_numbers = numbers.split(', ');

function typeConverter(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}

function calculate(arr) {
    let summa = 0;
    for (let i = 0; i < arr.length; i++) {
        summa += arr[i];
    }
    return summa / arr.length;
}
console.log(calculate(typeConverter(arr_of_numbers)));


