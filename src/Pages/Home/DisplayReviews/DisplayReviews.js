import React, { useEffect, useState } from "react";
import DisplayReview from "../DisplayReview/DisplayReview";

const DisplayReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://cryptic-stream-18194.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div></div>;
  }
  return (
    <div className="mx-3 mt-5">
      <h2 className="p-2 bg-danger bg-gradient text-white">Reviews</h2>
      <div
        className="container bg-trasparent my-2 p-3"
        style={{ position: "relative" }}
      >
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-2">
          {reviews.map((review) => (
            <DisplayReview key={review._id} review={review}></DisplayReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayReviews;
