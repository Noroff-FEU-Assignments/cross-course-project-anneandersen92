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
    const price = product.getElementsByClassName("price")[0].innerText.replace("NOK", "");
    const image = product.getElementsByClassName("image")[0].src;
    const color = product.getElementsByClassName("color")[0].innerText;

    addItemToCart(productName, price, image, color);
    updateCartTotal();
}

function updateCartTotal() {
    const cartItemsContainer = document.getElementsByClassName("cart-items-container")[0];
    const cartItems = cartItemsContainer.getElementsByClassName("cart-item");
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        const priceElement = cartItem.getElementsByClassName("price")[0];
        const quantityElement = cartItem.getElementsByClassName("quantity-input")[0];
        const price = parseFloat(priceElement.innerText.replace("NOK", ""));
        const quantity = quantityElement.value;
        total += (price * quantity);
    }

    document.getElementsByClassName("total-price")[0].innerText = "NOK " + total;
}