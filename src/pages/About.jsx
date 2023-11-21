import Banner from "../components/Banner";
import aboutBanner from "../assets/about-banner.png";

function About() {
  return (
    <div>
      <Banner image={aboutBanner} altImg="about banner" />
    </div>
  );
}

export default About;
