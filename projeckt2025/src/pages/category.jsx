import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import useUnsplashApi from "../components/utils/UnsplashApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { toggleLikeImage, isImageLiked } from "../components/utils/likeStorage";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toggleCartItem, isInCart } from "../components/utils/cartStorage";
import Loader from "../components/btn/loader";
import CardModal from "../components/card/card";
import { useEffect } from "react";
import { AlwaysScrollToTop } from "../components/utils/AlwaysScrollToTop";

function Category() {
  useEffect(() => {
    AlwaysScrollToTop();
  });
  const { list } = useParams();
  const [likedState, setLikedState] = useState(0);
  const [cartState, setCartState] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Använd list från URL som sökterm till Unsplash
  // Om list saknas, sök på "all"
  const searchTerm = list || "all";

  const { data: images, loading, error } = useUnsplashApi(searchTerm);

  const handleAddToCart = (imageData) => {
    console.log(imageData);
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
    <>
      <Navbar />
      <section className="CheckTrends grid bg-gray-100 md:p-4 rounded-lg shadow-md mt-10 mb-4 justify-center">
        <div className="container">
          <h1 className="flex text-2xl md:text-3xl font-semibold justify-self-center gap-2 text-center mb-2">
            Category:
            <p className="capitalize">
              {list
                ?.split(/[,&]/)
                .map((t) => t.trim().toLowerCase())
                .join(", ")}
            </p>
          </h1>

          {loading && <Loader />}
          {error && <p className="text-center text-red-600">Error: {error}</p>}

          <div className="columns-3 lg:columns-4 gap-2">
            {images.map((image) => (
              <div
                key={image.id}
                className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md bg-white relative group"
              >
                {isImageLiked(image.id, image.id) && (
                  <button
                    className="absolute top-2 left-2 z-10 block"
                    onClick={() => {
                      toggleLikeImage(image.id, image.id);
                      setLikedState(likedState + 1);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-2xl text-red-500 bg-white rounded-full p-1"
                    />
                  </button>
                )}

                <button
                  className={`absolute top-2 left-2 z-9 hidden group-hover:block ${
                    isImageLiked(image.id, image.id) ? "hidden" : ""
                  }`}
                  onClick={() => {
                    toggleLikeImage(image.id, image.id);
                    setLikedState(likedState + 1);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-2xl text-white hover:text-red-500 p-1"
                  />
                </button>

                {isInCart(image.id, image.id) && (
                  <button
                    className="absolute top-2 right-2 z-10 block"
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
                  className={`absolute top-2 right-2 z-9 hidden group-hover:block ${
                    isInCart(image.id, image.id) ? "hidden" : ""
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
                  src={image.urls.small}
                  alt={image.alt_description || "Unsplash image"}
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
      </section>
      <Footer />
    </>
  );
}

export default Category;
