import React from "react";
import ShippingAddress from "./ShippingAddress";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";

export default function CartExtension() {
  return (
    <section className="CartExtension">
      <ShippingAddress />
      <OrderSummary />
      <PaymentMethod />
    </section>
  );
}
