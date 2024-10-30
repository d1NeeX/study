const readlineSync = require('readline-sync');

const equal_string = (str_1, str_2) => str_1.toLowerCase() === str_2.toLowerCase();

function main() {
    let first_string = readlineSync.question();
    let second_string = readlineSync.question();
    console.log(equal_string(first_string, second_string));
}

main();