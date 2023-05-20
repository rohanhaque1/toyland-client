import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";

const ToyUpdate = () => {
  const toys = useLoaderData();
  const {
    _id,
    description,
    name,
    price,
    quantity,
  } = toys;

    
     const handleUpdateToy = (event) => {
       event.preventDefault();
       const form = event.target;
       const price = form.price.value;
       const quantity = form.quantity.value;
       const description = form.description.value;
       const toys = {
         price,
         quantity,
         description,
       };

       // send data to the server
       fetch(`http://localhost:5000/toys/${_id}`, {
         method: "PUT",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(toys),
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.modifiedCount > 0) {
             Swal.fire({
               title: "Success!",
               text: "Toy Updated Successfully..!!",
               icon: "success",
               confirmButtonText: "Cool",
             });
           }
           form.reset("");
         });
     };
  return (
    <>
      <section className="md:w-1/2 mx-auto px-10 md:px-20 py-10 bg-slate-200">
        <div className="my-4">
          <Link to="/myToys">
            <button className="flex gap-2 items-center bg-teal-600 text-white px-3 py-2 font-bold rounded-lg">
              <span>
                <ArrowLeftIcon className="h-6 w-6" />
              </span>
              <p>My Toys</p>
            </button>
          </Link>
        </div>
        <form onSubmit={handleUpdateToy} className="bg-white rounded-xl shadow-xl p-5 space-y-4">
          <h2 className="text-orange-800 font-bold text-3xl text-center my-5">
            Update {name} Toy
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block font-bold">Price</label>
              <input
                type="text"
                name="price"
                placeholder="$ 00"
                defaultValue={price}
                className="input input-bordered input-primary w-full"
                required
              />
            </div>

            <div>
              <label className="block font-bold">Available Quantity</label>
              <input
                type="number"
                name="quantity"
                placeholder="Available quantity"
                defaultValue={quantity}
                className="input input-bordered input-primary w-full"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-bold">Description</label>
            <textarea
              className="textarea textarea-primary block w-full resize-none"
              name="description"
              placeholder="Add Description"
              defaultValue={description}
              required
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Update Toy"
              className="bg-orange-300 w-full my-3 py-3 rounded-lg font-bold"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default ToyUpdate;
