const readlineSync = require('readline-sync');

function arrayGenerator(len) {
    const arr = [0];
    for (let i = 1; i < len; i++) {
        arr[i] = i + arr[i - 1];
    }
    return arr;
}

function main() {
    let l = parseInt(readlineSync.question());
    console.log(arrayGenerator(l));
}

main();
