const readlineSync = require('readline-sync');

function endZeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr = arr.slice(0, i).concat(arr.slice(i + 1)).concat([0]);
        }
    }
    return arr;
}

function arrayformater(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
    }
    return arr;
}

function main() {
    const array = arrayformater((readlineSync.question()).split(' '));
    console.log(endZeros(array));
}

main();