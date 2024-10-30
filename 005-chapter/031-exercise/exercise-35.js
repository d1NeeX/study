const readlineSync = require('readline-sync');

function str_replace(str, rep, symb) {
    while (str.indexOf(rep) !== -1) {
        str = str.replace(rep, symb);
    }
    return str;
}

function main() {
    let initialString = readlineSync.question();
    let repl = readlineSync.question();
    let symbol = readlineSync.question();
    console.log(str_replace(initialString, repl, symbol));
    return;
}

main();