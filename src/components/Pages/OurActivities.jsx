import React from "react";

const OurActivities = () => {
  return (
    <>
      <section className="w-9/12 mx-auto my-14 text-center bg-slate-300 p-8 rounded-xl shadow-lg grid grid-cols-3 gap-6">
        <div>
          <img
            src="https://img.freepik.com/premium-photo/photo-think-outside-box-school-green-blackboard-generat-ai_872074-559.jpg?w=1060"
            alt=""
            className="w-10 h-10 rounded-full mx-auto"
          />
          <h4 className="text-lg font-bold">Unique Collections</h4>
          <p>
            "Discover a world of wonder with our unique toy collection. From
            rare vintage finds to innovative modern creations, these toys are
            sure to spark imagination and create lasting memories. Explore now!"
          </p>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/target-audience-search-internet-promotion-customer-focus-advertising-direction-ad-campaign-clientele-acquisition-client-manager-cartoon-character-vector-isolated-concept-metaphor-illustration_335657-2859.jpg?w=740&t=st=1684426118~exp=1684426718~hmac=ad6d8d8e489d143b2510d65b57adb7f49cc77314f1f980c2ef1d4a37a9ec95be"
            alt=""
            className="w-10 h-10 rounded-full mx-auto"
          />
          <h4 className="text-lg font-bold">Updated Products</h4>
          <p>
            "Exciting news! Our latest toy products are here to revolutionize
            playtime. With cutting-edge features, vibrant designs, and endless
            fun, these updates will ignite the imagination of children and
            delight toy enthusiasts. Check them out now!"
          </p>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/3d-chat-bubble-with-yellow-star-customer-rating-feedback-network-communication-social-media-bubble_313242-1363.jpg?w=740"
            alt=""
            className="w-10 h-10 rounded-full mx-auto"
          />
          <h4 className="text-lg font-bold">Customer Review</h4>
          <p>
            "Our customers rave about our toy products! With glowing reviews
            highlighting their durability, educational value, and entertainment
            factor, it's clear that these toys bring joy and delight to children
            of all ages. See what they're saying!"
          </p>
        </div>
      </section>
    </>
  );
};

export default OurActivities;
