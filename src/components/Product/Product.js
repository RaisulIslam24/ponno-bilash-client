import React from "react";
import { useHistory } from "react-router";
import "./Product.css";

const Product = ({ pd }) => {
  const { _id } = pd;
  const history = useHistory();

  const handleProduct = (id) => {
    history.push(`/checkout/${id}`);
  };

  return (
    <div>
      <div
        className="card shadow m-2"
        style={{ width: "14rem", cursor: "pointer" }}
        onClick={() => handleProduct(_id)}
      >
        <img
          style={{ width: "200px" }}
          className="m-auto card-img-top"
          src={pd.imageUrl}
          alt=""
        />
        <div className="card-body">
          <h6 className="title card-title">
            {pd.name} - {pd.weight}
          </h6>
          <div className="card-footer d-flex justify-content-center text-secondary">
            <h5>
              {" "}
              <span style={{ fontSize: "1.2em" }}>৳</span>
              {pd.price}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
