const readlineSync = require('readline-sync');

const replacer = (str, symb, rep) => str.replace(symb, rep);

function main() {
    let initial_string = readlineSync.question();
    let symbol_for_replace = readlineSync.question();
    let new_symbol = readlineSync.question();
    console.log(replacer(initial_string, symbol_for_replace, new_symbol));
}

main();