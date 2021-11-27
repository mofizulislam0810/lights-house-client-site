import React from "react";
import Rating from "react-rating";
import "./DisplayReview.css";

const DisplayReview = (props) => {
  const { name, description, rating } = props.review;
  return (
    <div className="col">
      <div
        className="card mx-auto shadow p-3 mb-3 bg-white"
        style={{ width: "18rem", height: "300px" }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Yj_NBBvaNx-uzKlJMcKLC05zm0JyU0rgPPFBHrLHqzuf8bpyuMQi3Li34EIitDeS-9E&usqp=CAU"
          className="card-img-top mx-auto mt-2"
          style={{ width: "60px", height: "60px" }}
          alt="..."
        />
        <div className="card-body">
          <p className="card-title fw-bold">{name}</p>
          <Rating
            initialRating={rating}
            emptySymbol="far fa-star color"
            fullSymbol="fas fa-star color"
            readonly
          />
          <p className="card-text">
            &ldquo;{description.slice(0, 100)}...&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayReview;
