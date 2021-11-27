import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const number = 6;
  useEffect(() => {
    setLoading(true);
    fetch(`https://cryptic-stream-18194.herokuapp.com/products?limit=${number}`)
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
    <div className="mx-3 mt-5">
      <h2 className="p-2 bg-danger bg-gradient text-white">
        Our Decorative Light
      </h2>
      <div className="container my-3 p-3" style={{ position: "relative" }}>
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-3">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
