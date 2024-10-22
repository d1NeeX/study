const readlineSync = require('readline-sync');

let x = parseInt(readlineSync.question());

function factorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
    return `${n}! = ${f}`;
}
console.log(factorial(x));
