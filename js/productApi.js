import { url, consumerKey, consumerSecret } from "./data/api.js";
import { displayError } from "./components/errorMessage.js";


const productContainer = document.querySelector(".product-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


console.log(id);

const singleUrl = url + "/" + id + "?" + consumerKey + "&" + consumerSecret;


async function fetchProduct() {
    try {
        const response = await fetch(singleUrl);
        const details = await response.json();

        productContainer.innerHTML = "";

        createHtml(details);

    } catch (error) {
        productContainer.innerHTML = displayError("An error occured when calling the API");
    }
}

function createHtml(details) {
    productContainer.innerHTML = `<div class="image-container">
                                        <img class="image" src="${details.images[0].src}" alt="${details.images[0].alt}"/>
                                    </div>
                                    <div class="product-details">
                                        <h1 class="name"><span class="product-name">${details.categories[0].slug}</span> ${details.categories[1].slug}</h1>
                                        <p class="color">${details.default_attributes[0].option}</p>
                                        <ul class="description-short">${details.short_description}</ul>
                                        <p class="price">NOK ${details.price}</p>
                                    </div>
                                    <div class="size-bar">
                                        <input type="radio" id="xs" name="size">
                                        <label for="xs" class="size">XS</label>
                                        <input type="radio" id="s" name="size">
                                        <label for="s" class="size">S</label>
                                        <input type="radio" id="m" name="size">
                                        <label for="m" class="size">M</label>
                                        <input type="radio" id="l" name="size">
                                        <label for="l" class="size">L</label>
                                        <input type="radio" id="xl" name="size">
                                        <label for="xl" class="size">XL</label>
                                    </div>
                                    <div class="btn-area">
                                        <button class="cta add-to-cart" aria-label="add product to cart">Add to cart</button>
                                    </div>
                                    <div class="description-container">
                                        <p class="description-heading">Product description</p>
                                        <div class="description-text">
                                            <p>${details.description}</p>
                                        </div>
                                    </div>`;

    const gender = document.querySelector(".gender");
    const current = document.querySelector(".current");

    console.log(details.categories[2].slug)

    gender.innerHTML = `<a href="${details.categories[2].slug}.html">${details.categories[2].slug}</a> /`
    current.innerHTML = `${details.categories[0].slug} ${details.categories[1].slug}`
    document.title = `Rainydays | ${details.categories[0].slug} ${details.categories[1].slug}`;

    const addToCartButton = document.querySelector(".add-to-cart")

    addToCartButton.onclick = function () {
        addToCartButton.innerHTML = "Item added to cart";
        addToCartButton.classList.add("clicked");

        const delay = 3000;

        setTimeout(function () {
            addToCartButton.innerHTML = "Add to cart";
            addToCartButton.classList.remove("clicked");
        }, delay);
    };
}


fetchProduct();