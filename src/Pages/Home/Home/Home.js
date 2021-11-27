import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import BigCollection from "../BigCollection/BigCollection";
import DisplayReviews from "../DisplayReviews/DisplayReviews";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <DisplayReviews></DisplayReviews>
      <BigCollection></BigCollection>
    </div>
  );
};

export default Home;
