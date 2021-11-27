import React, { useEffect, useState } from "react";

const AllProduct = () => {
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
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://cryptic-stream-18194.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = products.filter(
              (order) => order._id !== id
            );
            console.log(remainingProducts);
            setProducts(remainingProducts);
          }
        });
    }
  };
  if (loading) {
    return (
      <div className="spinner-border text-primary m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <div className="mx-5 mt-5">
      <h2 className="bg-danger bg-gradient shadow mt-2 fw-bold p-2 text-white">
        Show All Products History
      </h2>
      <div
        className="container bg-trasparent my-4 p-3"
        style={{ position: "relative" }}
      >
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-3">
          {products.map((product) => (
            <div className="col">
              <div className="card h-100 shadow">
                {" "}
                <img
                  src={product.image}
                  className="card-img-top img-fluid mx-auto m-3 shadow"
                  style={{ width: "250px", height: "200px" }}
                  alt="..."
                />
                <div className="card-body">
                  <div className="clearfix mb-3">
                    {" "}
                    <span className="float-start badge rounded-pill bg-danger w-25">
                      Price
                    </span>{" "}
                    <span className="float-end price-hp fw-bold">
                      &#2547; {product.price}
                    </span>{" "}
                  </div>
                  <h6 className="card-title rounded-pill bg-danger fw-bold p-1 text-white">
                    Light Name: {product.name.slice(0, 15)}...
                  </h6>
                  <h5 className="card-title">
                    {product.description.slice(0, 100)}...
                  </h5>
                  <div className="text-center my-4">
                    <button
                      className="btn btn-outline-danger w-50 shadow"
                      onClick={() => handleDeleteProduct(product._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
