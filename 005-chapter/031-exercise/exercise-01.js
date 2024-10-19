const readlineSync = require('readline-sync');
let a = parseFloat(readlineSync.question());
let b = parseFloat(readlineSync.question());
let c = parseFloat(readlineSync.question());

const mult = (x, y, z) => x * y * z;
console.log(mult(a, b, c));