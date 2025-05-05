import { useMemo } from "react";

const RandomImageGrid = ({ Data }) => {
  // Randomize the image list once on render
  const randomImages = useMemo(() => {
    const shuffled = [...Data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6); // Display 6 random images
  }, [Data]);

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
      {randomImages.map((image) => (
        <div
          key={image.id}
          className="bg-white w-full h-full rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={image.image}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default RandomImageGrid;
