import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import homeBanner from "../assets/home-banner.png";
import locations from "../data/locations.json";

function Home() {
  return (
    <div>
      <Banner
        image={homeBanner}
        altImg="home banner"
        title="Chez vous, partout et ailleurs"
      />

      <section className="locations">
        {locations.map((location) => (
          <Link
            key={`${location.id}`}
            className="locations__article"
            to={`/location/${location.id}`}
          >
            <img
              className="locations__article__cover"
              src={location.cover}
              alt={location.title}
            />
            <h3 className="locations__article__title">{location.title}</h3>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;
