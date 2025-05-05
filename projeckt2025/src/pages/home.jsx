import React from "react";
import Navbar from "../components/nav/navbar";
import Intro from "../components/header/intro";
import Announcement from "../components/homepage/announcement/announcement";
import Pick from "../components/homepage/pickcategory/pick";
import Check from "../components/homepage/checktrends/check";
import Yourstyle from "../components/homepage/your/Yourstyle";

function home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Announcement />
      <Pick />
      <Check />
      <Yourstyle />
    </>
  );
}

export default home;
