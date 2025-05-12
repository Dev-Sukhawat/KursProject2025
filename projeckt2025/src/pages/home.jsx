import React from "react";
import Navbar from "../components/nav/Navbar";
import Intro from "../components/homepage/header/Intro";
import Announcement from "../components/homepage/announcement/announcement";
import Pick from "../components/homepage/pickcategory/Pick";
import Check from "../components/homepage/checktrends/Check";
import Yourstyle from "../components/homepage/your/YourStyle";
import Delivery from "../components/homepage/delivery/Delivery";
import Payment from "../components/homepage/payment/Pay";
import Footer from "../components/footer/Footer";

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
