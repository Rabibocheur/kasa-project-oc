import { useParams } from "react-router-dom";
import rentals from "../data/rentals.json";

import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";

import Error from "../pages/Error";

function Rental() {
  const { id } = useParams();
  const rental = rentals.find((rental) => rental.id === id);

  console.log(rental);

  if (!rental) return <Error />;

  return (
    <div>
      <Carousel galerie={rental.pictures} />

      <div className="rental">
        <section className="rental__section1">
          <h1 className="rental__section1__title">{rental.title}</h1>
          <h3 className="rental__section1__location">{rental.location}</h3>
          <div className="rental__section1__tags">
            {rental.tags.map((tag) => (
              <div className="rental__section1__tags--tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </section>

        <section className="rental__section2">
          <div className="rental__section2__host">
            <img
              className="rental__section2__host__picture"
              src={rental.host.picture}
              alt="host picture"
            />
            <p className="rental__section2__host__name">{rental.host.name}</p>
          </div>
          <div className="rental__section2__rating">
            <Rating rates={rental.rating} />
          </div>
        </section>
      </div>

      <div className="rental-detail">
        <Collapse title="Description" text={rental.description} type="text" />
        <Collapse title="Équipements" lists={rental.equipments} type="list" />
      </div>
    </div>
  );
}

export default Rental;
