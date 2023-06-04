import { products } from "./data/productList.js";

const id = new URLSearchParams(window.location.search).get("id");

const productContainer = document.querySelector(".product-container");
const details = (products[id]);

productContainer.innerHTML = `
    <div class="image-container">
        <img class="image" src="${details.imageUrl}" alt="${details.altText}"/>
    </div>
    <div class="product-details">
        <h1 class="name"><span class="product-name">${details.collection}</span> ${details.style}</h1>
        <p class="color">${details.color}</p>
        <ul class="description-short">
            <li>${details.descriptionShort[0]}</li>
            <li>${details.descriptionShort[1]}</li>
            <li>${details.descriptionShort[2]}</li>
        </ul>
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

current.innerHTML = `${details.collection} ${details.style}`
gender.innerHTML = `<a href="${details.gender}.html">${details.gender}</a> /`
document.title = `${details.collection} ${details.style}`;

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