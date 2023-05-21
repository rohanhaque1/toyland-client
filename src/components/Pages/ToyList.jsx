import React from "react";

const ToyList = ({ category, toys }) => {
    const filteredToys = toys.filter((toy) => toy.category === category);
    return (
      <div>
        {filteredToys.map((toy) => (
          <div key={toy._id} className="flex gap-6 w-1/2 mx-auto">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ToyList;
