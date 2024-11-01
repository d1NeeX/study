const readlineSync = require('readline-sync');

function arrayformater(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
    }
    return arr;
}

function checker(arr) {
    flag = true;
    for (let i = 1; i < arr.length; i++) {
        if (!(arr[i - 1] < arr[i])) {
            flag = false;
            break;
        }
        else {
            continue;
        }
    }
    return flag;
}

function main() {
    const array = arrayformater((readlineSync.question()).split(' '));
    console.log(checker(array));
}
main();
