const readlineSync = require('readline-sync');

let num = parseFloat(readlineSync.question());

function NumRange(number) {
    if (number >= 0 && number <= 10) {
        return "Число находится в диапзоне: маленькое";
    }
    else if (number >= 11 && number <= 100) {
        return "Число находится в диапазоне: среднее";
    }
    else if (number >= 101) {
        return "Число находится в диапазоне: большое";
    }
    else {
        return "С отрицательными числами мы не работаем";
    }
}

console.log(NumRange(num));