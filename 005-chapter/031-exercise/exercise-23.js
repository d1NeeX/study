const readlineSync = require('readline-sync');

let a = parseFloat(readlineSync.question());
let b = parseFloat(readlineSync.question());
let c = parseFloat(readlineSync.question());

function check_triangle(x, y, z) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return 'Равносторонний треугольник';
        }
        else if (a === b || a === c || b === c) {
            return 'Равнобедренный треугольник';
        }
        else {
            return 'Разносторонний треугольник';
        }
    }
    else {
        return 'Треугольник с такими сторонами не существует';
    }
}

function tri(x1, x2, x3) {
    return check_triangle(x1, x2, x3);
}

console.log(tri(a, b, c));