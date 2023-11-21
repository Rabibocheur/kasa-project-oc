import Banner from "../components/Banner";
import homeBanner from "../assets/home-banner.png";

function Home() {
  return (
    <div>
      <Banner
        image={homeBanner}
        altImg="home banner"
        text="Chez vous, partout et ailleurs"
      />
    </div>
  );
}

export default Home;
