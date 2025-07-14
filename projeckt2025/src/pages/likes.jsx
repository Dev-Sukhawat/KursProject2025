import React from "react";
import Navbar from "../components/nav/Navbar";
import Likes from "../components/likespage/likesection";
import Footer from "../components/footer/Footer";

function likes() {
  return (
    <>
      <Navbar />
      <Likes />
      <Footer />
    </>
  );
}

export default likes;
