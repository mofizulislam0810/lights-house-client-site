import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const history = useHistory();
  const nameRef = useRef();
  const emailRef = useRef();
  const productNameRef = useRef();
  const priceRef = useRef();
  const statusRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    fetch(`https://cryptic-stream-18194.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const { name, description, price, image } = product;

  const pendding = "pendding";
  const handleOrder = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const productName = productNameRef.current.value;
    const price = priceRef.current.value;
    const status = statusRef.current.value;
    const description = descriptionRef.current.value;
    const image = imageRef.current.value;
    const phone = phoneRef.current.value;
    const newOrder = {
      name: name,
      email: email,
      productName: productName,
      price: price,
      status: status,
      description: description,
      image: image,
      phone: phone,
    };
    fetch("https://cryptic-stream-18194.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully Order!");
          e.target.reset();
          history.push("/dashboard/myorder");
        }
      });
    e.preventDefault();
  };

  return (
    <div className="vh-100 form">
      <h2 className="btn btn-danger m-3 w-50 fw-bold">
        Order Confirmation Page
      </h2>
      <form onSubmit={handleOrder} className="row g-3 p-3 w-75 mx-auto">
        <div className="col-md-12 mb-3">
          <input
            type="text"
            ref={nameRef}
            value={user.displayName}
            className="form-control"
            id="inputEmail4"
            disabled
          />
        </div>
        <div className="col-md-12 mb-3">
          <input
            type="text"
            ref={emailRef}
            value={user.email}
            className="form-control"
            id="inputEmail4"
            disabled
          />
        </div>
        <div className="col-md-12 mb-3">
          <input
            type="text"
            ref={productNameRef}
            value={name}
            className="form-control"
            id="inputEmail4"
            disabled
          />
        </div>
        <div className="col-md-12 mb-3">
          <input
            type="number"
            ref={priceRef}
            value={price}
            className="form-control"
            id="inputDate"
            disabled
          />
        </div>
        <div className="col-md-12 mb-3">
          <textarea
            type="text"
            ref={descriptionRef}
            value={description}
            className="form-control"
            id="inputDate"
            disabled
          />
        </div>
        <div className="col-md-12 mb-3">
          <input
            type="text"
            ref={imageRef}
            value={image}
            className="form-control"
            id="inputDate"
            disabled
          />
        </div>
        <div className="col-12 mb-3">
          <input
            type="text"
            ref={statusRef}
            value={pendding}
            className="form-control"
            id="inputAddress2"
            disabled
          />
        </div>
        <div className="col-12 mb-3">
          <input
            type="number"
            ref={phoneRef}
            className="form-control"
            id="inputAddress2"
            placeholder="Please Give Your Phone Number"
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-danger w-100">
            Click For Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
