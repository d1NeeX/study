const readlineSync = require('readline-sync');

function arrayGenerator(n) {
    let first_member = 2;
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(first_member);
        first_member += 2;
    }
    return arr;
}

function main() {
    let len = parseInt(readlineSync.question(`N = `));
    console.log(arrayGenerator(len));
}

main();