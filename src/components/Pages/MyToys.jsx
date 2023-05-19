import React from 'react';
import { PencilIcon,TrashIcon } from "@heroicons/react/24/solid";

const MyToys = () => {
    return (
      <>
        <section className="my-10 px-10 md:px-20">
          <h1 className="text-orange-800 font-bold text-3xl text-center my-5">
            My Toy Cart
          </h1>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Toy Picture</th>
                  <th>Toy Name</th>
                  <th>Seller Name</th>
                  <th>Seller Email</th>
                  <th>Sub Category</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Ratings</th>
                  <th>Available Quantity</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                            <tr>
                                <td>1</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://image.made-in-china.com/2f0j00lHRYihPBOrcb/Mercedes-Actros-Truck-Licensed-Ride-on-Car-Toy-Electric-Kids-Car.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h3 className="font-bold">Hart Hagerty</h3>
                  </td>
                  <td>Seller Name</td>
                  <td>Seller Name</td>
                  <td>category</td>
                  <td>description</td>
                  <td>$ price</td>
                  <td>rating</td>
                  <td>quantity</td>
                  <td>
                    <PencilIcon className="h-8 w-10 text-emerald-500" />
                  </td>
                  <td>
                    <TrashIcon className="h-8 w-10 text-red-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
};

export default MyToys;