import React from "react";
import { Link } from "react-router-dom";

const ToyTable = ({ allToy, index }) => {
  const {_id, photo, name, seller, category, price, quantity } = allToy;
  return (
    <>
      <tr>
        <td>{index + 1}.</td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
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
          {/* <Link to={`/allToys/${_id}`}>
            <label
              htmlFor="my-modal-6"
              className="btn px-3 py-4 bg-teal-600 text-white"
            >
              view details
            </label>
          </Link> */}
          <Link to={`/toyDetails/${_id}`}>
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
