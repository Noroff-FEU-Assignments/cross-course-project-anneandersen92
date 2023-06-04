if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    const removeItem = document.getElementsByClassName("remove-item");
    for (let i = 0; i < removeItem.length; i++) {

        const removeButton = removeItem[i];

        removeButton.addEventListener("click", removeCartItem)
    }

    const quantityInputs = document.getElementsByClassName("quantity-input")
    for (let i = 0; i < quantityInputs.length; i++) {
        const input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }

    const addToCartButtons = document.getElementsByClassName("add-to-cart");
    for (let i = 0; i < addToCartButtons.length; i++) {
        const addToCart = addToCartButtons[i];
        addToCart.addEventListener("click", addToCartClicked)
    }
}

function removeCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    const input = event.target;

    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }

    updateCartTotal();
}

function addToCartClicked(event) {
    const addToCart = event.target;
    const product = addToCart.parentElement.parentElement;
    const productName = product.getElementsByClassName("name")[0].innerText;
    const price = product.getElementsByClassName("price")[0].innerText.replace("NOK", "").replace(".", "");
    const image = product.getElementsByClassName("image")[0].src;

    addItemToCart(productName, price, image);
}

function addItemToCart(productName, price, image) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    const cartItems = document.getElementsByClassName("cart-items-container")[0];
    const cartItemContent = `
        <div class="image-container">
            <a href="atomwbeige.html"><img src="images/products/womens_beige.png" alt="Atom Hoody, women, beige"/></a>
        </div>
        <div class="item-info-container">
            <div class="item-description">
            <a href="atomwbeige.html"><p><span class="item-name">Atom</span> Hoody</p></a>
            <p class="small color">Ambient beige</p>
            <p class="size">Size M</p>
            </div>
            <div class="item-actions">
            <button class="cart-icon remove-item" title="Remove from cart" aria-label="remove from cart icon"><span class="material-icons-outlined cart-icon">close</span></button>
            </div>
        </div>
        <div class="item-info-footer">
            <div class="quantity-container">
            <button class="cart-icon subtract-icon" title="Subtract item" aria-label="subtract item icon"><span class="material-icons-outlined cart-icon">remove_circle_outline</span></button>
            <input class="quantity-input small" type="number" value="2">
            <button class="cart-icon add-icon" title="Add item" aria-label="add item"><span class="material-icons-outlined cart-icon">add_circle_outline</span></button>
            </div>
            <div class="price-container">
            <p class="price">NOK 1.000</p>
            </div>
        </div>`
    cartItem.innerHTML = cartItemContent;
    cartItems.append(cartItem);
}

function updateCartTotal() {
    const cartItemsContainer = document.getElementsByClassName("cart-items-container")[0];
    const cartItems = cartItemsContainer.getElementsByClassName("cart-item");
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        const priceElement = cartItem.getElementsByClassName("price")[0];
        const quantityElement = cartItem.getElementsByClassName("quantity-input")[0];

        const price = parseFloat(priceElement.innerText.replace("NOK", "").replace(".", ""));
        const quantity = quantityElement.value;
        total += (price * quantity);
    }

    document.getElementsByClassName("total-price")[0].innerText = "NOK " + total;
}