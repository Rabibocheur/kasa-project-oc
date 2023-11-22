import PropTypes from "prop-types";
import { useState } from "react";

import arrowBack from "../assets/arrow_back.png";
import arrowForward from "../assets/arrow_forward.png";

function Carousel({ galerie }) {
  const [index, setIndex] = useState(0);

  const changePicture = (direction) => {
    if (direction === "back") {
      if (index === 0) setIndex(galerie.length - 1);
      else setIndex(index - 1);
    } else if (direction === "forward") {
      if (index === galerie.length - 1) setIndex(0);
      else setIndex(index + 1);
    }
  };

  const hideUtility = galerie.length <= 1 ? "carousel--hidden" : "";

  return (
    <div>
      <header className="carousel">
        <button
          className={`carousel__arrow carousel__arrow--back ${hideUtility} `}
          onClick={() => changePicture("back")}
        >
          <img src={arrowBack} alt="" />
        </button>

        <img className="carousel__img" src={galerie[index]} alt="" />

        <span className={`carousel__numbering ${hideUtility}`}>
          {index + 1}/{galerie.length}
        </span>

        <button
          className={`carousel__arrow  carousel__arrow--forward ${hideUtility}`}
          onClick={() => changePicture("forward")}
        >
          <img src={arrowForward} alt="" />
        </button>
      </header>
    </div>
  );
}

Carousel.propTypes = {
  galerie: PropTypes.array.isRequired,
};

export default Carousel;
