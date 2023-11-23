import { Link } from "react-router-dom";
import { useFetch } from "../utils/hooks";

import Error from "../pages/Error";
import Banner from "../components/Banner";
import homeBanner from "../assets/home-banner.png";

function Home() {
  const { data, isLoading, error } = useFetch("../../public/data/rentals.json");
  const rentals = data;

  if (error) return <Error />;

  return (
    <div>
      <Banner
        image={homeBanner}
        altImg="home banner"
        title="Chez vous, partout et ailleurs"
      />

      <section className="rentals">
        {isLoading ? (
          <h1>Chargement..</h1>
        ) : (
          rentals.map((rental) => (
            <Link
              key={`${rental.id}`}
              className="rentals__thumb"
              to={`/rental/${rental.id}`}
            >
              <img
                className="rentals__thumb__cover"
                src={rental.cover}
                alt={rental.title}
              />
              <h3 className="rentals__thumb__title">{rental.title}</h3>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}

export default Home;
