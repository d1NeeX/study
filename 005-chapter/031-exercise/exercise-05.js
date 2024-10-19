const readlineSync = require('readline-sync');

let a = parseFloat(readlineSync.question());
let b = parseFloat(readlineSync.question());
let c = parseFloat(readlineSync.question());

function geron(x, y, z) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

console.log(geron(a, b, c));
