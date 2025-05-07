import React from "react";
import Navbar from "../components/nav/navbar";
import Intro from "../components/homepage/header/intro";
import Announcement from "../components/homepage/announcement/announcement";
import Pick from "../components/homepage/pickcategory/pick";
import Check from "../components/homepage/checktrends/check";
import Yourstyle from "../components/homepage/your/yourstyle";
import Delivery from "../components/homepage/delivery/delivery";
import Payment from "../components/homepage/payment/pay";
import Footer from "../components/footer/footer";

function home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Announcement />
      <Pick />
      <Check />
      <Yourstyle />
      <Delivery />
      <Payment />
      <Footer />
    </>
  );
}

export default home;
