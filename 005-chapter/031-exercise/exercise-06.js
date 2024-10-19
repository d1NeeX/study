const readlineSync = require('readline-sync');

let r = parseFloat(readlineSync.question());

function line(radius) {
    const pi = Math.PI;
    return (2 * pi * radius).toFixed(4);
}

console.log(line(r));