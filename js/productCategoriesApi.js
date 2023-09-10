import { displayError } from "./components/errorMessage.js";


const consumerKey = "consumer_key=ck_c3e095fad5b4ed9cbd65cf25536f8b44c0ef549a";
const consumerSecret = "consumer_secret=cs_fef4c836226901998fbd21cbbd809d0b7c007213";
const url = "https://annesflower.no/rainydays/wp-json/wc/v3/products" + "?" + consumerKey + "&" + consumerSecret;

const productsContainer = document.querySelector(".products-container");
const womenProducts = document.querySelector(".women-products");
const menProducts = document.querySelector(".men-products");
const alphaProducts = document.querySelector(".alpha-products");

async function fetchProducts() {
    try {
        const response = await fetch(url);
        const products = await response.json();

        productsContainer.innerHTML = "";

        for (let i = 0; i < products.length; i++) {

            const product = products[i];

            if (womenProducts && product.categories[2].name.toLowerCase() === "women") {
                createHtml(product);
            } else if (menProducts && product.categories[2].name.toLowerCase() === "men") {
                createHtml(product);
            } else if (alphaProducts && product.categories[0].name.toLowerCase() === "alpha") {
                createHtml(product);
            }
        };

        function createHtml(product) {
            productsContainer.innerHTML += `<a href="product.html?id=${product.id}" class="product-card">
                                              <div class="image-container">
                                                  <img src="${product.images[0].src}" alt="${product.images[0].alt}">
                                              </div>
                                              <div class="product-details">
                                                  <p class="name"><span class="product-name">${product.categories[0].name}</span> ${product.categories[1].name} ${product.categories[2].name}</p>
                                                  <p class="color">${product.default_attributes[0].option}</p>
                                              </div>
                                              <p class="price">NOK ${product.price}</p>
                                              <button class="cta" aria-label="view product">View</button>
                                          </a>`;
        };

    } catch (error) {
        productsContainer.innerHTML = displayError("An error occured when calling the API");
    }
}

fetchProducts();



