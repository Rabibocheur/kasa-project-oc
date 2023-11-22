import PropTypes from "prop-types";
import { useState } from "react";

import arrowBack from "../assets/arrow_back.png";
import arrowForward from "../assets/arrow_forward.png";

function Carousel({ galerie }) {
  const [picture, setPicture] = useState(0);

  const changePicture = (direction) => {
    if (direction === "back") {
      //   setPicture(picture - 1);
      console.log(picture);
    }
  };

  return (
    <div>
      <header className="carousel">
        <img
          className="carousel__arrow carousel__arrow--back"
          src={arrowBack}
          alt=""
          onClick={changePicture("back")}
        />
        <img className="carousel__img" src={galerie[0]} alt="" />
        <img
          className=" carousel__arrow carousel__arrow--forward"
          src={arrowForward}
          alt=""
        />
      </header>
    </div>
  );
}

Carousel.propTypes = {
  galerie: PropTypes.array.isRequired,
};

export default Carousel;
