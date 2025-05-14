import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // Valideringslogik
  const isValidName = name.trim().split(/\s+/).length >= 2;
  const isValidCardNumber = cardNumber.replace(/\D/g, "").length === 16;
  const isValidExpiry = /^\d{2}\/\d{2}$/.test(expiry);
  const isValidCvv = /^\d{3}$/.test(cvv);

  const isFormValid =
    isValidName && isValidCardNumber && isValidExpiry && isValidCvv;

  const handleCheckout = () => {
    localStorage.clear();
    alert("Tack för ditt köp!");
    navigate("/");
  };

  return (
    <>
      {/* Card Holder Name */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Card holder full name:</label>
        <input
          type="text"
          placeholder="F.ex: John Smith"
          value={name}
          className="w-full border rounded px-3 py-2"
          onInput={(e) => {
            const clean = e.target.value.replace(/[^a-zA-ZåäöÅÄÖ\s]/g, "");
            setName(clean);
          }}
        />
      </div>

      {/* Card Number */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Card Number:</label>
        <input
          type="text"
          inputMode="numeric"
          maxLength={19}
          placeholder="0000-0000-0000-0000"
          value={cardNumber}
          className="w-full border rounded px-3 py-2 text-gray-500 placeholder:text-gray-400"
          onInput={(e) => {
            const digits = e.target.value.replace(/\D/g, "");
            const formatted = digits
              .replace(/(.{4})/g, "$1-")
              .replace(/-$/, "");
            setCardNumber(formatted);
          }}
        />
      </div>

      {/* Expiry & CVV */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="MM/YY"
          value={expiry}
          className="w-1/2 border rounded px-3 py-2 placeholder:text-gray-400"
          onInput={(e) => {
            const value = e.target.value
              .replace(/[^0-9]/g, "")
              .replace(/^(\d{2})(\d{1,2})?/, (match, p1, p2) =>
                p2 ? `${p1}/${p2}` : p1
              );
            setExpiry(value);
          }}
        />
        <input
          type="text"
          inputMode="numeric"
          maxLength={3}
          placeholder="CVV"
          value={cvv}
          className="w-1/2 border rounded px-3 py-2 placeholder:text-gray-400"
          onInput={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setCvv(value);
          }}
        />
      </div>

      {/* Checkout button */}
      <button
        disabled={!isFormValid}
        onClick={handleCheckout}
        className={`w-full py-2 rounded font-semibold transition ${
          isFormValid
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-400 text-white cursor-not-allowed"
        }`}
      >
        Checkout now
      </button>
    </>
  );
}
