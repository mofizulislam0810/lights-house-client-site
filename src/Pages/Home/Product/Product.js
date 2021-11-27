import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { _id, name, description, image, price } = props.product;
  return (
    <div className="col">
      <div className="card mx-auto h-100 shadow">
        {" "}
        <img
          src={image}
          className="card-img-top img-fluid mx-auto m-3 shadow"
          style={{ width: "350px", height: "300px" }}
          alt="..."
        />
        <div className="card-body">
          <div className="clearfix mb-3">
            {" "}
            <span className="float-start badge rounded-pill bg-danger w-25">
              Price
            </span>{" "}
            <span className="float-end price-hp fw-bold">&#2547; {price}</span>{" "}
          </div>
          <p className="card-title rounded-pill bg-danger fw-bold p-1 text-white">
            Light Name: {name.slice(0, 30)}...
          </p>
          <h5 className="card-title">{description.slice(0, 100)}...</h5>
          <div className="text-center my-4">
            {" "}
            <Link
              to={`/product/${_id}`}
              className="btn btn-outline-danger w-50 shadow"
            >
              Order Now
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
