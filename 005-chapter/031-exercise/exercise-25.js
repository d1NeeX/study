const readlineSync = require('readline-sync');
let n = parseInt(readlineSync.question());

function evenNum(N) {
    const Num = [];
    for (let i = 2; i <= N; i += 2) {
        Num.push(i);
    }
    return Num;
}

function printList(N) {
    const list = evenNum(N);
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
    return;
}

printList(n);
