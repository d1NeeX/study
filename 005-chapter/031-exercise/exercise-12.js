const readlineSync = require('readline-sync');

dist = parseFloat(readlineSync.question());

function TicketCost(distance) {
    if (distance <= 100) {
        return "Тариф: A";
    }
    else {
        return "Тариф Б";
    }
}

console.log(TicketCost(dist));