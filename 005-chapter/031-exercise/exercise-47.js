const readlineSync = require('readline-sync');

function classificator(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] > 0) {
            positive += 1;
        }
        else if (arr[i] == 0) {
            zero += 1;
        }
        else {
            negative += 1;
        }
    }
    return `Положительных: ${positive}, Отрицательных: ${negative}, Нулевых: ${zero}`;
}

function array_generator() {
    const arr = [];
    for (let i = 0; i < 15; i++) {
        arr.push(Math.floor((Math.random() * 21) - 10));
    }
    return arr;
}

function main() {
    let count = classificator(array_generator());
    console.log(count);
}

main();