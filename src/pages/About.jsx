import Error from "../pages/Error";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

import aboutBanner from "../assets/about-banner.png";

import { useFetch } from "../utils/hooks";

function About() {
  const { data, isLoading, error } = useFetch("../../public/data/about.json");

  if (error) return <Error />;

  return (
    <div>
      <Banner image={aboutBanner} altImg="about banner" />
      {isLoading ? (
        <h1>Chargement...</h1>
      ) : (
        data.map((el, index) => (
          <Collapse
            key={`${el.title}-${index}`}
            title={el.title}
            text={el.text}
            type="text"
          />
        ))
      )}
    </div>
  );
}

export default About;
