import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const Toys = ({ toy }) => {
  const {
    category,
    description,
    email,
    name,
    photo,
    price,
    quantity,
    rating,
    seller,
  } = toy;

  return (
    <>
      <tr>
        <td>1</td>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>
          <h3 className="font-bold">{name}</h3>
        </td>
        <td>{seller}</td>
        <td>{email}</td>
        <td>{category}</td>
        <td>{description}</td>
        <td>$ {price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
        <td>
          <PencilIcon className="h-8 w-10 text-emerald-500" />
        </td>
        <td>
          <TrashIcon className="h-8 w-10 text-red-500" />
        </td>
      </tr>
    </>
  );
};

export default Toys;
