function calculatetip(summary, percent) {
    sum = Number.parseInt(summary);
    per = Number.parseInt(percent);
    const tip = document.getElementById("tipAmount");
    let total_tip = sum * per / 100;
    tip.textContent = total_tip;
}

function finalsumm(summary, percent) {
    sum = Number.parseInt(summary);
    per = Number.parseInt(percent);
    const fnsum = document.getElementById("totalAmount");
    let summ = sum + sum * per / 100;
    fnsum.textContent = summ;
}

function summ0nPerson(summary, percent, n) {
    sum = Number.parseInt(summary);
    per = Number.parseInt(percent);
    count = Number.parseInt(n);
    const personsum = document.getElementById("perPersonAmount");
    let person_sum = (sum + sum * per / 100) / count;
    personsum.textContent = person_sum;
}

const cb = document.getElementById("calculateButton");

const summ = document.getElementById("billAmount").value;
const percent = document.getElementById("tipPercentage").value;
const personcount = document.getElementById("numberOfPeople").value;

cb.addEventListener("click", function () {
    calculatetip(summ, percent);
    finalsumm(summ, percent);
    summ0nPerson(summ, percent, personcount);
});
