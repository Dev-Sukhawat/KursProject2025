import React from "react";
// import useCart from "../utils/useCart.js";
import { Link } from "react-router-dom";

const BuyList = ({cartItems, removeFromCart}) => {
  // const { cartItems, removeFromCart } = useCart();

  return (
    <section className="max-w-xl mx-auto p-4">
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
              <h3 className="font-semibold">MetalMorph: No{item.id}.</h3>
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
                onClick={() => removeFromCart(item.productNumber)}
              >
                🗑
              </button>
              <p className="text-lg font-semibold">
                {item.topics === "Limited" || item.topics === "limited"
                  ? "299kr"
                  : "399kr"}{" "}
              </p>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default BuyList;
