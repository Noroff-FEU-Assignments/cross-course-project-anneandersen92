import { products } from "./data/products.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const productContainer = document.querySelector(".product-container");
const details = (products[id]);

const sizeRange = ["XS", "S", "M", "L", "XL"];

const sizes = sizeRange.map(size => {
    let sizeHtml = `<p>${size}</p>`;
    return sizeHtml;
});

productContainer.innerHTML = `<div class="image-container">
                                    <img src="${details.imageUrl}" alt="${details.altText}"/>
                                </div>
                                <div class="product-details">
                                    <h1>${details.collection} ${details.style}</h1>
                                    <p class="color">${details.color}</p>
                                    <ul class="description-short>
                                        <li>${details.descriptionShort}</li>
                                    </ul>
                                </div>
                                <div class="price">
                                    <p>${details.price}</p>
                                </div>
                                <div class="size-bar">
                                    ${sizes}
                                </div>
                                <div class="btn-area">
                                    <a href="#" class="cta" aria-label="add product to cart">Add to cart</a>
                                </div>
                                <div class="description-container">
                                    <p class="description-heading">Product description</p>
                                    <div class="description-text">
                                        <p>${details.description}</p>
                                    </div>
                                </div>`;


const current = document.querySelector(".current");

current.innerHTML = `${details.collection} ${details.style}`