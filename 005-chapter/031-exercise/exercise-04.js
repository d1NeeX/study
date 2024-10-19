const readlineSync = require('readline-sync');

let edge = parseInt(readlineSync.question());

const V = (a) => a * a * a;
console.log(V(edge));