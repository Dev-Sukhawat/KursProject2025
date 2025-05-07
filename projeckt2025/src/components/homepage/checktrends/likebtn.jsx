// utils/likeStorage.js

const STORAGE_KEY = "likedImages";

export function getLikedImages() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function isImageLiked(id, productNumber) {
  const liked = getLikedImages();
  return liked.some(
    (img) => img.id === id && img.productNumber === productNumber
  );
}

export function likeImage(id, productNumber) {
  const liked = getLikedImages();
  if (!isImageLiked(id, productNumber)) {
    liked.push({ id, productNumber });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(liked));
  }
}

export function unlikeImage(id, productNumber) {
  const liked = getLikedImages().filter(
    (img) => !(img.id === id && img.productNumber === productNumber)
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(liked));
}

export function toggleLikeImage(id, productNumber) {
  if (isImageLiked(id, productNumber)) {
    unlikeImage(id, productNumber);
  } else {
    likeImage(id, productNumber);
  }
}
