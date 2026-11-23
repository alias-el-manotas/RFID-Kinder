import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/PageBackground.css";
import "../styles/Staff.css";

import staffData from "../data/staffData";

import arrow from "../assets/icons/arrow.png";
import staffIcon from "../assets/icons/staff-menu.png";
import addIcon from "../assets/icons/add.png";
import searchIcon from "../assets/icons/search.png";

import doodlesTop from "../assets/illustrations/doodles-top.png";
import doodlesBottom from "../assets/illustrations/doodles-bottom-t1.png";

function Staff() {
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const filteredStaff = Object.values(staffData).filter(
  (person) =>
    person.nombre
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    person.puesto
      .toLowerCase()
      .includes(search.toLowerCase())
);

  const administradores = filteredStaff.filter(
    (person) => person.categoria === "Administrador"
  );

  const usuarios = filteredStaff.filter(
    (person) => person.categoria === "Usuarios"
  );

  const toggleSearch = () => {
    if (showSearch) {
      setSearch("");
    }

    setShowSearch(!showSearch);
  };

  return (
    <div className="staff-page page-background">

      <img
        src={doodlesTop}
        alt=""
        className="staff-doodles-top"
      />

      <button
        className="staff-back"
        onClick={() => navigate("/menu")}
      >
        <img src={arrow} alt="Regresar" />
      </button>

      <div className="staff-header">

        <div className="staff-title-container">

          <div className="staff-title-badge">
            <img
              src={staffIcon}
              alt="Personal"
              className="staff-title-icon"
            />
          </div>

          <h1>Personal</h1>

        </div>

        <div className="staff-actions">

          <button
            className="staff-action-btn"
            onClick={() => alert("Próximamente")}
          >
            <img src={addIcon} alt="Agregar" />
          </button>

          <button
            className={`staff-action-btn ${
              showSearch ? "active-search" : ""
            }`}
            onClick={toggleSearch}
          >
            <img src={searchIcon} alt="Buscar" />
          </button>

        </div>

      </div>

      {showSearch && (
        <div className="staff-search">

          <div className="staff-search-icon">
            <img
              src={searchIcon}
              alt="Buscar"
            />
          </div>

          <input
            type="text"
            placeholder="Ingrese el nombre o puesto del personal"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>
      )}

      <div className="staff-list">

        {administradores.length > 0 && (
          <>
            <h2 className="staff-category">
              Administrador
            </h2>

            {administradores.map((person) => (
              <div
                key={person.id}
                className="staff-row"
                onClick={() =>
                  navigate(`/staff/${person.id}`)
                }
              >

                <div className="staff-avatar-box">
                  <img
                    src={person.avatar}
                    alt={person.nombre}
                    className="staff-avatar"
                  />
                </div>

                <div className="staff-info">
                  <h3>{person.nombre}</h3>

                  <p>
                    Puesto: {person.puesto}
                  </p>
                </div>

              </div>
            ))}
          </>
        )}

        {usuarios.length > 0 && (
          <>
            <h2 className="staff-category">
              Usuarios
            </h2>

            {usuarios.map((person) => (
              <div
                key={person.id}
                className="staff-row"
                onClick={() =>
                  navigate(`/staff/${person.id}`)
                }
              >

                <div className="staff-avatar-box">
                  <img
                    src={person.avatar}
                    alt={person.nombre}
                    className="staff-avatar"
                  />
                </div>

                <div className="staff-info">
                  <h3>{person.nombre}</h3>

                  <p>
                    Puesto: {person.puesto}
                  </p>
                </div>

              </div>
            ))}
          </>
        )}

        {filteredStaff.length === 0 && (
          <div className="staff-empty">
            No se encontraron resultados.
          </div>
        )}

      </div>

      <img
        src={doodlesBottom}
        alt=""
        className="staff-doodles-bottom"
      />

    </div>
  );
}

export default Staff;