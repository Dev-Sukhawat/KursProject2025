const STORAGE_KEY = "cartItems";

// Hämta allt från localStorage
export function getCartItems() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Kontrollera om en bild redan finns i kundvagnen (baserat på id)
export function isInCart(id) {
    return getCartItems().some(item => item.id === id);
}

// Lägg till en bild i kundvagnen
export function addToCart(imageData) {
    const cart = getCartItems();

    if (!isInCart(imageData.id)) {
        cart.push(imageData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }
}

// Ta bort en bild från kundvagnen (baserat på id)
export function removeFromCart(id, productNumber) {

    const updatedCart = getCartItems().filter(
        item => !(item.id === id && item.productNumber === productNumber)
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
}

// Lägg till eller ta bort beroende på om den redan finns
export function toggleCartItem(imageData) {

    if (isInCart(imageData.id)) {
        removeFromCart(imageData.id, imageData.productNumber);
    } else {
        addToCart(imageData);
    }
}
