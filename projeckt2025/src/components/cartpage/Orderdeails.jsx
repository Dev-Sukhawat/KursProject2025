import React from "react";
import useCart from "../utils/useCart.js";
import GoBackButton from "../btn/goBackHome.jsx";
import Visa from "../../assets/img/logo/visa.svg";
import Mastercard from "../../assets/img/logo/mastercard.svg";
import Paypal from "../../assets/img/logo/paypal.svg";
import Swish from "../../assets/img/logo/swish.svg";
import Klarna from "../../assets/img/logo/klarna.svg";

export default function Orderdeails() {
  const { cartItems } = useCart();
  return (
    <section className="max-w-xl mx-auto p-4 items-center justify-center">
      {cartItems.length === 0 ? (
        <GoBackButton />
      ) : (
        cartItems.map((item) => (
          <div>
            <h2 className="text-xl font-semibold mb-4">Orderdeails</h2>
            <hr />
            {/* Country Selector */}
            <div className="flex justify-between items-center mb-2">
              <label>Ship to:</label>
              <select className="border rounded-full px-4 py-1">
                <option>Sweden</option>
                {/* fler länder om du vill */}
              </select>
            </div>
            {/* Item total */}
            <div className="flex justify-between items-center mb-2">
              <span>Item total:</span>
              <ul>
                <li>299.00kr</li>
                <li>299.00kr</li>
                <li>299.00kr</li>
              </ul>
            </div>
            {/* Delivery method */}
            <div className="flex justify-between items-center mb-2">
              <label>Delivery method:</label>
              <select className="border rounded-full px-4 py-1">
                <option>Postnord</option>
                {/* fler alternativ */}
              </select>
            </div>
            {/* Shipping cost */}
            <div className="flex justify-between items-center mb-2">
              <span>Shipping:</span>
              <span>20.00kr</span>
            </div>
            <hr className="my-2" />
            {/* Order total */}
            <div className="flex justify-between items-center font-semibold mb-2">
              <span>Order total:</span>
              <span>319.00kr</span>
            </div>
            {/* Discount link */}
            <p className="text-sm text-blue-600 underline mb-4 cursor-pointer">
              Discount code or eGift card
            </p>
            {/* Membership box */}
            <div className="flex items-center p-2 bg-blue-100 rounded mb-4">
              <input type="checkbox" className="mr-2" />
              <p className="text-sm">
                Become a <strong>MetalMorph Member</strong> to get{" "}
                <strong>free shipping</strong>
              </p>
            </div>
            {/* Checkout button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">
              Checkout
            </button>
            {/* Payment icons */}
            <div className="flex justify-between items-center mt-4 px-2">
              <img
                className="place-self-center self-center h-5 md:h-8"
                src={Visa}
                alt="Visa Logo"
              />
              <img
                className="place-self-center self-center h-8 mix-blend-multiply"
                src={Mastercard}
                alt="Mastercard Logo"
              />
              <img
                className="place-self-center self-center h-5 md:h-8"
                src={Paypal}
                alt="Paypal Logo"
              />
              <img
                className="place-self-center self-center h-5 md:h-8"
                src={Swish}
                alt="Swish Logo"
              />
              <img
                className="place-self-center self-center h-5 md:h-8"
                src={Klarna}
                alt="Klarna Logo"
              />
            </div>
          </div>
        ))
      )}
    </section>
  );
}
