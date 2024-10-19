const readlineSync = require('readline-sync');

let act = readlineSync.question();

function checkActivity(activity) {
    if (activity === "легкая") {
        return "Оптимальная температура: 20°C";
    }
    else if (activity === "средняя") {
        return "Оптимальная температура: 18°C";
    }
    else {
        return "Оптимальная температура: 16°C";
    }
}

console.log(checkActivity(act));