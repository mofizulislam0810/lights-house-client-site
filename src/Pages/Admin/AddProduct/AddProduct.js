import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({});
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProduct = { ...addProduct };
    newProduct[field] = value;
    console.log(field, value, newProduct);
    setAddProduct(newProduct);
  };
  const handleAddProduct = (e) => {
    fetch("https://cryptic-stream-18194.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product Add Successfully!");
          e.target.reset();
          history.push("/exploreAllProduct");
        }
      });
    console.log(addProduct);
    e.preventDefault();
  };

  return (
    <div className="mx-5 mt-5">
      <h2 className="btn btn-danger bg-gradient m-3 w-50 fw-bold">
        Add New Product In Product Section
      </h2>
      <form
        onSubmit={handleAddProduct}
        className="row g-3 p-3 w-75 mx-auto
      "
      >
        <div className="col-md-12 mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            onBlur={handleOnBlur}
            id="inputEmail4"
            placeholder="Light Name"
            required
          />
        </div>
        <div className="col-md-12 mb-3">
          <input
            type="number"
            name="price"
            className="form-control"
            onBlur={handleOnBlur}
            id="inputDate"
            placeholder="Light Price"
            required
          />
        </div>
        <div className="col-12 mb-3">
          <textarea
            type="text"
            name="description"
            className="form-control"
            onBlur={handleOnBlur}
            id="inputAddress"
            placeholder="Light Description"
            style={{ height: "100px" }}
            required
          />
        </div>
        <div className="col-12 mb-3">
          <input
            type="text"
            name="image"
            className="form-control"
            onBlur={handleOnBlur}
            id="inputAddress2"
            placeholder="Light Image Url"
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-danger w-100">
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
