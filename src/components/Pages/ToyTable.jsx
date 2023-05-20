import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ToyTable = ({ allToy, index }) => {
  const { _id, photo, name, seller, category, price, quantity } = allToy;
  return (
    <>
      <tr>
        <td>{index + 1}.</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-14 h-14">
                <img src={photo} alt="cars" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{seller}</td>
        <td>{category}</td>
        <td>$ {price}</td>
        <td>{quantity}</td>
        <th>
          <Link to={`/details/${_id}`}>
            <button className="btn px-3 py-4 bg-teal-600 text-white">
              View Details
            </button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default ToyTable;
