import { Link } from "react-router-dom";
import "./card.scss";

function Card ({ id, title, cover }) {
  return (
    <div className="card">
      <Link to={`/logement/${id}`} className="card-link">
        <img src={cover} alt={`Visuel de ${title}`} className="card-image" />
        <div className="card-title-overlay">
          <h3 className="card-title">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
