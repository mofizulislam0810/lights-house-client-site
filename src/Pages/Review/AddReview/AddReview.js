import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();
  const history = useHistory();
  const nameRef = useRef();
  const descriptionRef = useRef();
  const ratingRef = useRef();

  const handleReview = (e) => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const rating = ratingRef.current.value;

    const newReview = {
      name: name,
      description: description,
      rating: rating,
    };
    fetch("https://cryptic-stream-18194.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully Reviewed!");
          e.target.reset();
          history.push("/");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="mx-5 mt-5">
      <h2 className="btn btn-danger bg-gradient m-3 w-50 fw-bold">
        Give Your Review
      </h2>
      <form
        onSubmit={handleReview}
        className="row g-3 p-3 w-75 mx-auto
  "
      >
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
          <textarea
            type="text"
            className="form-control"
            ref={descriptionRef}
            id="inputDate"
            placeholder="Description"
          />
        </div>
        <div className="col-12 mb-3">
          <input
            type="number"
            className="form-control"
            ref={ratingRef}
            id="inputAddress2"
            placeholder="Enter Number 0-5 for Review Rating"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-danger w-100">
            Please Give Your Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
