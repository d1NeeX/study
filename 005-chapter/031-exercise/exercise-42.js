const readlineSync = require('readline-sync');

function isDigit(str) {
    const numbers = '0123456789';
    let flag = true;
    const ln = str.length;
    for (let i = 0; i < ln; i++) {
        if (numbers.indexOf(str[i]) == -1) {
            flag = false;
            break;
        }
    }
    return flag;
}

function main() {
    let input = readlineSync.question();
    let result = isDigit(input);
    console.log(result);
}

main();