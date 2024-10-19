const readlineSync = require('readline-sync');

let num = parseFloat(readlineSync.question());

const check = (number) => Boolean(number % 2 === 0) ? `Число ${number} - четное.` : `Число ${number} - нечетное.`;

console.log(check(num));