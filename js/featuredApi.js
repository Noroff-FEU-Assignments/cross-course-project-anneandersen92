import { url, consumerKey, consumerSecret } from "./data/api.js";
import { displayError } from "./components/errorMessage.js";

const completeUrl = url + "?per_page=20" + "&" + consumerKey + "&" + consumerSecret;

const featured = document.querySelector(".featured-slider");

async function fetchProducts() {
    try {
        const response = await fetch(completeUrl);
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
                                        <p><span class="product-name">${product.categories[0].slug}</span> ${product.categories[1].slug} ${product.categories[2].slug}</p>
                                        <p class="price">NOK ${product.price}</p>
                                        <div class="btn-area">
                                            <button class="cta" aria-label="view product">View</button>
                                        </div>
                                    </a>`;
        };

    } catch (error) {
        featured.innerHTML = displayError("An error occured when calling the API");
    }
}

fetchProducts();