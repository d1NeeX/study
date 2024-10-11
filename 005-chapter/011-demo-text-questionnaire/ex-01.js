let score = 0;
let question_counter = 0;

let first_answer = prompt(`Вопрос №1. Как переводится dog? [1)кошка; 2)собака]`)
first_answer = first_answer.toLowerCase().trim()
if (first_answer === '1') {
    score = + 10;
    question_counter += 1;
}
else {

    score -= 5;
}

let second_answer = prompt(`Вопрос №2. Как переводится "cat"? [1)собака; 2)кошка]`)
second_answer = second_answer.toLocaleLowerCase().trim()
if (second_answer == `2`) {
    score += 10;
    question_counter += 1;
}
else {
    score -= 5;
}

if (question_counter === 0) {
    alert(`Вы ответили верно на ${question_counter} вопросов`);
}
else if (question_counter === 1) {
    alert(`Вы ответили верно на ${question_counter} вопрос`);
}
else {
    alert(`Вы ответили верно на ${question_counter} вопроса`);
}


alert(`Ваш счет ${score} очков`);