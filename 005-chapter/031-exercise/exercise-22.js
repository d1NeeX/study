const readlineSync = require('readline-sync');

let price = parseFloat(readlineSync.question());

const bonus = (amount) => amount >= 1000 ? Math.floor(amount / 10) : 0;

console.log(bonus(price));