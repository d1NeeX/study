const readlineSync = require('readline-sync');

function arrayformater(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
    }
    return arr;
}

function splitArray(arr) {
    const chet = [];
    const nechet = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 === 0 ? chet.push(arr[i]) : nechet.push(arr[i]);
    }
    return { chet, nechet };
}

function main() {
    const initial_array = arrayformater((readlineSync.question()).split(' '));
    console.log(splitArray(initial_array).chet, splitArray(initial_array).nechet);
}

main();