import { useParams } from "react-router-dom";
import dataLogements from "../data/logements.json";
import Carroussel from "../components/Carroussel/Carroussel";

function Logement() {
    const { id } = useParams();
    const logement = dataLogements.find((logement) => logement.id === id);

    if (!logement) {
        return <Page404 />;
    }

    return (
        <div className="logement-details">
            <Carroussel pictures={logement.pictures} />
        </div>
    )
}

export default Logement