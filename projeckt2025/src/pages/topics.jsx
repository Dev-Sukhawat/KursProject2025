import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/nav/navbar";
import Footer from "../components/footer/Footer";
import useUnsplashApi from "../components/utils/UnsplashApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { toggleLikeImage, isImageLiked } from "../components/utils/likeStorage";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toggleCartItem, isInCart } from "../components/utils/cartStorage";
import Loader from "../components/btn/loader";

function Topics() {
  const { list } = useParams();
  const [likedState, setLikedState] = useState(0);
  const [cartState, setCartState] = useState(0);

  let order = "";
  let searchTerm = "";

  if (list.toLowerCase() === "news") {
    order = "latest";
    searchTerm = " "; // inga söktermer, bara senaste bilder
  } else if (list.toLowerCase() === "popular") {
    order = "relevant";
    searchTerm = " "; // inga söktermer, bara populära
  } else if (list.toLowerCase() === "inspirations") {
    order = "relevant";
    searchTerm = list; // "inspirations" som sökterm
  } else if (list.toLowerCase() === "limited") {
    order = "relevant";
    searchTerm = list; // "inspirations" som sökterm
  } else {
    order = " ";
    searchTerm = " ";
  }

  const { data: images, loading, error } = useUnsplashApi(searchTerm, order);

  const handleAddToCart = (imageData) => {
    toggleCartItem({
      id: imageData.id,
      productNumber: imageData.productNumber || imageData.id,
      image: imageData.image || imageData.urls?.small,
      title: imageData.title || imageData.alt_description || "No title",
      description: imageData.description || "No description",
      topics: imageData.topic_submissions ? "Limited" : "Regular",
    });
    setCartState(cartState + 1); // Om du vill trigga UI-uppdatering
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
                  src={image.urls.small}
                  alt={image.alt_description || "Unsplash image"}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Topics;
