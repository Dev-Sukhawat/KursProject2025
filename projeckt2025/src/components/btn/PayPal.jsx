import PayPalCard from "../../assets/img/logo/paypal.svg";
export default function PayPalButton({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-3 shadow-md transition"
      >
        <img
          src={PayPalCard}
          alt="PayPalCardLogo"
          className="h-6 md:h-7 object-contain"
        />
        <span className="text-base md:text-lg">Pay with PayPal</span>
      </button>
    </>
  );
}
