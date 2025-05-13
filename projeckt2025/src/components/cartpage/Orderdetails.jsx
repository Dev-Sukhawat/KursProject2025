import React, { useState } from "react";
// import useCart from "../utils/useCart.js";
import CustomDropdown from "../utils/CustomDropdown.jsx";
import EuropeCountries from "../../data/europeCountries.json";
import DeliveryOptions from "../../data/deliveryService.json";
import GoBackButton from "../btn/GoBackButton.jsx";
import PaymnetIcons from "./PaymnetIcons.jsx";
import Membership from "./Membership.jsx";
import DiscontCode from "../btn/DiscontCode.jsx";

export default function Orderdeails({
  cartItems,
  onCheckout,
  setSelectedCountry,
}) {
  // const { cartItems, reloadCart } = useCart();

  const orderTotal = cartItems.reduce((sum, item) => {
    const price = item.topics?.toLowerCase() === "limited" ? 299 : 399;
    return sum + price;
  }, 0);

  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const handleDeliveryChange = (value) => {
    setSelectedDelivery(value);
  };

  const getShippingCost = () => {
    const method = DeliveryOptions.find((e) => e.value === selectedDelivery);

    if (!method || method.cost === "null") {
      return { display: "0.00kr", value: 0 };
    }

    if (method.cost === "free") {
      return { display: "Free", value: 0 };
    }

    const numeric = parseFloat(method.cost);
    return {
      display: `${numeric.toFixed(2)}kr`,
      value: numeric,
    };
  };
  return (
    <section className="max-w-xl mx-auto p-4 items-center justify-center">
      {cartItems.length === 0 ? (
        <GoBackButton />
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Orderdeails</h2>
          <hr />
          {/* Country Selector */}
          <div className="flex mt-4 justify-between items-center mb-2">
            <label>Ship to:</label>
            <CustomDropdown
              defaultLabel="Country"
              options={EuropeCountries}
              onChange={handleCountryChange}
            />
          </div>
          {/* Item total */}
          <div className="grid grid-flow-col justify-between items-start mb-2">
            <span className="">Item total:</span>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="mb-2">
                  <div className="grid justify-items-center">
                    <span>No.{item.id}</span>
                    <span className="text-lg">
                      {item.topics?.toLowerCase() === "limited"
                        ? "299kr"
                        : "399kr"}
                    </span>
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label>Delivery method:</label>
              <CustomDropdown
                defaultLabel="Delivery"
                options={DeliveryOptions}
                onChange={handleDeliveryChange}
              />
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Shipping:</span>
              <span>{getShippingCost().display}</span>
            </div>
          </div>
          <hr className="my-2" />
          {/* Order total */}
          <div className="flex justify-between items-center font-semibold mb-2">
            <span>Order total:</span>
            <span>{(orderTotal + getShippingCost().value).toFixed(2)}kr</span>
          </div>
          <DiscontCode />
          <Membership />
          {/* Checkout button */}
          <button
            onClick={onCheckout}
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            Checkout
          </button>
          <PaymnetIcons />
        </div>
      )}
    </section>
  );
}
