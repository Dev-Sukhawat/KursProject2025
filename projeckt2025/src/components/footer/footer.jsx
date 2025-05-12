import Visa from "../../../src/assets/img/logo/visa.svg";
import Mastercard from "../../../src/assets/img/logo/mastercard.svg";
import Paypal from "../../../src/assets/img/logo/Paypal.svg";
import Swish from "../../../src/assets/img/logo/swish.svg";
import Klarna from "../../../src/assets/img/logo/klarna.svg";
import Facebook from "../../../src/assets/img/logo/facebook.svg";
import Instagram from "../../../src/assets/img/logo/instagram.svg";
import X from "../../../src/assets/img/logo/x.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 p-6 mt-12 text-sm">
      <div className="columns-1 gap-auto md:columns-2 lg:grid grid-cols-2">
        <div className="">
          <h3 className="font-semibold text-xl mb-2 md:text-2xl">Support</h3>
          <ul className="space-y-1 lg:text-base">
            <li>Track order</li>
            <li>Help/FAQ</li>
            <li>Terms of use</li>
            <li>Contact us</li>
            <li>Copyrights</li>
            <li>Privacy policy</li>
            <li>Shipping & Returns</li>
            <li>Mounting instructions</li>
          </ul>
        </div>

        <div className="mt-4 h-min">
          <h3 className="font-semibold text-xl mb-2 md:text-2xl">About</h3>
          <ul className="space-y-1 lg:text-base">
            <li>What’s a MetalMorph</li>
            <li>MetalMorph Members</li>
            <li>About us</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-xl mb-2 md:text-2xl">
            Earn with MetalMorph
          </h3>
          <ul className="space-y-1 lg:text-base">
            <li>Sell your art</li>
          </ul>

          <h3 className="font-semibold text-xl mt-4 mb-2 md:text-2xl">Gift</h3>
          <ul className="space-y-1 lg:text-base">
            <li>Gift Card</li>
            <li>Gifts inspirations</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mt-4 mb-2 md:text-2xl">
            Find us
          </h3>
          <div className="flex space-x-3 mb-4">
            <img className="h-5 md:h-8" src={Facebook} alt="Facebook Logo" />
            <img className="h-5 md:h-8" src={Instagram} alt="Instagram Logo" />
            <img className="h-5 md:h-8" src={X} alt="X Logo" />
          </div>

          <h3 className="font-semibold text-xl mb-2 md:text-2xl">
            Secure payments
          </h3>
          <div className="flex flex-wrap space-x-3 gap-2">
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
        </div>
      </div>
      <div className="text-center text-xs mt-6 border-t border-gray-300 pt-4">
        © 2025 MetalMorph. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
