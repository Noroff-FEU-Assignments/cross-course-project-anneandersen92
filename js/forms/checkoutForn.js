const form = document.querySelector(".checkout-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip-error");
const city = document.querySelector("#city");
const cityError = document.querySelector("#city-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const confirmationMessage = document.querySelector(".confirmation-message");
const h1 = document.querySelector("h1");
const cartTotal = document.querySelector(".cart-total");
const shippingDetails = document.querySelector(".shipping-details");

function validateForm() {
    event.preventDefault();

    if (checkLength(name.value, 0)) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (checkLength(address.value, 9)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (zip.value.length === 5) {
        zipError.style.display = "none";
    } else {
        zipError.style.display = "block";
    }

    if (checkLength(city.value, 0)) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
};

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
};

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

function submitForm(event) {
    event.preventDefault;

    if (checkLength(name.value, 0) && checkLength(address.value, 9) && (zip.value.length === 5) && checkLength(city.value, 0) && validateEmail(email.value)) {
        confirmationMessage.style.display = "block";
        h1.style.display = "none";
        cartTotal.style.display = "none";
        shippingDetails.style.display = "none";
        document.title = "Order complete";
        form.reset();
    }
};

form.addEventListener("keyup", validateForm);
form.addEventListener("submit", validateForm);

form.addEventListener("submit", submitForm);