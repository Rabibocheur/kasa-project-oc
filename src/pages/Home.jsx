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
      <section className="locations">
        <article className="locations__article">titre de la section</article>
        <article className="locations__article">titre de la section</article>
        <article className="locations__article">titre de la section</article>
        <article className="locations__article">titre de la section</article>
        <article className="locations__article">titre de la section</article>
      </section>
    </div>
  );
}

export default Home;
