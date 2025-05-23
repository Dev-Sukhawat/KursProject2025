import { useState, useEffect } from "react";

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {
        const stored = localStorage.getItem("cartItems");
        const cartData = stored ? JSON.parse(stored) : [];

        setCartItems(cartData);
    };

    const handleRemove = (idToRemove, productNumberToRemove) => {
        const stored = localStorage.getItem("cartItems");
        if (!stored) return;

        const cartData = JSON.parse(stored);

        const updatedCart = cartData.filter(
            (item) =>
                !(item.id === idToRemove && item.productNumber === productNumberToRemove)
        );

        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        loadCart();
    };

    return {
        cartItems,
        removeFromCart: handleRemove,
        reloadCart: loadCart,
    };
};

export default useCart;
