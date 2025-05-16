import React from "react";
import Checkbox from "../../btn/Checkbox";

export default function ShippingAddress({
  selectedCountry,
  onCheckout,
  formData,
  setFormData,
  setFormValid,
}) {
  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const BuyerAddress = (e) => {
    e.preventDefault();

    // Enkel validering
    if (
      formData.firstName &&
      formData.address1 &&
      formData.postalCode &&
      formData.city &&
      formData.contactPhone
    ) {
      setFormValid(true);
    } else {
      alert("Fyll i alla obligatoriska fält (*)");
      setFormValid(false);
    }
  };
  return (
    <section className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
      <hr className="mb-4" />
      <form onSubmit={BuyerAddress} className="space-y-4">
        <div>
          <label className="block font-medium">First name *</label>
          <input
            type="text"
            name="firstName"
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Last name *</label>
          <input
            type="text"
            name="lastName"
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Address Line 1 *</label>
          <input
            type="text"
            name="address1"
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Address Line 2</label>
          <input
            type="text"
            name="address2"
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium">Postal code *</label>
            <input
              type="text"
              inputMode="numeric"
              name="postalCode"
              onChange={handleInputChange}
              required
              maxLength={12}
              className="w-full border p-2 rounded"
                onInput={(e) => {
                e.target.value = e.target.value
                .replace(/[^a-zA-Z0-9\-\s]/g, "");
                }}
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium">City *</label>
            <input
              type="text"
              name="city"
              onChange={handleInputChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
        <div>
          <label className="block font-medium">State</label>
          <input
            type="text"
            name="state"
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Country</label>
          <input
            type="text"
            readOnly
            value={selectedCountry}
            placeholder="No country selected"
            className="w-full border p-2 rounded capitalize"
          />
          <p className="text-sm text-gray-500 cursor-pointer w-max">
            Country can be changed at{" "}
            <button
              onClick={onCheckout}
              className="text-blue-600 underline "
              type="button"
            >
              Buy List
            </button>
          </p>
        </div>
        <div>
          <label className="block font-medium">Contact phone *</label>
          <input
            type="tel"
            name="contactPhone"
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded"
          />
          <p className="text-sm text-gray-500">
            Phone number for the delivery service to reach you.
          </p>
        </div>
        <Checkbox />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
        >
          Confirm Address
        </button>
      </form>
      <hr className="mt-5" />
    </section>
  );
}
