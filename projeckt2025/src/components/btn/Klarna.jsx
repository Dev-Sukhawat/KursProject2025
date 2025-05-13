import klarnaLogo from "../../assets/img/logo/klarna.svg";

export default function FakeKlarnaPay({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-3 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded shadow-md transition cursor-pointer"
    >
      <img src={klarnaLogo} alt="Klarna logo" className="w-6 h-6" />
      <span>Betala med Klarna</span>
    </button>
  );
}
