const readlineSync = require('readline-sync');

const a_vector = (readlineSync.question()).split(' ')
const b_vector = (readlineSync.question()).split(' ')

const scal = (a, b) => parseFloat(a[0]) * parseFloat(b[0]) + parseFloat(a[1]) * parseFloat(b[1]) + parseFloat(a[2]) * parseFloat(b[2]);

console.log(scal(a_vector, b_vector));