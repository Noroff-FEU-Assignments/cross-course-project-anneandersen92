import { productList } from "./data/productList.js";

const productListContainer = document.querySelector(".product-list-container");
const womenProducts = document.querySelector(".women-products");
const menProducts = document.querySelector(".men-products");
const alphaProducts = document.querySelector(".alpha-products");

for (let i = 0; i <productList.length; i++) {
    
    const product = productList [i];

    if (womenProducts && product.gender === "women") {
        createHtml(product);
    } else if (menProducts && product.gender === "men") {
        createHtml(product);
    } else if (alphaProducts && product.collection === "alpha") {
        createHtml(product);
    }
    
}

function createHtml(product) {
    productListContainer.innerHTML += `<a href="product.html?id=${product.id}&name=${product.collection}" class="product-card">
                                            <div class="image-container">
                                                <img src="${product.imageUrl}" alt="Atom hoody, women, beige">
                                            </div>
                                            <div class="product-details">
                                                <p class="name"><span class="upper">${product.collection}</span> ${product.style} ${product.gender}</p>
                                                <p class="description">${product.descriptonShort}</p>
                                                <p class="color">${product.color}</p>
                                            </div>
                                            <p class="price">NOK ${product.price}</p>
                                            <button class="cta" aria-label="view product">View</button>
                                        </a>`;
}