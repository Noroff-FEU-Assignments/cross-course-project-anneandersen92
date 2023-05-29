import { productList } from "./data/productList.js";

const featured = document.querySelector(".featured-slider");

for (let i = 0; i <productList.length; i++) {
    
    const product = productList [i];

    if (product.featured === true) {
        createHtml(product);
    }
}

function createHtml(product) {
    featured.innerHTML += `<a href="product.html?id=${product.id}&name=${product.collection}" class="featured">
                                <img src="${product.imageUrl}" alt="${product.altText}">
                                <p><span class="product-name">${product.collection}</span> ${product.style} ${product.gender}</p>
                                <p class="price">NOK ${product.price}</p>
                                <div class="btn-area">
                                    <button class="cta" aria-label="view product">View</button>
                                </div>
                                </a>`;
}