import aboutBanner from "../assets/about-banner.png";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

function About() {
  return (
    <div>
      <Banner image={aboutBanner} altImg="about banner" />
      <Collapse title="test" content="test bnojour comment ca va " />
      <Collapse
        title="test"
        content={[
          "Climatisation",
          "Wi-Fi",
          "Cuisine",
          "Espace de travail",
          "Fer à repasser",
          "Sèche-ch",
        ]}
        type="list"
      />
      <Collapse title="test" content="test" />
    </div>
  );
}

export default About;
