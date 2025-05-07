import React from "react";
import { Link } from "react-router-dom";

export default function Yourstyle() {
  return (
    <section className=" bg-red-100 py-12 px-4 text-center md:mt-15">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
          Style Your Space <br /> With Custom Posters
        </h1>
        <p className="text-gray-700 mb-8 italic md:text-2xl">
          Upload your image, select your finish, size, and frame to create a
          custom poster. Transform your space with a unique, high-quality print
          made just for you!
        </p>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-2 max-w-5xl mx-auto md:gap-8">
        <img
          src="https://img.freepik.com/free-photo/couple-posing-holding-heart-smiling_23-2148380072.jpg"
          alt="Couple posing and holding heart and smiling"
          className="col-span-1 row-span-2 w-full h-full object-cover rounded-lg shadow-md"
        />

        <img
          src="https://img.freepik.com/free-photo/cute-infant-sleeping-with-grey-crocheted-hat-with-toy-rabbit_179666-115.jpg"
          alt="Cute infant sleeping"
          className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg shadow-md"
        />

        <img
          src="https://img.freepik.com/free-photo/friends-having-fun-their-reunion_23-2149144283.jpg"
          alt="Friends having fun"
          className="col-span-1 row-span-1 w-full h-full object-cover rounded-lg shadow-md"
        />

        <img
          src="https://img.freepik.com/free-photo/young-family-with-their-little-son-home_1303-20993.jpg"
          alt="Young family with their little son"
          className="col-span-1 row-span-2 w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="col-span-2 mt-4  md:mt-10 md:justify-items-center ">
            <Link to="/underdeveloped">
            <p className="bg-white px-4 py-1 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition  md:text-2xl md:font-semibold">
              Try It
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
