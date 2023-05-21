import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Toys from "./Toys";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);
  const [sortOrder, setSortOrder] = useState("Ascending");

  const sortProducts = () => {
    const sortedProducts = [...toys];
    sortedProducts.sort((a, b) => {
      if (sortOrder === "Ascending") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setToys(sortedProducts);
    setSortOrder(sortOrder === "Ascending" ? "Descending" : "Ascending");
  };

  return (
    <>
      <section className="my-10 px-10 md:px-20">
        <h1 className="text-orange-800 font-bold text-4xl text-center my-5">
          My Toy Cart
        </h1>
        <div className="text-center my-4">
          <p className="font-bold text-md">Sort By Price - </p>
          <label
            htmlFor="Toggle3"
            className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800"
          >
            <input id="Toggle3" type="checkbox" className="hidden peer" />

            <span
              onClick={sortProducts}
              className={`${
                sortOrder == "Ascending"
                  ? "px-4 py-2 rounded-l-md bg-gray-300 peer-checked:dark:bg-red-500 peer-checked:text-white  font-bold"
                  : ""
              }`}
            >
              Ascending
            </span>

            <span
              onClick={sortProducts}
              className={`${
                sortOrder == "Descending"
                  ? "px-4 py-2 rounded-r-md dark:bg-red-500 peer-checked:bg-gray-300 peer-checked:text-black font-bold"
                  : ""
              }`}
            >
              Descending
            </span>
          </label>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Update</th>
                <th>Delete</th>
                <th>Toy Picture</th>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Ratings</th>
                <th>Available Quantity</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, index) => (
                <Toys
                  key={toy._id}
                  toy={toy}
                  index={index}
                  toys={toys}
                  setToys={setToys}
                ></Toys>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MyToys;
