const readlineSync = require('readline-sync');

let count = parseInt(readlineSync.question());

function fibonacciNumber(n) {
    const numb = [1, 1];
    for (let i = 2; i < n; i++) {
        numb[i] = numb[i - 2] + numb[i - 1];
    }
    return numb;
}

function printNum(n) {
    const arr = fibonacciNumber(n);
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
    return;
}

printNum(count);