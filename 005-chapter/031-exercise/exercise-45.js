const readlineSync = require('readline-sync');

function letterCounter(str) {
    const arr = [];
    const symb = [];
    for (let i = 0; i < str.length; i++) {
        if (symb.indexOf(str[i]) == -1) {
            let st = `'${str[i]}': ${str.split(str[i]).length - 1}`;
            arr.push(st);
            symb.push(str[i]);
        }
        else {
            continue;
        }
    }
    return arr;
}

function main() {
    let strring = readlineSync.question();
    let rez = letterCounter(strring);
    console.log(rez);
}

main();