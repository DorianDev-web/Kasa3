import './Header.scss';
import logo from "../../images/logo-rouge.svg";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/" className="App-link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/a-propos" className="App-link">
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;