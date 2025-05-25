import React, { useRef } from "react";
import CustomDropdown from "../utils/CustomDropdown";
import ImgBg1 from "../../assets/img/background/ImgBg1.svg";
import ImgBg2 from "../../assets/img/background/ImgBg2.svg";
import ImgBg3 from "../../assets/img/background/ImgBg3.svg";

const Card = ({ isOpen, image, onClose, onAddToCart }) => {
  const modalRef = useRef(null);
  const [quantity, setQuantity] = React.useState(1);
  const styleOptions = [
    { value: "Classic", label: "Classic", price: 0 },
    { value: "Gloss", label: "Gloss", price: 50 },
    { value: "Texture", label: "Texture", price: 100 },
  ];
  const sizeOptions = [
    { value: "M", label: "M: 45x32cm", price: 0 },
    { value: "L", label: "L: 60x45cm", price: 50 },
    { value: "XL", label: "XL: 90x64cm", price: 100 },
  ];
  const [selectedStyle, setSelectedStyle] = React.useState(
    styleOptions[0].value
  );
  const [selectedSize, setSelectedSize] = React.useState(sizeOptions[0].value);

  if (!isOpen || !image) return null;

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose(); // Close modal when clicking outside the modal content
    }
  };

  const selectedStyleObj = styleOptions.find(
    (opt) => opt.value === selectedStyle
  );
  const selectedSizeObj = sizeOptions.find((opt) => opt.value === selectedSize);
  const totalPrice =
    (selectedStyleObj?.price || 0) + (selectedSizeObj?.price || 0);

  return (
    <div
      className="fixed inset-0 z-20 flex items-start max-w-screen justify-center md:items-center md:z-9 md:pt-15"
      style={{ backgroundColor: "hsl(0deg 0% 100% / 86%)" }}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-lg max-w-5xl w-full mx-4 overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 cursor-pointer right-4 text-black text-2xl font-bold z-10"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          {/* Left: Image with background/fused image */}
          <div className="relative flex-shrink-0 w-[100%] md:w-1/2 bg-gray-100 rounded-lg">
            {/* Background Image */}
            <img
              src={ImgBg1 || "path/to/background-image.jpg"}
              alt="Background"
              className=""
              style={{ zIndex: 1 }}
            />

            {/* Main Product Image */}
            <img
              src={image.image || image.urls.small}
              alt={image.alt || image.alt_description}
              className="absolute top-10 right-40 w-[20%] object-contain rounded-lg"
              style={{ zIndex: 1 }}
            />
          </div>

          {/* Right: Info */}
          <div className="w-full md:w-1/2 text-left space-y-4">
            <h2 className="text-2xl font-bold">
              {image.title || "Product Title"}
            </h2>
            <div className="space-y-4 text-gray-600">
              {/* Quantity Selector */}
              <div>
                <label htmlFor="quantity" className="block font-medium mb-1">
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  defaultValue={1}
                  min={1}
                  max={100}
                  className="w-full border rounded-lg p-2"
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>

              <div className="St_Si-Options grid md:grid-flow-col justify-between items-center">
                {/* Style Selector */}
                <div>
                  <label htmlFor="style" className="block font-medium mb-1">
                    Style
                  </label>
                  <CustomDropdown
                    options={styleOptions}
                    defaultLabel={styleOptions[0].label}
                    required
                    onChange={(selectedOption) =>
                      setSelectedStyle(selectedOption)
                    }
                    dropdownClassName="columns-3"
                  />
                </div>
                {/* Size Selector */}
                <div>
                  <label htmlFor="size" className="block font-medium mb-1">
                    Size
                  </label>
                  <CustomDropdown
                    defaultLabel={sizeOptions[0].value}
                    options={sizeOptions}
                    required
                    onChange={(selectedOption) =>
                      setSelectedSize(selectedOption)
                    }
                    dropdownClassName=" flex columns-3 -left-[100%] text-center"
                  />
                </div>
                <div className="md:col-start-2">
                  <label htmlFor="price" className="hidden md:block">
                    Price <br />
                  </label>
                  <span className="text-lg text-black font-semibold">
                    {image.topics?.toLowerCase() === "limited" ||
                    image.topic_submissions
                      ? `${
                          quantity * 399 +
                          selectedStyleObj?.price +
                          selectedSizeObj?.price
                        }kr`
                      : `${
                          quantity * 299 +
                          selectedStyleObj?.price +
                          selectedSizeObj?.price
                        }kr`}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                if (onAddToCart) {
                  onAddToCart({
                    id: image.id,
                    productNumber: image.productNumber || image.id,
                    image: image.image || image.urls?.small,
                    title: image.title || image.alt_description || "No title",
                    topics:
                      image.topics?.toLowerCase() === "limited" ||
                      image.topic_submissions
                        ? "Limited"
                        : "Regular",
                    quantity,
                    style: selectedStyle,
                    size: selectedSize,
                    descriptionCard: `Qty: ${quantity}; Style: ${selectedStyle}; Size: ${selectedSize}`,
                    priceToAdd: totalPrice,
                  });
                }
                onClose(); // close modal after adding
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
