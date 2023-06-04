import { products } from "./data/productList.js";

const productsContainer = document.querySelector(".products-container");
const womenProducts = document.querySelector(".women-products");
const menProducts = document.querySelector(".men-products");
const alphaProducts = document.querySelector(".alpha-products");

for (let i = 0; i < products.length; i++) {

    const product = products[i];

    if (womenProducts && product.gender === "women") {
        createHtml(product);
    } else if (menProducts && product.gender === "men") {
        createHtml(product);
    } else if (alphaProducts && product.collection === "alpha") {
        createHtml(product);
    }

};

function createHtml(product) {
    productsContainer.innerHTML += `<a href="product.html?id=${product.id}" class="product-card">
                                            <div class="image-container">
                                                <img src="${product.imageUrl}" alt="${product.altText}">
                                            </div>
                                            <div class="product-details">
                                                <p class="name"><span class="product-name">${product.collection}</span> ${product.style} ${product.gender}</p>
                                                <p class="color">${product.color}</p>
                                            </div>
                                            <p class="price">NOK ${product.price}</p>
                                            <button class="cta" aria-label="view product">View</button>
                                        </a>`;
};