const readlineSync = require('readline-sync');
summa = 0;
x = parseInt(readlineSync.question());
while (x !== 0) {
    summa += x;
    x = parseInt(readlineSync.question());
}


console.log(summa);
