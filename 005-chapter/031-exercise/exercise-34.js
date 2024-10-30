const readlineSync = require('readline-sync');


function reverseAndPrintLength(inputString) {
    let reversedString = inputString.split('').reverse().join('');
    console.log(`Инвертированная строка: ${reversedString}`);
    console.log(`Длина строки: ${inputString.length}`);
}

function main() {
    let inputString = readlineSync.question();
    reverseAndPrintLength(inputString);
}

main();