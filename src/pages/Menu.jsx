import Layout from "../components/Layout";
import MenuItem from "../components/MenuItem";

import "../styles/Menu.css";

import backgroundMenu from "../assets/backgrounds/background-menu.png";

import spiralsBottomRight from "../assets/illustrations/spirals-bottom-right.png";

import homeMenu from "../assets/icons/home-menu.png";
import searchMenu from "../assets/icons/search-menu.png";
import pinMenu from "../assets/icons/pin-menu.png";
import attendanceMenu from "../assets/icons/attendance-menu.png";
import studentsMenu from "../assets/icons/students-menu.png";
import staffMenu from "../assets/icons/staff-menu.png";
import historyMenu from "../assets/icons/history-menu.png";

function Menu() {
  const handleTracking = () => {
    alert("Próximamente");
  };

  return (
    <Layout>

      <div className="menu-page">

        <img
          src={backgroundMenu}
          alt=""
          className="menu-background"
        />

        <img
          src={spiralsBottomRight}
          alt=""
          className="menu-spiral"
        />

        <h1 className="menu-title">
          Menú
        </h1>

        <div className="menu-grid">

          <MenuItem
            texto="Inicio"
            ruta="/"
            icono={homeMenu}
            colorClase="inicio"
          />

          <MenuItem
            texto="Búsqueda rápida"
            ruta="/quick-search"
            icono={searchMenu}
            colorClase="busqueda"
          />

          <MenuItem
            texto="Rastreo de ubicación"
            icono={pinMenu}
            onClick={handleTracking}
            colorClase="rastreo"
          />

          <MenuItem
            texto="Control de asistencia"
            ruta="/attendance"
            icono={attendanceMenu}
            colorClase="asistencia"
          />

          <MenuItem
            texto="Mis alumnos"
            ruta="/students"
            icono={studentsMenu}
            colorClase="alumnos"
          />

          <MenuItem
            texto="Personal"
            ruta="/staff"
            icono={staffMenu}
            colorClase="personal"
          />

          <MenuItem
            texto="Historial"
            ruta="/history"
            icono={historyMenu}
            colorClase="historial"
          />

        </div>

      </div>

    </Layout>
  );
}

export default Menu;