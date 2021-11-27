import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://cryptic-stream-18194.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="spinner-grow m-5 p-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  const { _id, name, description, image, price } = product;
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row alin-item-center m-5">
          <div className="col-md-5 col-12 ">
            <div className="d-flex justify-content-center">
              <img className="mx-auto" src={image} alt="..." width="75%" />
            </div>
          </div>
          <div className="col-md-7 col-12 my-auto shadow p-5 bg-white rounded">
            <div className="p-0">
              <h3 className="fw-bold mb-3">
                <b>Ligth Name: {name}</b>
              </h3>
              <p className="m-3">
                <b>Description:</b> {description}
              </p>
              <h3 className="fw-bold m-3">Price: &#2547; {price}</h3>
              <Link
                className="btn btn-outline-danger w-100"
                to={`/order/${_id}`}
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
