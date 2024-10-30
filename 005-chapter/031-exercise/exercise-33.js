const readlineSync = require('readline-sync');

x = parseInt(readlineSync.question());

function square(a) {
    for (let i = 0; i < a; i++) {
        console.log(`*`.repeat(a));
    }
    return;
}

square(x);