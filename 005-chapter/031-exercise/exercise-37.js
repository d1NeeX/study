const readlineSync = require('readline-sync');

const float_converter = (num) => parseFloat(num).toFixed(2);

function main() {
    let num = readlineSync.question();
    console.log(float_converter(num));
}

main();