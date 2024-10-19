const readlineSync = require('readline-sync');

let far = parseFloat(readlineSync.question());

const C = (f) => (5 * (f - 32)) / 9;

console.log(C(far));
