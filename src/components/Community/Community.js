import React from "react";
import "./Community.css";

const Community = () => {
  return (
    <div className="container bg-white">
      <div className="community rounded">
        <div className="container p-5 d-flex justify-content-around align-items-center flex-wrap">
          <div className="d-flex flex-column">
            <h6 className="fw-bold">We’re Spreading Day by Day</h6>
            <h2 className="head">Join Our Friendly Community</h2>
            <p>
              Join with us for experiencing personalized online shopping in
              Bangladesh with Ponno Bilash
            </p>
          </div>
          <button className="community-btn">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Community;
