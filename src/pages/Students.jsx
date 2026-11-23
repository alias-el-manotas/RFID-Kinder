import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/PageBackground.css";
import "../styles/Students.css";

import arrow from "../assets/icons/arrow.png";
import studentsIcon from "../assets/icons/students-menu.png";
import addIcon from "../assets/icons/add.png";
import searchIcon from "../assets/icons/search.png";

import doodlesTop from "../assets/illustrations/doodles-top.png";
import doodlesBottom from "../assets/illustrations/doodles-bottom-t1.png";

import avatarJose from "../assets/illustrations/avatar-jose.png";
import avatarLuis from "../assets/illustrations/avatar-luis.png";
import avatarAna from "../assets/illustrations/avatar-ana.png";
import avatarConan from "../assets/illustrations/avatar-conan.png";
import avatarArturo from "../assets/illustrations/avatar-arturo.png";

function Students() {
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const students = [
    {
      id: 1,
      nombre: "José Manuel Ramírez de la Rosa",
      matricula: "432493",
      avatar: avatarJose,
    },
    {
      id: 2,
      nombre: "Luis Ángel Fuentes Escobar",
      matricula: "897765",
      avatar: avatarLuis,
    },
    {
      id: 3,
      nombre: "Ana Sofía Montes Paredes",
      matricula: "908745",
      avatar: avatarAna,
    },
    {
      id: 4,
      nombre: "Conan Brita Morales Zepeda",
      matricula: "883235",
      avatar: avatarConan,
    },
    {
      id: 5,
      nombre: "Arturo Mateo Escobedo Gutiérrez",
      matricula: "657834",
      avatar: avatarArturo,
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.nombre
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.matricula.includes(search)
  );

  const toggleSearch = () => {
    if (showSearch) {
      setSearch("");
    }

    setShowSearch(!showSearch);
  };

  return (
    <div className="students-page page-background">

      <img
        src={doodlesTop}
        alt=""
        className="students-doodles-top"
      />

      <button
        className="students-back"
        onClick={() => navigate("/menu")}
      >
        <img src={arrow} alt="Regresar" />
      </button>

      <div className="students-header">

        <div className="students-title-container">

          <div className="students-title-badge">
            <img
              src={studentsIcon}
              alt="Mis alumnos"
              className="students-title-icon"
            />
          </div>

          <h1>Mis alumnos</h1>

        </div>

        <div className="students-actions">

          <button
            className="students-action-btn"
            onClick={() => alert("Próximamente")}
          >
            <img src={addIcon} alt="Agregar" />
          </button>

          <button
            className={`students-action-btn ${
              showSearch ? "active-search" : ""
            }`}
            onClick={toggleSearch}
          >
            <img src={searchIcon} alt="Buscar" />
          </button>

        </div>

      </div>

      {showSearch && (
        <div className="students-search">

          <div className="students-search-icon">
            <img
              src={searchIcon}
              alt="Buscar"
            />
          </div>

          <input
            type="text"
            placeholder="Ingrese el nombre o matrícula del alumno"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>
      )}

      <div className="students-list">

        {filteredStudents.map((student) => (

          <div
            key={student.id}
            className="student-row"
            onClick={() => navigate(`/students/${student.id}`)}
          >

            <div className="student-avatar-box">

              <img
                src={student.avatar}
                alt={student.nombre}
                className="student-avatar"
              />

            </div>

            <div className="student-info">

              <h3>{student.nombre}</h3>

              <p>
                Matrícula: {student.matricula}
              </p>

            </div>

          </div>

        ))}

      </div>

      <img
        src={doodlesBottom}
        alt=""
        className="students-doodles-bottom"
      />

    </div>
  );
}

export default Students;