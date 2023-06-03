const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");

function validateForm() {
    event.preventDefault();

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkPassword(password.value, 8)) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function checkPassword(value, len) {
    if (value.trim().length === len) {
        return true;
    } else {
        return false;
    }
}

function submitForm(event) {
    event.preventDefault;

    if (validateEmail(email.value) && checkPassword(password.value, 8)) {
        form.reset();
    }
}

form.addEventListener("submit", validateForm);

form.addEventListener("submit", submitForm);

console.log(password);