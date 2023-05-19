import React from "react";

const AddToy = () => {
  return (
    <section className="md:w-7/12 mx-auto px-10 md:px-20 py-10 bg-slate-200">
      <form className="bg-white rounded-xl shadow-xl p-5 space-y-4">
        <h2 className="text-orange-800 font-bold text-3xl text-center my-5">
          Add a Toy
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-bold">Toy Name</label>
            <input
              type="text"
              name="name"
              placeholder="Toy Name"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label className="block font-bold">Seller Name</label>
            <input
              type="text"
              name="seller"
              placeholder="Seller Name"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label className="block font-bold">Seller Email</label>
            <input
              type="email"
              name="email"
              placeholder="Seller Email"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label className="block font-bold">Sub Category</label>
            <select className="select select-secondary w-full max-w-xs">
              <option disabled selected>
                Car Toys
              </option>
              <option>Sports Car</option>
              <option>Truck</option>
              <option>Bus</option>
              <option>Police car</option>
              <option>Regular Car</option>
              <option>Mini Fire Truck</option>
            </select>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          <div>
            <label className="block font-bold">Price</label>
            <input
              type="text"
              name="price"
              placeholder="$ 00"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label className="block font-bold">Ratings</label>
            <input
              type="text"
              name="rating"
              placeholder="Ratings"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label className="block font-bold">Available Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="Available quantity"
              className="input input-bordered input-secondary w-full"
            />
          </div>
        </div>
        <div>
          <label className="block font-bold">Photo</label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered input-secondary w-full"
          />
        </div>
        <div>
          <label className="block font-bold">Description</label>
          <textarea
            className="textarea textarea-secondary block w-full resize-none"
            placeholder="Add Description"
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="Add Coffee"
            className="bg-orange-300 w-full my-3 py-3 rounded-lg font-bold"
          />
        </div>
      </form>
    </section>
  );
};

export default AddToy;
