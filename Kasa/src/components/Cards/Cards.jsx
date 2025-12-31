import dataLogements from "../../data/logements.json";
import Card from "../Card/Card";
import "./cards.scss";

const Cards = () => {
  return (
    <div className="cardlist">
      {dataLogements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  );
};

export default Cards;