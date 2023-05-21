import React from "react";

const Review = () => {
  return (
    <>
      <section
        className="px-10 w-1/2 mx-auto my-14 py-8 rounded-full shadow-xl bg-amber-100"
        data-aos="flip-left"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-600">
          "Our Customer Says"
        </h2>
        <div className="mx-10">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.freepik.com/premium-photo/handsome-isolated-wall-with-glasses-smiling_1368-47009.jpg?w=900" />
              </div>
            </div>
            <div className="chat-bubble">They have Awesome Toys Collection</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1684647483~exp=1684648083~hmac=14aa70c81e6c9b040a1b75e64317e286910fddd2c80f0a7c28c1fa9b4348cbdb" />
              </div>
            </div>
            <div className="chat-bubble">Products quality is very good.</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.freepik.com/free-photo/pretty-stylish-brunette-girl-wistfully-looking-camera-while-resting-city-street_574295-2205.jpg?w=900&t=st=1684647547~exp=1684648147~hmac=0720639ef2b8f4308858217c47f5c46cf07f57c4795a213c0511ba1574bb5ab5" />
              </div>
            </div>
            <div className="chat-bubble">
              I think it will be fine on the top rack.
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.freepik.com/free-photo/cheerful-woman-with-binoculars_23-2147654303.jpg?w=900&t=st=1684647560~exp=1684648160~hmac=abbf400915fc83311171e5417da71de8d2ff48a644f8d6a005f987c8bcd53e02" />
              </div>
            </div>
            <div className="chat-bubble">
              Yes! I just bought a set of 4 mini cars that are the exact same
              size as these cars.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
