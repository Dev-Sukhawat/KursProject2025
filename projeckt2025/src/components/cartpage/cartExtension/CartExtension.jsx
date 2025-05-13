import React from "react";
import ShippingAddress from "./ShippingAddress";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";

export default function CartExtension({
  selectedCountry,
  onCheckout,
  cartItems,
  setSelectedDelivery,
  // shippingCost,
}) {
  return (
    <section className="CartExtension">
      <ShippingAddress
        selectedCountry={selectedCountry}
        onCheckout={onCheckout}
      />
      <OrderSummary
        cartItems={cartItems}
        setSelectedDelivery={setSelectedDelivery}
        // shippingCost={shippingCost}
      />
      <PaymentMethod
        cartItems={cartItems}
        setSelectedDelivery={setSelectedDelivery}
      />
    </section>
  );
}
