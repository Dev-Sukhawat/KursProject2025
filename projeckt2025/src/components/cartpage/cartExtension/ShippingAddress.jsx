import React from "react";

export default function ShippingAddress({ selectedCountry, onCheckout }) {
  return (
    <section className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">ShippingAddress</h2>
      <hr className="mb-4" />
      <form className="space-y-4">
        <div>
          <label className="block font-medium">First name *</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">Last name *</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">Address Line 1 *</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">Address Line 2</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium">Postal code *</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
          <div className="flex-1">
            <label className="block font-medium">City *</label>
            <input type="text" className="w-full border p-2 rounded" />
          </div>
        </div>

        <div>
          <label className="block font-medium">State</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">Country</label>
          <input
            type="text"
            value={selectedCountry}
            readOnly
            placeholder="No country selected"
            className="w-full border p-2 rounded capitalize"
          />
          <p className="text-sm text-gray-500">
            Country can be changed at{" "}
            <button onClick={onCheckout} className="text-blue-600 underline">
              Buy List
            </button>
          </p>
        </div>

        <div>
          <label className="block font-medium">Contact phone *</label>
          <input type="tel" className="w-full border p-2 rounded" />
          <p className="text-sm text-gray-500">
            Phone number for the delivery service to reach you.
          </p>
        </div>

        <div>
          <label className="block font-medium">E-mail *</label>
          <input type="email" className="w-full border p-2 rounded" />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            Accept everything
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />I agree to the
            Terms and Privacy Policy. *
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            Sign me up for exclusive deals, new drops, and picks just for me.
          </label>
        </div>

        <div>
          <label className="block font-medium">Delivery address to*</label>
          <select className="w-full border p-2 rounded">
            <option>Closest pickup points by address or postal code.</option>
          </select>
        </div>
      </form>
      <hr className="mt-5" />
    </section>
  );
}
