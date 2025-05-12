import { useState, useEffect } from "react";
import Data from "../../data/data.json";

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {
        const stored = localStorage.getItem("cartItems");
        const cartData = stored ? JSON.parse(stored) : [];

        const productNumbers = cartData.map((item) => item.productNumber);

        const matchedItems = Data.filter((item) =>
            productNumbers.includes(item.productNumber)
        );

        setCartItems(matchedItems);
    };

    const handleRemove = (productNumberToRemove) => {
        const stored = localStorage.getItem("cartItems");
        if (!stored) return;

        const cartData = JSON.parse(stored);

        const updatedCart = cartData.filter(
            (item) => item.productNumber !== productNumberToRemove
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
