import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymnetIcons from "../PaymnetIcons";
import PayPalButton from "../../btn/PayPal";
import FakeSwishPay from "../../btn/Swish";
import FakeKlarnaPay from "../../btn/Klarna";
import PaymentForm from "./PaymentForm";

// Tar emot ref som prop
export default function PaymentMethod({ formValid, paymentMethodRef }) {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  return (
    <>
      {formValid && (
        <section className="max-w-xl mt-10 mx-auto p-4 rounded bg-gray-100 shadow-sm">
          <h2
            className="text-center text-xl font-semibold mb-4"
            ref={paymentMethodRef}
          >
            Choose Payment Method
          </h2>
          <PaymnetIcons />
          <hr className="mt-4" />

          <div className="mb-4">
            <label className="block mb-1 font-medium">
              Choose method to pay:
            </label>
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

          {paymentMethod === "card" && <PaymentForm />}

          {paymentMethod === "paypal" && (
            <div className="max-w-sm mx-auto mt-3">
              <PayPalButton
                onClick={() => {
                  alert("Pretending to pay with PayPal 😄");
                  localStorage.clear();
                  navigate("/");
                }}
              />
            </div>
          )}

          {paymentMethod === "swish" && (
            <div className="max-w-sm mx-auto mt-3">
              <FakeSwishPay
                onClick={() => {
                  alert("Swish-betalning genomförd (låtsas)");
                  localStorage.clear();
                  navigate("/");
                }}
              />
            </div>
          )}

          {paymentMethod === "klarna" && (
            <div className="max-w-sm mx-auto mt-3">
              <FakeKlarnaPay
                onClick={() => {
                  alert("Klarna-betalning genomförd (låtsas)");
                  localStorage.clear();
                  navigate("/");
                }}
              />
            </div>
          )}
        </section>
      )}
    </>
  );
}