import React from "react";
import { Link } from "react-router-dom";
import Loader from "../btn/loader";
import useUnsplashApi from "../utils/UnsplashApi";

const BuyList = ({ cartItems, removeFromCart }) => {
  return (
    <section className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Buy List</h2>
      <hr className="mb-4" />

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <BuyItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      )}
    </section>
  );
};

const BuyItem = ({ item, removeFromCart }) => {
  const {
    data: unsplashImages,
    loading,
    error,
  } = useUnsplashApi("", "relevant", item.id);

  // const quantity = Number(item.quantity || 1);
  // const priceToAdd = Number(item.priceToAdd || 0);

  return (
    <div className="flex gap-4 mb-6 items-start border-b pb-4">
      {item.image ? (
        <img
          src={item.image}
          alt={item.title || "No title"}
          className="w-24 h-24 object-cover rounded-md"
        />
      ) : loading ? (
        <Loader />
      ) : error ? (
        <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-sm text-red-500">
          ❌
        </div>
      ) : (
        <img
          src={unsplashImages?.[0]?.urls?.small || "fallback.jpg"}
          alt={unsplashImages?.[0]?.alt_description || "No title"}
          className="w-24 h-24 object-cover rounded-md"
        />
      )}

      <div className="flex-1">
        <h3 className="font-semibold">MetalMorph: SKU.{item.id}</h3>
        <p>{item.title || "No title"}</p>
        <p className="text-sm text-gray-600">
          {item.descriptionCard || "Qty: 1; Style: Classic; Size:M: 45x32cm"}{" "}
          <br />
        </p>
        <Link to="/underdeveloped">
          <button className="text-sm text-blue-600 hover:underline mt-1">
            ✏️ Edit
          </button>
        </Link>
      </div>

      <div className="flex flex-col items-end justify-between h-full">
        <button
          className="text-red-500 hover:text-red-600 text-xl cursor-pointer"
          onClick={() => removeFromCart(item.id, item.productNumber)}
        >
          🗑
        </button>
        <p className="text-lg font-semibold">
          {item.quantity && item.priceToAdd != null
            ? `${
                item.quantity *
                  (item.topics?.toLowerCase() === "limited" ||
                  item.topic_submissions
                    ? 399
                    : 299) +
                item.priceToAdd
              }kr`
            : item.topics?.toLowerCase() === "limited" || item.topic_submissions
            ? "399kr"
            : "299kr"}
        </p>
      </div>
    </div>
  );
};

export default BuyList;
