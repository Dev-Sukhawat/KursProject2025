import React, { useState, useEffect, useMemo } from "react";
import useFetch from "../utils/useFetch";
import DataBackUp from "../../data/data.json";
import {
  getLikedImages,
  isImageLiked,
  toggleLikeImage,
} from "../utils/likeStorage";
import { isInCart, toggleCartItem } from "../utils/cartStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CardModal from "../card/card.jsx";
import { fetchUnsplashImagesByIds } from "../utils/UnsplashApi.js";

export default function LikeSection() {
  const [likedState, setLikedState] = useState(0);
  const [cartState, setCartState] = useState(0);
  const [likedImages, setLikedImages] = useState([]);
  const [unsplashDataMap, setUnsplashDataMap] = useState({});
  const [unsplashLoading, setUnsplashLoading] = useState(false);
  const [unsplashError, setUnsplashError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selected, setSelected] = useState("new");
  const { data: Data, loading, error } = useFetch("/api/data", DataBackUp);

  const dataMap = useMemo(() => {
    const map = {};
    Data?.forEach((img) => {
      const key = img.id + "-" + (img.productNumber || "");
      map[key] = img;
    });
    return map;
  }, [Data]);

  useEffect(() => {
    if (!Data || Data.length === 0) return;

    const liked = getLikedImages(); // [{ id, productNumber }]
    const unsplashLikes = [];
    const localLikes = [];

    liked.forEach(({ id, productNumber }) => {
      if (id === productNumber) {
        unsplashLikes.push(id);
      }
      const match = Data.find(
        (img) => img.id === id && img.productNumber === productNumber
      );
      console.log(match);

      if (match) {
        localLikes.push(match);
      }
    });

    const fetchData = async () => {
      setUnsplashLoading(true);
      setUnsplashError(null);

      try {
        const results = await fetchUnsplashImagesByIds(unsplashLikes);

        const imageMap = {};
        const mappedImages = [];

        results.forEach(({ id, data }) => {
          imageMap[id] = data;

          mappedImages.push({
            id,
            image: data.urls?.small,
            alt: data.alt_description || "No description",
            title: data.description || data.alt_description || "Untitled",
            ...data,
          });
        });

        setUnsplashDataMap(imageMap);
        setLikedImages([...localLikes, ...mappedImages]);
      } catch (err) {
        console.error("Unsplash fetch error:", err);
        setUnsplashError("Could not fetch Unsplash images");
      } finally {
        setUnsplashLoading(false);
      }
    };

    fetchData();
  }, [Data, likedState, dataMap]);

  const filteredImages = useMemo(() => {
    if (selected === "new") {
      return likedImages;
    } else if (selected === "old") {
      return [...likedImages].reverse();
    }
    return likedImages;
  }, [likedImages, selected]);

  const toggleModalCard = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleAddToCart = (imageData) => {
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
    setCartState(cartState + 1);
  };

  if (loading || unsplashLoading)
    return <p className="text-center">Loading...</p>;
  if (error || unsplashError)
    return (
      <p className="text-center text-red-500">
        Error: {error || unsplashError}
      </p>
    );

  return (
    <section className="CheckTrends grid bg-gray-100 md:p-4 rounded-lg shadow-md mt-10 mb-4 justify-center">
      <div className="container">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          Your liked images
        </h1>

        {/* Toggle between old/new likes */}
        <div className="flex flex-col items-center">
          <input
            type="radio"
            id="new-liked"
            name="liked-toggle"
            value="new"
            checked={selected === "new"}
            onChange={(e) => setSelected(e.target.value)}
            className="hidden"
          />
          <input
            type="radio"
            id="old-liked"
            name="liked-toggle"
            value="old"
            checked={selected === "old"}
            onChange={(e) => setSelected(e.target.value)}
            className="hidden"
          />

          <ul className="flex text-center w-full md:w-auto text-xs md:text-xl font-medium mb-4 justify-center md:gap-4 bg-gray-200 rounded-xl py-2 md:mt-4 md:mb-5 md:px-6 md:py-2 gap-2">
            <li>
              <label
                htmlFor="new-liked"
                className={`cursor-pointer block px-4 py-2 rounded-lg ${
                  selected === "new"
                    ? "bg-white text-blue-600"
                    : "hover:bg-white hover:text-blue-600 text-black-600"
                }`}
              >
                New Likes
              </label>
            </li>
            <li>
              <label
                htmlFor="old-liked"
                className={`cursor-pointer block px-4 py-2 rounded-lg ${
                  selected === "old"
                    ? "bg-white text-blue-600"
                    : "hover:bg-white hover:text-blue-600 text-black-600"
                }`}
              >
                Old Likes
              </label>
            </li>
          </ul>
        </div>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-600">Error: {error}</p>}

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-2">
          {filteredImages.map((image) => {
            const isLocal = image.image !== undefined;
            const imgData = isLocal ? image : unsplashDataMap[image.id];

            if (!imgData) return null;

            const imgSrc = imgData.image || imgData.urls?.small;
            const title = imgData.title || imgData.alt_description || "Image";

            const isLiked = isImageLiked(
              image.id,
              image.productNumber || image.id
            );
            const inCart = isInCart(image.id, image.productNumber || image.id);

            return (
              <div
                key={image.id}
                className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md bg-white relative group"
              >
                {/* LIKE */}
                {isLiked && (
                  <button
                    className="absolute top-2 left-2 z-10 block"
                    onClick={() => {
                      toggleLikeImage(
                        image.id,
                        image.productNumber || image.id
                      );
                      setLikedState((prev) => prev + 1);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-2xl text-red-500 bg-white rounded-full p-1"
                    />
                  </button>
                )}
                {!isLiked && (
                  <button
                    className="absolute top-2 left-2 z-9 hidden group-hover:block"
                    onClick={() => {
                      toggleLikeImage(
                        image.id,
                        image.productNumber || image.id
                      );
                      setLikedState((prev) => prev + 1);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-2xl text-white hover:text-red-500 p-1"
                    />
                  </button>
                )}

                {/* CART */}
                {inCart && (
                  <button
                    className="absolute top-2 right-2 z-10 block"
                    onClick={() => handleAddToCart(imgData)}
                  >
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="text-2xl text-green-500 bg-white rounded-full p-1"
                    />
                  </button>
                )}
                {!inCart && (
                  <button
                    className="absolute top-2 right-2 z-9 hidden group-hover:block"
                    onClick={() => handleAddToCart(imgData)}
                  >
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="text-2xl text-white hover:text-green-500 p-1"
                    />
                  </button>
                )}

                {/* IMAGE */}
                <img
                  onClick={() => toggleModalCard(imgData)}
                  src={imgSrc}
                  alt={title}
                  className="w-full cursor-pointer h-auto object-cover"
                />
              </div>
            );
          })}
        </div>

        <CardModal
          isOpen={isModalOpen}
          image={selectedImage}
          onClose={closeModal}
          onAddToCart={handleAddToCart}
        />
      </div>
    </section>
  );
}
