import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Toys from "./Toys";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys)
  useTitle("My Toys");
  return (
    <>
      <section className="my-10 px-10 md:px-20">
        <h1 className="text-orange-800 font-bold text-3xl text-center my-5">
          My Toy Cart
        </h1>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Toy Picture</th>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Sub Category</th>
                <th>Description</th>
                <th>Price</th>
                <th>Ratings</th>
                <th>Available Quantity</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, index) => (
                <Toys key={toy._id} toy={toy} index={index} toys={toys} setToys={setToys}></Toys>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MyToys;
