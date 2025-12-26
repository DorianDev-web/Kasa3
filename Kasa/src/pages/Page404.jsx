import { Link } from "react-router-dom";
import "../styles/page404/scss";

const Page404 = () => {
    return (
        <div className="page404-container">
            <h1 className="page404-code">404</h1>
            <p className="page404-message">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="page404-link">
            Retourner sur la page d'acceuil
            </Link>
        </div>
    );
};

export default Page404;