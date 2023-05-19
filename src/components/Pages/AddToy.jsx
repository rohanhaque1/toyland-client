import React from "react";

const AddToy = () => {
  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const toys = {
      name,
      seller,
      email,
      category,
      price,
      rating,
      quantity,
      photo,
      description,
    };
    console.log(toys);

    // send data to the server
    fetch("http://localhost:5000/toys", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toys)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (insertedId) {
          alert('Car has been added successfully')
        }
      });
  };

  return (
    <section className="md:w-7/12 mx-auto px-10 md:px-20 py-10 bg-slate-200">
      <form
        onSubmit={handleAddToys}
        className="bg-white rounded-xl shadow-xl p-5 space-y-4"
      >
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
              className="input input-bordered input-primary w-full"
              required
            />
          </div>
          <div>
            <label className="block font-bold">Seller Name</label>
            <input
              type="text"
              name="seller"
              placeholder="Seller Name"
              className="input input-bordered input-primary w-full"
              required
            />
          </div>
          <div>
            <label className="block font-bold">Seller Email</label>
            <input
              type="email"
              name="email"
              placeholder="Seller Email"
              className="input input-bordered input-primary w-full"
              required
            />
          </div>
          <div>
            <label className="block font-bold">Sub Category</label>
            <select
              name="category"
              className="select select-primary w-full"
              required
            >
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
              className="input input-bordered input-primary w-full"
              required
            />
          </div>
          <div>
            <label className="block font-bold">Ratings</label>
            <input
              type="text"
              name="rating"
              placeholder="Ratings"
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
              className="input input-bordered input-primary w-full"
              required
            />
          </div>
        </div>
        <div>
          <label className="block font-bold">Photo</label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered input-primary w-full"
            required
          />
        </div>
        <div>
          <label className="block font-bold">Description</label>
          <textarea
            className="textarea textarea-primary block w-full resize-none"
            name="description"
            placeholder="Add Description"
            required
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            value="Add Toy"
            className="bg-orange-300 w-full my-3 py-3 rounded-lg font-bold"
          />
        </div>
      </form>
    </section>
  );
};

export default AddToy;
