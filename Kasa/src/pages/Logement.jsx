import { useParams } from "react-router-dom"; // Hook React pour récupérer les paramètres présents dans l'URL
import dataLogements from "../data/logements.json";
import Carroussel from "../components/Carroussel/Carroussel";
import TitleLocation from "../components/TitleLocation/TitleLocation";
import Tags from "../components/Tags/Tags";
import HostInfo from "../components/HostInfo/HostInfo";
import Rating from "../components/Rating/Rating";
import Accordion from "../components/Accordion/Accordion";
import Page404 from "./Page404";
import "../styles/logement.scss";

function Logement() {
    const { id } = useParams();
    const logement = dataLogements.find((logement) => logement.id === id);

    if (!logement) {
        return <Page404 />;
    }

    return (
        <div className="logement-details">
      <Carroussel pictures={logement.pictures} />

      <div className="logement-info">
        <div className="logement-title-tags">
          <div className="logement-title">
            <TitleLocation
              title={logement.title}
              location={logement.location}
            />
          </div>
          <div className="logement-tags">
            <Tags tags={logement.tags} />
          </div>
        </div>

        <div className="logement-host-rating">
          <div className="logement-host">
            <HostInfo host={logement.host} />
          </div>
          <div className="logement-rating">
            <Rating rating={parseInt(logement.rating)} />
          </div>
        </div>
      </div>

      <div className="logement-accordions">
        <Accordion title="Description" content={logement.description} />
        <Accordion
          title="Équipements"
          content={logement.equipments.join(", ")}
        />
      </div>
    </div>
    )
}

export default Logement