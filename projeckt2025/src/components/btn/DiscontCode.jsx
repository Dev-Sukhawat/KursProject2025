import { useState } from "react";

export default function DiscontCode() {
  const [showInput, setShowInput] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  return (
    <section className="Discont-Code-Btn mb-4">
      {!showInput ? (
        <p
          className="w-max text-sm text-blue-600 underline cursor-pointer"
          onClick={() => setShowInput(true)}
        >
          Discount code or eGift card
        </p>
      ) : (
        <>
          <input
            type="text"
            className="border rounded px-2 py-1 text-sm w-full"
            placeholder="Enter code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <p
            className="w-max text-sm text-blue-600 underline cursor-pointer "
            onClick={() => setShowInput(false)}
          >
            Doesn't have Discount code
          </p>
        </>
      )}
    </section>
  );
}
