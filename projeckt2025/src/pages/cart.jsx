import React from "react";
import { BuyNavbar } from "../components/nav/navbar";
import Buylist from "../components/cartpage/Buylist";
import Orderdeails from "../components/cartpage/Orderdeails";

import Footer from "../components/footer/footer";

function cart() {
  return (
    <>
      <BuyNavbar />
      <Buylist />
      <Orderdeails />
      <Footer />
    </>
  );
}

export default cart;
