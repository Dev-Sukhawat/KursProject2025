import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../utils/useFetch.js";
import DataBackUp from "../../../data/data.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { toggleLikeImage, isImageLiked } from "../../utils/likeStorage.js";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toggleCartItem, isInCart } from "../../utils/cartStorage.js";
import  CardModal from "../../card/card.jsx"

export default function Check() {
  const [selected, setSelected] = useState("sell");
  const [likedState, setLikedState] = useState(0);
  const [cartState, setCartState] = useState(0);
  const { data: Data, loading, error } = useFetch("/api/data", DataBackUp);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleAddToCart = (imageData) => {
    // console.log(imageData);
    toggleCartItem({
      id: imageData.id,
      productNumber: imageData.productNumber || imageData.id,
      image: imageData.image || imageData.urls?.small,
      title: imageData.title || imageData.alt_description || "No title",
      descriptionCard: imageData.descriptionCard,
      quantity: imageData.quantity,
      priceToAdd: imageData.priceToAdd,
      topics:
        imageData.topics?.toLowerCase() === "limited" ||
        imageData.topic_submissions
          ? "Limited"
          : "Regular",
    });
    setCartState(cartState + 1); // Om du vill trigga UI-uppdatering
  };

  const toggleModalCard = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="CheckTrends bg-gray-100 rounded-lg shadow-md mt-10 mb-4 justify-center md:p-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        Check out top trends!
      </h1>
      <div>
        <div className="flex flex-col items-center">
          <input
            type="radio"
            id="top-seller"
            name="checktrends"
            value="sell"
            checked={selected === "sell"}
            onChange={(e) => setSelected(e.target.value)}
            className="hidden"
          />
          <input
            type="radio"
            id="trending-now"
            name="checktrends"
            value="now"
            checked={selected === "now"}
            onChange={(e) => setSelected(e.target.value)}
            className="hidden"
          />
          <input
            type="radio"
            id="fan-favourite"
            name="checktrends"
            value="favourite"
            checked={selected === "favourite"}
            onChange={(e) => setSelected(e.target.value)}
            className="hidden"
          />

          <ul className="flex text-center w-full md:w-auto text-xs md:text-xl font-medium mb-4 justify-center md:gap-4 bg-gray-200 rounded-xl py-2 md:mt-4 md:mb-5 md:px-6 md:py-2 gap-2">
            <li>
              <label
                htmlFor="top-seller"
                className={`cursor-pointer block px-4 py-2 rounded-lg ${
                  selected === "sell"
                    ? "bg-white text-blue-600"
                    : "hover:bg-white hover:text-blue-600 text-black-600"
                }`}
              >
                Top Seller
              </label>
            </li>
            <li>
              <label
                htmlFor="trending-now"
                className={`cursor-pointer block px-4 py-2 rounded-lg ${
                  selected === "now"
                    ? "bg-white text-blue-600"
                    : "hover:bg-white hover:text-blue-600 text-black-600"
                }`}
              >
                Trending Now
              </label>
            </li>
            <li>
              <label
                htmlFor="fan-favourite"
                className={`cursor-pointer block px-4 py-2 rounded-lg ${
                  selected === "favourite"
                    ? "bg-white text-blue-600"
                    : "hover:bg-white hover:text-blue-600 text-black-600"
                }`}
              >
                Fan Favourite
              </label>
            </li>
          </ul>
        </div>
        <div>
          <div className="columns-3 lg:columns-4 gap-2">
            {Data.map((image) => (
              <div
                key={image.id}
                className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md bg-white relative group"
              >
                {isImageLiked(image.id, image.productNumber) && (
                  <button
                    className="absolute  top-2 left-2 z-9 block"
                    onClick={() => {
                      toggleLikeImage(image.id, image.productNumber);
                      setLikedState(likedState + 1);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className=" text-2xl text-red-500 bg-white rounded-full p-1"
                    />
                  </button>
                )}

                <button
                  className={`absolute top-2 left-2 z-8  hidden group-hover:block ${
                    isImageLiked(image.id, image.productNumber) ? "hidden" : ""
                  }`}
                  onClick={() => {
                    toggleLikeImage(image.id, image.productNumber);
                    setLikedState(likedState + 1);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-2xl text-white hover:text-red-500 p-1"
                  />
                </button>

                {isInCart(image.id, image.productNumber) && (
                  <button
                    className="absolute top-2 right-2 z-9 block"
                    onClick={() => {
                      handleAddToCart(image);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="text-2xl text-green-500 bg-white rounded-full p-1"
                    />
                  </button>
                )}

                <button
                  className={`absolute top-2 right-2 z-8 hidden group-hover:block  ${
                    isInCart(image.id, image.productNumber) ? "hidden" : ""
                  }`}
                  onClick={() => {
                    handleAddToCart(image);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-2xl text-white hover:text-green-500 p-1"
                  />
                </button>

                <img
                  onClick={() => toggleModalCard(image)}
                  src={image.image}
                  alt={image.alt}
                  className="w-full cursor-pointer h-auto object-cover"
                />
              </div>
            ))}
            <CardModal
              isOpen={isModalOpen}
              image={selectedImage}
              onClose={closeModal}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
      <span className="flex flex-col items-center md:mt-5">
        <Link
          to="/category/all"
          className=" rounded-xl border-2 font-semibold text-sm md:text-xl text-center hover:shadow-[0px_0px_5px_1px_rgba(34,167,197,0.75)] text-blue-600 mb-4 cursor-pointer p-2 hover:underline"
        >
          See more
        </Link>
      </span>
    </section>
  );
}
