import { url } from "./data/api.js";
import { displayError } from "./components/errorMessage.js";

const featured = document.querySelector(".featured-slider");

async function fetchProducts() {
    try {
        const response = await fetch(url);
        const products = await response.json();

        featured.innerHTML = "";

        for (let i = 0; i < products.length; i++) {

            const product = products[i];

            if (product.featured === true) {
                createHtml(product);
            }
        };

        function createHtml(product) {
            featured.innerHTML += `<a href="product.html?id=${product.id}" class="product-card">
                                        <img src="${product.images[0].src}" alt="${product.images[0].alt}">
                                        <p><span class="product-name">${product.categories[0].name}</span> ${product.categories[1].name} ${product.categories[2].name}</p>
                                        <p class="price">NOK ${product.price}</p>
                                        <div class="btn-area">
                                            <button class="cta" aria-label="view product">View</button>
                                        </div>
                                    </a>`;
        };

    } catch (error) {
        productsContainer.innerHTML = displayError("An error occured when calling the API");
    }
}

fetchProducts();