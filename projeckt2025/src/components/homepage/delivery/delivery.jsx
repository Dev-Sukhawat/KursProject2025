import React from "react";
import Ups from "../../../../src/assets/img/logo/ups.png";
import Fedex from "../../../../src/assets/img/logo/fedex.svg";
import Dhl from "../../../../src/assets/img/logo/dhl.svg";
import Budbee from "../../../../src/assets/img/logo/budbee.svg";
import Bring from "../../../../src/assets/img/logo/bring.png";
import Instabox from "../../../../src/assets/img/logo/instabox.svg";
import DB from "../../../../src/assets/img/logo/db-schenker.svg";
import Postnord from "../../../../src/assets/img/logo/postnord.svg";

export default function Delivery() {
  return (
    <section className="mx-[5%] mt-15 py-5 w-auto bg-gray-200 text-center rounded-2xl  md:py-10">
      <h1 className="text-2xl font-medium md:font-semibold md:p-10 md:text-4xl lg:text-5xl">
        Fast & Secure Shopping <br /> Delivery by
      </h1>
      <div className=" grid grid-cols-6 justify-center items-center gap-2 px-1 md:gap-5 md:px-10 lg:px-50">
        <img
          className="place-self-center self-center h-[75%]"
          src={Ups}
          alt="Ups Logo"
        />
        <img
          className="place-self-center self-center"
          src={Fedex}
          alt="Fedex Logo"
        />
        <img
          className="place-self-center self-center"
          src={Dhl}
          alt="Dhl Logo"
        />
        <img
          className="place-self-center self-center"
          src={Budbee}
          alt="Budbee Logo"
        />
        <img
          className="place-self-center self-center"
          src={Bring}
          alt="Bring Logo"
        />
        <img
          className="place-self-center self-center "
          src={Instabox}
          alt="Instabox Logo"
        />
        <img
          className="self-center col-span-3 md:col-span-2 md:col-start-2"
          src={DB}
          alt="DB-schenker Logo"
        />
        <img
          className="self-center col-span-3 md:col-span-2"
          src={Postnord}
          alt="Postnord Logo"
        />
      </div>
    </section>
  );
}
