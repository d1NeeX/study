const readlineSync = require('readline-sync');

let num = parseInt(readlineSync.question());

function digitCounter(number) {
    let len = (Math.abs(number)).toString().length;
    return `Количество цифр в числе ${number}: ${len}`;
}

console.log(digitCounter(num));