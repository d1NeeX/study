const readlineSync = require('readline-sync');

let period_of_day = readlineSync.question().toLowerCase();

function ActivityOfPartDay(part) {
    if (part === "утро") {
        return "Позавтракайте и начните день с положительных эмоций";
    }
    else if (part === "день") {
        return "Пойдите на прогулку и насладитесь свежим воздухом";
    }
    else if (part === "вечер") {
        return "Смотрите интересный фильм и расслабляйтесь";
    }
    else if (part === "ночь") {
        return "Отдохните и ложитесь спать";
    }
    else {
        return "Некорректно введенные данные";
    }
}

console.log(ActivityOfPartDay(period_of_day));
