import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyTable from "./ToyTable";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle("All Toys");
  const [searchQuery, setSearchQuery] = useState("");
  const allToys = useLoaderData()
  const [toys, setToys] = useState(allToys)


  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section className="md:w-8/12 mx-auto my-10">
        <h2 className="text-orange-800 font-bold text-4xl text-center my-8">
          All Toys Here
        </h2>

        <div className="w-1/3 mx-auto">
          <input
            type="search"
            placeholder="Search Toy Name"
            className="input input-bordered input-primary w-full"
            onChange={handleSearch}
          />
        </div>
      </section>
      <section className="my-10 px-20">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredToys.map((allToy, index) => (
                <ToyTable
                  key={allToy._id}
                  allToy={allToy}
                  index={index}
                ></ToyTable>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AllToys;
