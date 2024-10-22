const readlineSync = require('readline-sync');

let number = parseInt(readlineSync.question());

function calcDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

function printDivisors() {
    const arr = calcDivisors(number);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return;
}
printDivisors();