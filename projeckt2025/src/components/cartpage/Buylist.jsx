import React, { useEffect, useState } from "react";
import Data from "../../data/data.json";
import { Link } from "react-router-dom";

const BuyList = () => {
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

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Buy List</h2>
      <hr className="mb-4" />

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.productNumber}
            className="flex gap-4 mb-6 items-start border-b pb-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-auto object-cover rounded-md"
            />

            <div className="flex-1">
              <h3 className="font-semibold">MetalMorph</h3>
              <p>{item.title}</p>
              <p className="text-sm text-gray-600">
                {item.description}"Qty: 1; Style: Basic; Size: 45x32cm"
              </p>
              <Link to={"/underdeveloped"}>
                <button className="text-sm text-blue-600 hover:underline mt-1">
                  ✏️ Edit
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-end justify-between h-full">
              <button
                className="text-red-500 hover:text-red-600 text-xl cursor-pointer"
                onClick={() => handleRemove(item.productNumber)}
              >
                🗑
              </button>
              <p className="text-lg font-semibold">{item.price} 299kr</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BuyList;
