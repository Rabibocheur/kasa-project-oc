import aboutBanner from "../assets/about-banner.png";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

function About() {
  return (
    <div>
      <Banner image={aboutBanner} altImg="about banner" />
      <Collapse
        title="Fiabilité"
        text={`
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.`}
        type="text"
      />
      <Collapse
        title="Respect"
        text={`
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme.`}
        type="text"
      />
      <Collapse
        title="Service"
        text={`
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme.`}
        type="text"
      />
      <Collapse
        title="Sécurité"
        text={`
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes.`}
        type="text"
      />
    </div>
  );
}

export default About;
