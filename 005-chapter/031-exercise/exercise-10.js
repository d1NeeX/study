const readlineSync = require('readline-sync');

const param = readlineSync.question().split(' ')

let v_0 = parseFloat(param[0]);
let a = parseFloat(param[1]);
let t = parseFloat(param[2]);

function S(velocity, acceleration, time) {
    return velocity * time + (acceleration * time * time) / 2;
}

console.log(S(v_0, a, t));