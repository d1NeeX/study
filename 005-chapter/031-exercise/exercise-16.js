const readlineSync = require('readline-sync');

let height = parseFloat(readlineSync.question());
let gender = readlineSync.question();

const PerfectWeight = (h, g) => g === "м" ? `Идеальный вес ${height - 100 - (height - 150) / 4}` : `Идеальный вес ${height - 110}`;

console.log(PerfectWeight(height, gender));