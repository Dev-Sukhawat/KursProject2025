import React, { useState } from "react";
import ShippingAddress from "./ShippingAddress";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";

export default function CartExtension({
  selectedCountry,
  onCheckout,
  cartItems,
  setSelectedDelivery,
  shippingCost,
}) {
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    postalCode: "",
    city: "",
    state: "",
    contactPhone: "",
  });
  return (
    <section className="CartExtension">
      <ShippingAddress
        selectedCountry={selectedCountry}
        onCheckout={onCheckout}
        formData={formData}
        setFormData={setFormData}
        setFormValid={setFormValid}
      />
      <OrderSummary
        cartItems={cartItems}
        setSelectedDelivery={setSelectedDelivery}
        shippingCost={shippingCost}
      />
      <PaymentMethod
        cartItems={cartItems}
        setSelectedDelivery={setSelectedDelivery}
        formValid={formValid}
      />
    </section>
  );
}
