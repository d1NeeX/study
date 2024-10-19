const readlineSync = require('readline-sync');

let mark = readlineSync.question();

function ClassificationMark(mar) {
    switch (mar) {
        case "5":
            return "Отлично";
            break;
        case "4":
            return "Хорошо";
            break;
        case "3":
            return "Удовлетворительно";
            break;
        case "2":
            return "Неудовлетворительно";
            break;
        case "1":
            return "Очень плохо";
            break;
        default:
            return "Неверные данные";
    }
}

console.log(ClassificationMark(mark));