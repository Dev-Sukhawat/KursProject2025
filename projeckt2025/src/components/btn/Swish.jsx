import swishLogo from "../../assets/img/logo/swish.svg";

export default function FakeSwishPay({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-md transition cursor-pointer"
    >
      <img src={swishLogo} alt="Swish logo" className="w-6 h-6" />
      <span>Betala med Swish</span>
    </button>
  );
}
