const readlineSync = require('readline-sync');

function meanArray(arr) {
    let summa = 0;
    for (let i = 0; i < arr.length; i++) {
        summa += arr[i];
    }
    return summa / arr.length;
}

function arrayformater(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
    }
    return arr;
}


function find_elem(arr) {
    let epsilon = 100000;
    let elem = undefined;
    const mean = meanArray(arr);
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(mean - arr[i]) < epsilon) {
            epsilon = Math.abs(mean - arr[i]);
            elem = arr[i];
        }
    }
    return elem;
}

function main() {
    let array = arrayformater((readlineSync.question()).split(' '));
    console.log(find_elem(array));
}

main();