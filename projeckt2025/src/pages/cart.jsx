import React from "react";
import { BuyNavbar } from "../components/nav/navbar";
import Buylist from "../components/cartpage/Buylist";

import Footer from "../components/footer/footer";

function cart() {
  return (
    <>
      <BuyNavbar />
      <Buylist />

      <Footer />
    </>
  );
}

export default cart;
