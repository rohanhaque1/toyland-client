import React from "react";

const Banner = () => {
  return (
    <>
      <section className="px-10 md:px-28 py-14 bg-emerald-700 text-white md:flex justify-between items-center">
        <div className="space-y-4 my-6">
          <h1 className="text-5xl font-bold">
            Explore Our Brand <span className="text-orange-600">New Toys</span>
          </h1>
          <p className="text-md font-semibold md:w-3/5">
            Children everywhere enjoy playing with toys. A toy can be a simple
            ball, a game, or an expensive machine that uses the latest
            technology. The World Organization For Humanitarian Movement | WOHM.
            Make children’s life by sharing | Every Child, Every Chance, Every
            Day. Make a Child Smile. Help a Child Grow.
          </p>
        </div>

        <div className="w-full carousel rounded-box">
          <div className="carousel-item w-full">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71rS5LD7b7L._AC_UL600_SR600,600_.jpg"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://image.made-in-china.com/2f0j00lHRYihPBOrcb/Mercedes-Actros-Truck-Licensed-Ride-on-Car-Toy-Electric-Kids-Car.jpg"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://cdn11.bigcommerce.com/s-5kcaxd50lw/images/stencil/1280x1280/products/398366/6745949/f88a1c60efb8cb6eca0fcce9e13a0a71767624fb8c707d7aa58626d3e0641577__56191.1648564868.jpg?c=2"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://static-01.daraz.com.bd/p/ba3bf835d4eb83ed2f02b3e4726e21c1.jpg_720x720.jpg_.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://m.media-amazon.com/images/I/91jxT7cz9ML.jpg"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://m.media-amazon.com/images/I/71p5INlxF-L._SL1500_.jpg"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://static-01.daraz.com.bd/p/ba3bf835d4eb83ed2f02b3e4726e21c1.jpg_720x720.jpg_.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
