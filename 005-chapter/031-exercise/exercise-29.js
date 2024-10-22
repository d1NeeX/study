const readlineSync = require('readline-sync');

let number = parseInt(readlineSync.question());

function isPrime(num) {
    let flag = true;
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            flag = false;
        }
        return flag;
    }
}

const print_res = (num) => isPrime(num) ? `Число ${num} является простым` : `Число ${num} не является простым`;

console.log(print_res(number));