const readlineSync = require('readline-sync');

function arrayGenerator(len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i ** 2);
    }
    return arr;
}

function main() {
    let arr_len = parseInt(readlineSync.question());
    console.log(arrayGenerator(arr_len));
}

main();