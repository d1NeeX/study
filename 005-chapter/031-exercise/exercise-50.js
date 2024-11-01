const readlineSync = require('readline-sync');

const arrRevers = (arr) => arr.reverse();

function main() {
    const test = [5, 4, 3, 2, 1];
    console.log(arrRevers(test));
}

main();