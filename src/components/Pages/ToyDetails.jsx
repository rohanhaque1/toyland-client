import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const ToyDetails = () => {
  const details = useLoaderData();
  const {
    photo,
    name,
    email,
    seller,
    category,
    description,
    price,
    quantity,
    rating,
  } = details;
  return (
    <>
      <section className="md:w-7/12 mx-auto px-10 md:px-20 py-6 bg-slate-200">
        <h2 className="text-3xl font-bold text-center my-4">Toy Details</h2>
        <div className="my-4">
          <Link to="/allToys">
            <button className="flex gap-2 items-center bg-orange-200 text-black px-3 py-2 font-bold rounded-lg">
              <span>
                <ArrowLeftIcon className="h-5 w-7" />
              </span>
              <p>All Toys</p>
            </button>
          </Link>
        </div>
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img
              src={photo}
              alt=""
              className="w-full h-60 sm:h-96 dark:bg-gray-500"
            />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-sm">Category : {category}</p>
                <p className="text-sm">Seller : {seller}</p>
                <p className="text-sm">Seller Email : {email}</p>
                <p className="text-sm">Price : $ {price}</p>
                <p className="text-sm">Available Quantity : {quantity}</p>
                <p className="text-sm">Ratings : {rating}</p>
              </div>
              <div className="dark:text-gray-100">
                <p className="font-bold">Toy Description : </p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToyDetails;
