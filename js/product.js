import { products } from "./data/productList.js";

const id = new URLSearchParams(window.location.search).get("id");

const productContainer = document.querySelector(".product-container");
const details = (products[id]);
const allSizes = ["XS", "S", "M", "L", "XL"];

function generateSizes(sizes) {
    return sizes.map(size => {
        let hello = details.sizes.some(s => s.size === size && s.quantity > 0);
        return `<div class="${hello}" data-value="${size}">
                    <p>${size}</p>
                </div>`
    })
};

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
        ${generateSizes(allSizes)}
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

const current = document.querySelector(".current");

current.innerHTML = `${details.collection} ${details.style}`

document.title = `${details.collection} ${details.style}`;


const addToCartButton = document.querySelector(".add-to-cart")
const cartIcon = document.querySelector(".cart-icon");

addToCartButton.onclick = function () {
    addToCartButton.innerHTML = "Item added to cart";
    addToCartButton.classList.add("clicked");

    const delay = 3000;

    setTimeout(function () {
        addToCartButton.innerHTML = "Add to cart";
        addToCartButton.classList.remove("clicked");
    }, delay);
};