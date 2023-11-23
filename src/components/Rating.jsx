import PropTypes from "prop-types";

import inactiveStar from "../assets/star-inactive.png";
import activeStar from "../assets/star-active.png";

function Rating({ rates }) {
  let stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
        <img
          key={`star-${star}`}
          src={star <= rates ? activeStar : inactiveStar}
        ></img>
      ))}
    </div>
  );
}

Rating.propTypes = {
  rates: PropTypes.string.isRequired,
};

export default Rating;
