import React, { useState } from "react";
import useCart from "../components/utils/useCart.js";
import { BuyNavbar } from "../components/nav/Navbar.jsx";
import Buylist from "../components/cartpage/Buylist.jsx";
import Orderdetails from "../components/cartpage/Orderdetails.jsx";
import CartExtension from "../components/cartpage/cartExtension/CartExtension.jsx";

import Footer from "../components/footer/Footer.jsx";

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  return (
    <>
      <BuyNavbar />
      {isCheckingOut ? (
        <CartExtension />
      ) : (
        <>
          <Buylist cartItems={cartItems} removeFromCart={removeFromCart} />
          <Orderdetails
            cartItems={cartItems}
            onCheckout={() => setIsCheckingOut(true)}
          />
        </>
      )}

      <Footer />
    </>
  );
}

export default Cart;
