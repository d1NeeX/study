const readlineSync = require('readline-sync');

function converter(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
}

function main() {
    let pron = readlineSync.question();
    let upper = converter(pron);
    console.log(upper);
}

main();