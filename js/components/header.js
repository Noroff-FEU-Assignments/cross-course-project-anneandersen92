const header = document.querySelector(".header");

document.addEventListener("DOMContentLoaded", () => {
    displayHeader();
});

function displayHeader() {
    createHeader();
};

function createHeader() {
    header.innerHTML = header.innerHTML = `
        <div class="header-wrapper">
            <a class="logo1" href="index.html"><img class="logo1" src="images/logo.png" alt="The Rainydays logo"/></a>
            <a class="logo2" href="index.html"><img class="logo2" src="images/logo_inverted.jpg" alt="The Rainydays logo"/></a>
            <div class="icons">
                <a href="login.html">
                    <span class="material-icons-outlined" title="User account" aria-label="user account icon">person</span>
                </a>
                <span class="screenreader-text">User account</span>
                <a href="cart.html">
                    <span class="count"></span>
                    <span class="material-icons-outlined cart-icon" title="Shopping cart" aria-label="shopping cart icon">shopping_cart</span>
                </a>
                <span class="screenreader-text">Shopping cart</span>
            </div>
            <div class="menu">
                <label for="hamburger"><span class="material-icons-outlined" title="Menu" aria-label="menu icon">menu</span></label>
                <input type="checkbox" id="hamburger" />
                <nav class="hamnav">
                    <div class="hamitems">
                    <a href="women.html">Women</a>
                    <a href="men.html">Men</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
                    </div>
                </nav>
            </div>
        </div>
        <div class="search-wrapper">
            <input type="text" placeholder="Search" />
            <span class="material-icons-outlined search-icon" title="Search" aria-label="search icon">search</span>
        </div>`
};