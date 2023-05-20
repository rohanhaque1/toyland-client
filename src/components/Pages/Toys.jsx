import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";

const Toys = ({ toy, index }) => {
  const {
    _id,
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

  const handleDelete = (_id) => {
    
    Swal.fire({
      title: "Are you sure want to delete this?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Toy has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <tr>
        <td>{index + 1}.</td>
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
          <button onClick={() => handleDelete(_id)}>
            <TrashIcon className="h-8 w-10 text-red-500" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Toys;
