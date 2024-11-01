const readlineSync = require('readline-sync');

function deleteZero(arr) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '0') {
            array.push(arr[i])
        }
    }
    return array;
}

function main() {
    const array = (readlineSync.question(`Входной массив`)).split(' ');
    console.log(`Результат: ${deleteZero(array)}`);
}

main();