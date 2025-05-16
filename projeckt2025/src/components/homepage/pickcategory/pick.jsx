import React from "react";
// import { useState } from "react";
import useFerch from "../../utils/useFerch";
import { Link } from "react-router-dom";

export default function Pick() {
  const { data: DataCategories, loading, error } = useFerch("/api/pick");

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <section className="ChooseCategory bg-gray-100 md:p-4 rounded-lg shadow-md mt-4 mb-4">
      <h1 className="text-2xl font-semibold text-center mb-2">
        Choose your Category
      </h1>
      <span className="flex flex-col items-center mb-4">
        <Link
          to="/morph"
          className="text-center text-blue-600 mb-4 cursor-pointer hover:underline"
        >
          See all Category
        </Link>
      </span>

      <div className="overflow-x-auto flex flex-col items-start">
        <div className="grid grid-flow-col grid-rows-2 gap-2 pl-2 md:pl-0 md:gap-4 lg:grid-rows-2  ">
          {DataCategories.map((cat) => (
            <div
              key={cat.name}
              className="w-[100%] lg:w-100 h-autog bg-white rounded-xl shadow p-0.5 text-center border hover:border-blue-500 transition duration-300 ease-in-out transform hover:shadow-[0px_4px_15px_5px_rgba(34,167,197,0.75)]"
            >
              <Link to={`/category/${cat.name}`}>
                <div className="w-24 h-24 md:w-34 md:h-34 lg:h-80 lg:w-full">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="rounded-lg w-full h-full object-cover mb-2"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{cat.name}</h3>
                  <p className="italic text-sm text-gray-500">
                    {cat.count} artworks
                  </p>
                  <button className="text-blue-500 text-sm mt-1 cursor-pointer hover:underline">
                    Show +
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
