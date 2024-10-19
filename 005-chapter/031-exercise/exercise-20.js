const readlineSync = require('readline-sync');

let email_address = readlineSync.question();

function EmailValidation(email) {
    if (email.indexOf("@") !== -1 && email.indexOf(".") !== -1) {
        return "Email корректен";
    }
    else {
        return "Email некорректен"
    }
}

console.log(EmailValidation(email_address));