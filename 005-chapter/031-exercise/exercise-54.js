const readlineSync = require('readline-sync');

const checker = (arr, item) => arr.indexOf(item);

function arrayformater(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
    }
    return arr;
}



function main() {
    let elem = parseInt(readlineSync.question());
    const arr = (readlineSync.question()).split(' ');
    let res = checker(arrayformater(arr), elem);
    console.log(res);
}

main();