import { Link } from "react-router-dom";

import backgroundNav from "../assets/backgrounds/background-bottom-nav.png";

import homeIcon from "../assets/icons/home-bottom-nav.png";
import searchIcon from "../assets/icons/search-bottom-nav.png";
import pinIcon from "../assets/icons/pin-bottom-nav.png";
import menuIcon from "../assets/icons/menu-bottom-nav.png";

import "../styles/BottomNav.css";

function BottomNav() {
  const handleTracking = (e) => {
    e.preventDefault();

    alert("Próximamente");
  };

  return (
    <nav className="bottom-nav">

      <img
        src={backgroundNav}
        alt=""
        className="bottom-nav-background"
      />

      <Link to="/" className="bottom-nav-item">
        <img src={homeIcon} alt="Inicio" />
        <span>Inicio</span>
      </Link>

      <Link
        to="/quick-search"
        className="bottom-nav-item"
      >
        <img src={searchIcon} alt="Búsqueda" />
        <span>Búsqueda</span>
      </Link>

      <Link
        to="/tracking"
        className="bottom-nav-item"
        onClick={handleTracking}
      >
        <img src={pinIcon} alt="Rastreo" />
        <span>Rastreo</span>
      </Link>

      <Link
        to="/menu"
        className="bottom-nav-item"
      >
        <img src={menuIcon} alt="Menú" />
        <span>Menú</span>
      </Link>

    </nav>
  );
}

export default BottomNav;