import { useState, useEffect } from "react";

function useLocalItemList(storageKey) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem(storageKey);
        setItems(stored ? JSON.parse(stored) : []);
    }, [storageKey]);

    const saveItems = (newItems) => {
        localStorage.setItem(storageKey, JSON.stringify(newItems));
        setItems(newItems);
    };

    const isInList = (id, productNumber) => {
        return items.some((item) => item.id === id && item.productNumber === productNumber);
    };

    const addItem = (id, productNumber) => {
        if (!isInList(id, productNumber)) {
            const updated = [...items, { id, productNumber }];
            saveItems(updated);
        }
    };

    const removeItem = (id, productNumber) => {
        const updated = items.filter(
            (item) => !(item.id === id && item.productNumber === productNumber)
        );
        saveItems(updated);
    };

    const toggleItem = (id, productNumber) => {
        isInList(id, productNumber)
            ? removeItem(id, productNumber)
            : addItem(id, productNumber);
    };

    return {
        items,
        isInList,
        addItem,
        removeItem,
        toggleItem,
    };
}

export default useLocalItemList;
