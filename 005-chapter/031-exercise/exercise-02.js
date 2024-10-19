const readlineSync = require('readline-sync');

let count = parseFloat(readlineSync.question());
const time = (days) => days * 7 * 24 * 60;

console.log(time(count));
