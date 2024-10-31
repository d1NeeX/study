const readlineSync = require('readline-sync');

function tribonacciNUmbers(count) {
    const numbers = [0, 1, 1];
    let first_index = 0
    for (let i = 0; i < (count - 3); i++) {
        let new_nummber = numbers[first_index] + numbers[first_index + 1] + numbers[first_index + 2];
        numbers.push(new_nummber);
        first_index += 1;
    }
    return numbers;
}

function main() {
    let count0fNubers = parseInt(readlineSync.question());
    let numbers = tribonacciNUmbers(count0fNubers);
    console.log(numbers);
}

main();