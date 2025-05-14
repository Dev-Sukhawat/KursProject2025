import React, { useState } from "react";
import useCart from "../components/utils/useCart.js";
import { BuyNavbar } from "../components/nav/Navbar.jsx";
import Buylist from "../components/cartpage/Buylist.jsx";
import Orderdetails from "../components/cartpage/Orderdetails.jsx";
import CartExtension from "../components/cartpage/cartExtension/CartExtension.jsx";

import Footer from "../components/footer/Footer.jsx";

function Cart({ setSelectedDelivery }) {
  const { cartItems, removeFromCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  // const [shippingCost, setShippingCost] = useState({
  //   display: "0.00kr",
  //   value: 0,
  // });

  return (
    <>
      <BuyNavbar />
      {isCheckingOut ? (
        <CartExtension
          selectedCountry={selectedCountry}
          onCheckout={() => setIsCheckingOut(false)}
          cartItems={cartItems}
          setSelectedDelivery={setSelectedDelivery}
          // shippingCost={shippingCost}
        />
      ) : (
        <>
          <Buylist cartItems={cartItems} removeFromCart={removeFromCart} />
          <Orderdetails
            cartItems={cartItems}
            onCheckout={() => setIsCheckingOut(true)}
            setSelectedCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
            // setShippingCost={setShippingCost}
          />
        </>
      )}

      <Footer />
    </>
  );
}

export default Cart;
