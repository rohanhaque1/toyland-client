import React from "react";

const Gallery = () => {
  return (
    <>
      <section className="px-10 md:px-20 py-14 bg-white">
        <h2 className="text-center text-4xl text-orange-800 font-bold my-5">
          Our Toys Collections
        </h2>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://img.freepik.com/premium-vector/toys-younger-children_176826-10.jpg?w=740"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded-lg shadow-lg min-h-52 md:col-start-3 md:row-start-1 border-2 border-pink-800 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded-lg shadow-lg min-h-48 dark:bg-gray-500 aspect-square border-2 border-pink-800"
            src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=900&t=st=1684420405~exp=1684421005~hmac=ffd3b92a79bfc0ae07b642a2dab364b6801db4300acae7e7a7cf0ec0bf5d0206/?0"
          />
          <img
            alt=""
            className="w-full h-full rounded-lg shadow-lg min-h-48 dark:bg-gray-500 aspect-square border-2 border-pink-800"
            src="https://img.freepik.com/free-photo/fun-gorilla-3d-illustration_183364-80089.jpg?w=740&t=st=1684420588~exp=1684421188~hmac=9c9a0f28e507d9b8b254afb81989539294cef73156715fa5aa085e543f4dbde9"
          />
          <img
            alt=""
            className="w-full h-full rounded-lg shadow-lg min-h-48 dark:bg-gray-500 aspect-square border-2 border-pink-800"
            src="https://img.freepik.com/premium-photo/funny-illustrated-car-painted-rainbow-colors_183364-23794.jpg?w=826"
          />
          <img
            alt=""
            className="w-full h-full rounded-lg shadow-lg min-h-48 dark:bg-gray-500 aspect-square border-2 border-pink-800"
            src="https://img.freepik.com/premium-photo/dump-track-toy-loaded-with-blocks_470606-617.jpg?w=900"
          />
          <img
            alt=""
            className="w-full h-full rounded-lg shadow-lg min-h-48 dark:bg-gray-500 aspect-square border-2 border-pink-800"
            src="https://img.freepik.com/premium-photo/blue-rc-toy-suv-truck-car-asphalt-ground_43538-27.jpg?w=900"
          />
          <img
            alt=""
            className="w-full h-full rounded-lg shadow-lg min-h-48 dark:bg-gray-500 aspect-square border-2 border-pink-800"
            src="https://img.freepik.com/free-photo/colorful-car-toys_1194-2341.jpg?1&w=900&t=st=1684420903~exp=1684421503~hmac=505d56797c7d6efe7c03509a3d12dc80961d9e4efcf0a67b78be5d62dd9ba8b1"
          />
          <img
            alt=""
            className="w-full h-full rounded-lg shadow-lg min-h-48 dark:bg-gray-500 aspect-square border-2 border-pink-800"
            src="https://img.freepik.com/premium-vector/collection-colorful-toys-objects_29937-3214.jpg?w=740"
          />
          <img
            alt=""
            className="w-full h-full rounded-lg shadow-lg min-h-48 dark:bg-gray-500 aspect-square border-2 border-pink-800"
            src="https://img.freepik.com/premium-photo/car-crash-accident-traffic-road-insurance-claim-concept_39768-8268.jpg?w=900"
          />
          <img
            src="https://img.freepik.com/premium-photo/many-colored-little-toy-cars-gray-background_188237-1375.jpg?w=900"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded-lg shadow-lg min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square border-2 border-pink-800"
          />
        </div>
      </section>
    </>
  );
};

export default Gallery;
