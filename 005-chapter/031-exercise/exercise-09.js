const readlineSync = require('readline-sync');

let a = parseFloat(readlineSync.question());
let b = parseFloat(readlineSync.question());
let c = parseFloat(readlineSync.question());
let x = parseFloat(readlineSync.question());

function polinom(a, b, c, x) {
    return a * x * x + b * x + c;
}

console.log(polinom(a, b, c, x));
