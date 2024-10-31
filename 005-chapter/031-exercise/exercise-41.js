
const readlineSync = require('readline-sync');

function countWords(sentence) {
    const words = sentence.trim().split(/\s+/);
    return words.length;
}

function main() {
    const sentence = readlineSync.question("Введите предложение:");
    const wordCount = countWords(sentence);
    console.log(wordCount);
}

main();