function calculatetip(summary, percent) {
    let sum = Number.parseFloat(summary);
    let per = Number.parseFloat(percent);
    const tip = document.getElementById("tipAmount");
    let total_tip = sum * per / 100;
    tip.textContent = total_tip.toFixed(2);
}

function finalsumm(summary, percent) {
    let sum = Number.parseFloat(summary);
    let per = Number.parseFloat(percent);
    const fnsum = document.getElementById("totalAmount");
    let summ = sum + (sum * per / 100);
    fnsum.textContent = summ.toFixed(2);
    return summ;  // Возвращаем общую сумму для использования в других функциях
}

function summ0nPerson(summary, percent, n) {
    let sum = Number.parseFloat(summary);
    let per = Number.parseFloat(percent);
    let count = Number.parseFloat(n);
    const personsum = document.getElementById("perPersonAmount");
    let person_sum = finalsumm(sum, per) / count;
    personsum.textContent = person_sum.toFixed(2);
}

const cb = document.getElementById("calculateButton");
cb.addEventListener("click", function () {
    let summ = document.getElementById("billAmount").value;
    let percent = document.getElementById("tipPercentage").value;
    let personcount = document.getElementById("numberOfPeople").value;

    calculatetip(summ, percent);
    finalsumm(summ, percent);
    summ0nPerson(summ, percent, personcount);
});
