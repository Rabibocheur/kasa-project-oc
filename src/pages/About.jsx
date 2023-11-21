import Banner from "../components/Banner";
import aboutBanner from "../assets/about-banner.png";

function About() {
  return (
    <div>
      <Banner image={aboutBanner} altImg="home banner" />
    </div>
  );
}

export default About;
