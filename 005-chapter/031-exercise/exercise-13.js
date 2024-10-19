const readlineSync = require('readline-sync');

let month = parseInt(readlineSync.question());

function period(mon) {
    if (mon >= 3 && mon <= 5) {
        return "весна";
    }
    else if (mon >= 6 && mon <= 8) {
        return "лето";
    }
    else if (mon >= 9 && mon <= 11) {
        return "осень"
    }
    else if (mon === 12 || mon === 1 || mon === 2) {
        return "зима"
    }
}

console.log(period(month));
