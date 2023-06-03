const footer = document.querySelector(".footer");

document.addEventListener("DOMContentLoaded", () => {
    displayFooter();
});

function displayFooter() {
    createFooter();
}

function createFooter() {

    footer.innerHTML = footer.innerHTML = `
        <div>
            <ul>
            <li><a href="about.html">About us</a></li>
            <li><a href="contact.html">Contact us</a></li>
            </ul>
        </div>`
}

console.log(createFooter);