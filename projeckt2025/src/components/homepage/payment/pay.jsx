import React from "react";
import Visa from "../../../../src/assets/img/logo/visa.svg";
import Mastercard from "../../../../src/assets/img/logo/mastercard.svg";
import Paypal from "../../../../src/assets/img/logo/Paypal.svg";
import Swish from "../../../../src/assets/img/logo/swish.svg";
import Klarna from "../../../../src/assets/img/logo/klarna.svg";
export default function Pay() {
  return (
    <section
      className="mx-[5%] mt-10 py-5 w-auto bg-gray-200 text-center rounded-2xl
     md:py-10 lg:mx-[5%]"
    >
      <h1 className="text-2xl font-medium md:font-semibold md:p-10 md:text-4xl lg:text-5xl">
        Payments White
      </h1>
      <div className=" grid grid-cols-6 justify-center items-center gap-2 px-10 md:gap-5 md:px-10 lg:px-100">
        <div className="col-span-2">
          <img src={Visa} alt="Visa Logo" />
        </div>
        <div className="col-span-2">
          <img
            className="mix-blend-multiply "
            src={Mastercard}
            alt="Mastercard Logo"
          />
        </div>
        <div className="col-span-2">
          <img src={Paypal} alt="Paypal Logo" />
        </div>
        <div className="place-self-center self-center col-span-3 size-20 md:size-45 lg:size-80">
          <img className="size-full" src={Swish} alt="Swish Logo" />
        </div>
        <div className="col-span-3">
          <img src={Klarna} alt="Klarna Logo" />
        </div>
      </div>
    </section>
  );
}
