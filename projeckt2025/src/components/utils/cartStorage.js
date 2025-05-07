const STORAGE_KEY = "cartItems";

export function getCartItems() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function isInCart(id, productNumber) {
    const cart = getCartItems();
    return cart.some(item => item.id === id && item.productNumber === productNumber);
}

export function addToCart(id, productNumber) {
    const cart = getCartItems();
    if (!isInCart(id, productNumber)) {
        cart.push({ id, productNumber });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }
}

export function removeFromCart(id, productNumber) {
    const cart = getCartItems().filter(
        item => !(item.id === id && item.productNumber === productNumber)
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function toggleCartItem(id, productNumber) {
    if (isInCart(id, productNumber)) {
        removeFromCart(id, productNumber);
    } else {
        addToCart(id, productNumber);
    }
}