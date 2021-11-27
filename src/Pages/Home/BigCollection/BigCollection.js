import React from "react";
import imgOne from "../../../images/led-decorative-light-500x500.jpg";
import imgTwo from "../../../images/Modern-Lighting-Living-Room-Bedroom-Kitchen-Hanging-Lamps-Home-Decor-Lights-Chandelier-GT-711-.jpg";
const BigCollection = () => {
  return (
    <div>
      <div className="mx-3 my-2">
        <h2 className="p-2 bg-danger bg-gradient text-white">
          Our Big Collection
        </h2>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-lg-6 col-12 col-xl-5 mx-auto shadow p-4 my-2">
            <img
              className="rounded-circle img-fluid w-50 h-50 pt-3"
              src={imgOne}
              alt="alternative"
            />
            <div className="text-container">
              <p className="p-large pt-2">
                Decorative lighting is all about creating a mood and adding
                interest to a room, for example, by highlighting various objects
                and areas in the room such as a painting. ... Interior
                decorative lighting fixtures include ceiling fixtures like
                chandeliers.
              </p>
              <button className="rounded-pill btn btn-outline-danger px-5 fw-bold">
                Order Now...
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-12 col-xl-5 mx-auto shadow p-4 my-2">
            <img
              className="rounded-circle img-fluid w-50 h-50 pt-3"
              src={imgTwo}
              alt="alternative"
            />
            <div className="text-container">
              <p className="p-large pt-2">
                These hanging solar lanterns light charged by the sun,just need
                put them under the sun directly,It charged Fully in the sun 6-8
                hours will light up 8-12+hours.[Each lights includes an On/Off
                switch under the lid, turn it on before charging by solar.
              </p>
              <button className="rounded-pill btn btn-outline-danger px-5 fw-bold">
                Order Now...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCollection;
