import Visa from "../../assets/img/logo/visa.svg";
import Mastercard from "../../assets/img/logo/mastercard.svg";
import Paypal from "../../assets/img/logo/paypal.svg";
import Swish from "../../assets/img/logo/swish.svg";
import Klarna from "../../assets/img/logo/klarna.svg";

export default function PaymnetIcons() {
  return (
    <>
      <div className="flex justify-between items-center mt-4 px-2">
        <img
          className="place-self-center self-center h-5 md:h-8"
          src={Visa}
          alt="Visa Logo"
        />
        <img
          className="place-self-center self-center h-8 mix-blend-multiply"
          src={Mastercard}
          alt="Mastercard Logo"
        />
        <img
          className="place-self-center self-center h-5 md:h-8"
          src={Paypal}
          alt="Paypal Logo"
        />
        <img
          className="place-self-center self-center h-5 md:h-8"
          src={Swish}
          alt="Swish Logo"
        />
        <img
          className="place-self-center self-center h-5 md:h-8"
          src={Klarna}
          alt="Klarna Logo"
        />
      </div>
    </>
  );
}
