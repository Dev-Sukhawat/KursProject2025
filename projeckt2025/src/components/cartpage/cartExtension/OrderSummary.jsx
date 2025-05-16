import React from "react";
// import { GetShippingCost } from "../Orderdetails";

export default function OrderSummary({ cartItems,shippingCost }) {
  const totalItems = cartItems.length;
  const orderTotal = cartItems.reduce((sum, item) => {
    const price = item.topics?.toLowerCase() === "limited" ? 299 : 399;
    return sum + price;
  }, 0);
console.log(shippingCost);
// console.log(cartItems);

  const total = orderTotal + 20;

  return (
    <section className="max-w-xl mx-auto p-4 rounded bg-gray-100 shadow-sm">
      <h2 className="text-center text-xl font-semibold mb-4">Order summary</h2>

      {/* Item Total */}
      <div className="flex justify-between font-medium border-b pb-1">
        <span>Item total:</span>
        <span>{totalItems} Item</span>
      </div>

      {/* Item Info */}
      {cartItems.map((item) => (
        <div
          key={item.productNumber}
          className="flex gap-4 mb-6 items-start border-b pb-4"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-cover rounded"
          />

          {/* Info Block */}
          <div className="flex-1">
            <div className="flex justify-between font-medium">
              <h3 className="font-semibold">MetalMorph: No{item.id}.</h3>
              <span className="whitespace-nowrap">
                {item.topics?.toLowerCase() === "limited" ? "299 kr" : "399 kr"}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {item.description} Qty: 1; Style: Basic; Size: 45x32cm
            </p>
          </div>
        </div>
      ))}

      {/* Shipping */}
      <div className="flex justify-between py-1 border-b font-medium">
        <span>Shipping:</span>
        <span>{shippingCost.value}kr</span>
      </div>

      {/* Total */}
      <div className="flex justify-between pt-2 font-semibold text-lg">
        <span>Order total:</span>
        <span>{total.toFixed(2)}kr</span>
      </div>
    </section>
  );
}