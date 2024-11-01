const readlineSync = require('readline-sync');

const div = (arr) => Math.max(...arr) - Math.min(...arr);

function main() {
    const array = [5, 8, 3, 2, 7];
    console.log(div(array));
}

main();