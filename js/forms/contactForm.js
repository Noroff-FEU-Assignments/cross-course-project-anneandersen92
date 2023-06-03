const form = document.querySelector(".contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

function validateForm() {
    event.preventDefault();

    if (checkLength(name.value, 0)) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(message.value, 49)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function submitForm(event) {
    event.preventDefault;

    if (checkLength(name.value, 0) && validateEmail(email.value) && checkLength(message.value, 49)) {
        form.reset();
    }
}

form.addEventListener("keyup", validateForm);

form.addEventListener("submit", submitForm);