import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import homeBanner from "../assets/home-banner.png";
import rentals from "../data/rentals.json";

function Home() {
  return (
    <div>
      <Banner
        image={homeBanner}
        altImg="home banner"
        title="Chez vous, partout et ailleurs"
      />

      <section className="rentals">
        {rentals.map((rental) => (
          <Link
            key={`${rental.id}`}
            className="rentals__article"
            to={`/location/${rental.id}`}
          >
            <img
              className="rentals__article__cover"
              src={rental.cover}
              alt={rental.title}
            />
            <h3 className="rentals__article__title">{rental.title}</h3>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;
