const readlineSync = require('readline-sync');

function findLongestWordLength(sentence) {
    let words = sentence.split(' ');
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

function main() {
    const sentence = readlineSync.question("Введите предложение:");
    const longestWordLength = findLongestWordLength(sentence);
    console.log(longestWordLength);
}

main();