const readlineSync = require('readline-sync');

let string = readlineSync.question();

for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
        string = string.slice(0, string.indexOf(string[i])) + string.slice(string.indexOf(string[i]) + 1);
    }
}

console.log(string);