const readlineSync = require('readline-sync');

let minute = parseInt(readlineSync.question());

function calculateHour(minutes) {
    return Math.floor(minutes / 60);
}

console.log(calculateHour(minute));