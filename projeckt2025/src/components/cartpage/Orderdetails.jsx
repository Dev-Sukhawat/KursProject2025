import React, { useState, useEffect } from "react";
import CustomDropdown from "../utils/CustomDropdown.jsx";
import useFetch from "../utils/useFetch.js";
import GoBackButton from "../btn/GoBackButton.jsx";
import PaymnetIcons from "./PaymnetIcons.jsx";
import Membership from "./Membership.jsx";
import DiscontCode from "../btn/DiscontCode.jsx";

export default function Orderdeails({
  cartItems,
  onCheckout,
  selectedCountry,
  setSelectedCountry,
  setShippingCost,
  shippingCost,
}) {
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

  const {
    data: EuropeCountries,
    loading,
    error,
  } = useFetch("/api/europeCountries"); // fixed path

  const {
    data: DeliveryOptions,
    loading: loadingDelivery,
    error: errorDelivery,
  } = useFetch("/api/deliveryService"); // fixed variable names

  useEffect(() => {
    if (!DeliveryOptions) return; // Don't run if data not loaded yet

    const newCost = () => {
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

    setShippingCost(newCost());
  }, [selectedDelivery, DeliveryOptions, setShippingCost]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;
  if (loadingDelivery) return <p>Loading posts...</p>;
  if (errorDelivery) return <p>Error: {error}</p>;

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
              options={EuropeCountries}
              required
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
                options={DeliveryOptions}
                required
                onChange={handleDeliveryChange}
              />
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Shipping:</span>
              <span>{shippingCost.display}</span>
            </div>
          </div>
          <hr className="my-2" />
          {/* Order total */}
          <div className="flex justify-between items-center font-semibold mb-2">
            <span>Order total:</span>
            <span>{(orderTotal + shippingCost.value).toFixed(2)}kr</span>
          </div>
          <DiscontCode />
          <Membership />
          {/* Checkout button */}
          <button
            onClick={onCheckout}
            disabled={!selectedCountry || !selectedDelivery}
            className={`w-full text-white py-2 rounded font-semibold transition ${
              !selectedCountry || !selectedDelivery
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
          >
            Checkout
          </button>
          <PaymnetIcons />
        </div>
      )}
    </section>
  );
}
