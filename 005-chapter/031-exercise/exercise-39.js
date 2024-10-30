const readlineSync = require('readline-sync');

function generator(len) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < len; i++) {
        let rand = Math.floor(Math.random() * chars.length);
        id += chars.charAt(rand);
    }
    return id;
}

function main() {
    let len = parseInt(readlineSync.question());
    console.log(generator(len));
}

main();