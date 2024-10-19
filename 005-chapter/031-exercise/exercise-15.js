const readlineSync = require('readline-sync');

let years = readlineSync.question();
let content_year = readlineSync.question();

const checkContenAcces = (year, year_cont) => year >= year_cont ? "Доступ разрешен" : "Доступ запрещен";

console.log(checkContenAcces(years, content_year));
