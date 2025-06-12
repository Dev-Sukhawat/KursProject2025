import React, { useState, useEffect, useRef } from "react";
import ShippingAddress from "./ShippingAddress";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import { AlwaysScrollToTop } from "../../utils/AlwaysScrollToTop";

export default function CartExtension({
  selectedCountry,
  onCheckout,
  cartItems,
  setSelectedDelivery,
  shippingCost,
}) {
  useEffect(() => {
    AlwaysScrollToTop();
  }, []);

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

  const paymentRef = useRef(null);

  // Scrolla till PaymentMethod när formuläret är godkänt
  useEffect(() => {
    if (formValid && paymentRef.current) {
      paymentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [formValid]);

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
        paymentMethodRef={paymentRef}
      />
    </section>
  );
}
