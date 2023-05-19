import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyTable from "./ToyTable";

const AllToys = () => {
  const allToys = useLoaderData()
  
  return (
    <>
      <section className="md:w-8/12 mx-auto my-10">
        <h2 className="text-orange-800 font-bold text-4xl text-center my-8">
          All Toys Here
        </h2>

        <div className="input-group w-1/3 mx-auto flex">
          <input
            type="search"
            placeholder="Search Toy Name"
            className="input input-bordered input-primary w-full"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </section>
      <section className="my-10 px-20">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            
            <thead>
              <tr>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {
                allToys.map(allToy => <ToyTable key={allToy._id} allToy={allToy}></ToyTable>)
              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AllToys;
