import React, { useEffect, useState } from "react";
import ExploreProduct from "../ExploreProduct/ExploreProduct";

const ExploreProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://cryptic-stream-18194.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="spinner-border text-primary m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <div className="mx-5 mt-5 pt-5">
      <h2 className="bg-danger mt-2 fw-bold p-2 text-white">Our All Light</h2>
      <div
        className="container bg-trasparent my-3 p-3"
        style={{ position: "relative" }}
      >
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-4">
          {products.map((product) => (
            <ExploreProduct
              key={product._id}
              product={product}
            ></ExploreProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
