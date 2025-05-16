import React from "react";
import ViewMore from "./Viewmore";
import useFetch from "../../utils/useFetch";
import DataBackUp from "../../../data/data.json"
import { Link } from "react-router-dom";

export default function Announcement() {
  const { data: Data, loading, error } = useFetch("/api/data", DataBackUp);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  const topicColorMap = {
    Inspirations: "text-blue-600",
    Popular: "text-purple-600",
    Limited: "text-yellow-600",
    NEW: "text-red-600",
  };

  return (
    <section className="flex md:w-[100%] bg-white p-4 md:p-0 flex md:w-[100%] bg-white p-4 md:p-0 ">
      <div className=" md:w-[90%] mx-auto space-y-6 pt-8">
        {Data.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-2 w-[100%] md:h-auto gap-1 md:gap-6 items-center bg-white p-2 md:p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="w-[100%] h-24 md:h-auto rounded-md object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col h-[100%] justify-center justify-start">
              <Link
                to={`/topics/${item.topics.toLowerCase()}`}
                className={`text-xs md:text-base xl:text-lg ${
                  topicColorMap[item.topics] || "text-black"
                } `}
              >
                {item.topics}
              </Link>
              <h3 className="font-semibold lg:text-lg xl:text-xl">
                {item.title}
              </h3>
              <div>
                {item.categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category.toLowerCase()}`}
                    className="text-sm md:text-base xl:text-lg text-gray-600 italic hover:text-blue-600 hover:underline mr-2 last:mr-0"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        <ViewMore />
      </div>
    </section>
  );
}
