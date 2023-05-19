import React from "react";

const ToyTable = ({ allToy }) => {
  const { photo, name, seller, category, price, quantity } = allToy;
  return (
    <>
      <tr>
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
          <button className="btn px-3 py-4 bg-teal-600 text-white">
            view details
          </button>
        </th>
      </tr>
    </>
  );
};

export default ToyTable;
