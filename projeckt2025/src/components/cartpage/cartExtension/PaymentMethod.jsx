import React, { useState } from "react";
import PaymnetIcons from "../PaymnetIcons";
import PayPalButton from "../../btn/PayPal";
import FakeSwishPay from "../../btn/Swish";
import FakeKlarnaPay from "../../btn/Klarna";

export default function PaymentMethod() {
  // const orderTotal = cartItems.reduce((sum, item) => {
  //   const price = item.topics?.toLowerCase() === "limited" ? 299 : 399;
  //   return sum + price;
  // }, 0);
  const [paymentMethod, setPaymentMethod] = useState("card");
  return (
    <section className="max-w-xl mt-10 mx-auto p-4 rounded bg-gray-100 shadow-sm">
      <h2 className="text-center text-xl font-semibold mb-4">
        {" "}
        Choose Payment Method
      </h2>
      <PaymnetIcons />
      <hr className="mt-4" />
      {/* Payment method selection */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Chose method to pay:</label>
        <select
          className="w-full border rounded px-3 py-2"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="card">Card</option>
          <option value="paypal">PayPal</option>
          <option value="swish">Swish</option>
          <option value="klarna">Klarna</option>
        </select>
      </div>

      {/* Show card fields only if "Card" is selected */}
      {paymentMethod === "card" && (
        <>
          {/* Card Holder Name */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">
              Card holder full name
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Card Number</label>
            <input
              type="text"
              placeholder="0000-0000-0000-0000"
              className="w-full border rounded px-3 py-2 text-gray-500 placeholder:text-gray-400"
            />
          </div>

          {/* Expiry & CVV */}
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 border rounded px-3 py-2 placeholder:text-gray-400"
            />
            <input
              type="text"
              placeholder="XXX"
              className="w-1/2 border rounded px-3 py-2 placeholder:text-gray-400"
            />
          </div>
          {/* Checkout button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">
            Checkout now
          </button>
        </>
      )}

      {paymentMethod === "paypal" && (
        <div className="max-w-sm mx-auto mt-3">
          <PayPalButton
            onClick={() => alert("Pretending to pay with PayPal 😄")}
          />
        </div>
      )}

      {paymentMethod === "swish" && (
        <div className="max-w-sm mx-auto mt-3">
          <FakeSwishPay
            onClick={() => alert("Swish-betalning genomförd (låtsas)")}
          />
        </div>
      )}
      {paymentMethod === "klarna" && (
        <div className="max-w-sm mx-auto mt-3">
          <FakeKlarnaPay
            onClick={() => alert("Klarna-betalning genomförd (låtsas)")}
          />
        </div>
      )}
    </section>
  );
}
