import Banner from "../components/Banner";
// import Collapse from "../components/Collapse";

import { useParams } from "react-router-dom";

import rentals from "../data/rentals.json";

import inactiveStar from "../assets/star-inactive.png";
import activeStar from "../assets/star-active.png";

function Rental() {
  let { id } = useParams();
  const rental = rentals.find((rental) => rental.id === id);

  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rental.rating) stars.push(activeStar);
    else stars.push(inactiveStar);
  }

  return (
    <div>
      <Banner image={rental.pictures[0]} altImg="home banner" />

      <div className="rental">
        <section className="rental-section1">
          <h2 className="rental-section1__title">{rental.title}</h2>
          <h3 className="rental-section1__location">{rental.location}</h3>
          <div className="rental-section1__tags">
            {rental.tags.map((tag) => (
              <div className="rental-section1__tags--tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </section>

        <section className="rental-section2">
          <div className="rental-section2__host">
            <img
              className="rental-section2__host__picture"
              src={rental.host.picture}
              alt="host picture"
            />
            <p className="rental-section2__host__name">{rental.host.name}</p>
          </div>
          <div className="rental-section2__rating">
            {stars.map((star, index) => (
              <img key={`start-${index}`} src={star}></img>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Rental;
