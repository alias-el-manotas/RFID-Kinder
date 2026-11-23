import { useNavigate, useParams } from "react-router-dom";

import "../styles/PageBackground.css";
import "../styles/StudentDetail.css";

import arrow from "../assets/icons/arrow.png";
import studentsIcon from "../assets/icons/students-menu.png";

import reassignIcon from "../assets/icons/reassign.png";
import editIcon from "../assets/icons/edit.png";
import lockIcon from "../assets/icons/lock.png";
import deleteIcon from "../assets/icons/delete.png";

import doodlesTop from "../assets/illustrations/doodles-top.png";
import doodlesBottom from "../assets/illustrations/doodles-bottom-t1.png";

import studentsData from "../data/studentsData";

function StudentDetail() {
  const navigate = useNavigate();

  const { id } = useParams();

  const student = studentsData[id];

  return (
    <div className="student-detail-page page-background">

      <img
        src={doodlesTop}
        alt=""
        className="detail-doodles-top"
      />

      {/* CONTENIDO FIJO */}
      <div className="student-detail-header">

        <div className="detail-header-row">

  <button
    className="detail-back"
    onClick={() => navigate("/students")}
  >
    <img src={arrow} alt="Regresar" />
  </button>

  <div className="detail-title">

    <div className="detail-title-badge">
      <img
        src={studentsIcon}
        alt="Alumnos"
      />
    </div>

    <h1>Mis alumnos</h1>

  </div>

</div>

        <div className="detail-student-info">

          <div className="detail-avatar-box">

            <img
              src={student.avatar}
              alt={student.nombre}
              className="detail-avatar"
            />

          </div>

          <div className="detail-text">

            <h2>{student.nombre}</h2>

            <p>Matrícula: {student.matricula}</p>

            <p>NFC: {student.nfc}</p>

            <p>Estado: {student.estado}</p>

          </div>

        </div>

      </div>

      {/* CONTENIDO CON SCROLL */}
      <div className="student-detail-content">

        <section>

    <h3>Fecha de nacimiento:</h3>

    <p>{student.fechaNacimiento}</p>

  </section>

  <section>

    <h3>Grupo:</h3>

    <p>{student.grupo}</p>

  </section>

  <section>

    <h3>Tutores:</h3>

    {student.tutores.map((tutor, index) => (

    <div key={index}>

      <p>
        ▪ {tutor.nombre}{" "}
        <span className="detail-muted">
          {tutor.parentesco}
        </span>
      </p>

      <p className="detail-muted">
        844-123-4567
      </p>

      <p className="detail-muted">
        nombre@correoelectronico.com
      </p>

      <br />

    </div>

  ))}

  </section>

  <section>

    <h3>Contactos de emergencia:</h3>

    {student.contactosEmergencia.map(
    (contacto, index) => (

      <p key={index}>
        ▪ {contacto.telefono}{" "}
        <span className="detail-muted">
          {contacto.parentesco}
        </span>
      </p>

    )
  )}

  </section>

  <section>

    <h3>
      Personas autorizadas para recoger:
    </h3>

    {student.autorizados.map(
    (persona, index) => (

      <p key={index}>
        ▪ {persona.nombre}{" "}
        <span className="detail-muted">
          {persona.parentesco}
        </span>
      </p>

    )
  )}

  </section>

  <section>

    <h3>Últimas asistencias:</h3>

    {student.asistencias.map(
    (asistencia, index) => (

      <div key={index}>

        <p className="detail-date">
          {asistencia.fecha}
        </p>

        <p>
          Entrada {asistencia.entrada}
        </p>

        <p>
          Salida {asistencia.salida}
        </p>

        <br />

      </div>

    )
  )}

  </section>

  <section>

    <h3>Historial médico</h3>

    <p>
      ▪ Tipo de sangre: {student.tipoSangre}
    </p>

    <p>
      ▪ Alergias: {student.alergias}
    </p>

    <p>
      ▪ Condiciones: {student.condiciones}
    </p>

  </section>

  <section>

    <h3>Observaciones médicas</h3>

    {student.observaciones.map(
        (item, index) => (
          <p key={index}>
            #{index + 1} - {item}
          </p>
        )
      )}

  </section>

  <section>

    <h3>Notas prioritarias</h3>

    {student.notas.map(
        (item, index) => (
          <p key={index}>
            #{index + 1} - {item}
          </p>
        )
      )}

  </section>

        <div className="detail-buttons">

          <button
            className="detail-option"
            onClick={() =>
              alert("Próximamente")
            }
          >
            <div className="detail-option-icon">
              <img src={reassignIcon} alt="" />
            </div>

            <span>Reasignar NFC</span>
          </button>

          <button
            className="detail-option"
            onClick={() =>
              alert("Próximamente")
            }
          >
            <div className="detail-option-icon">
              <img src={editIcon} alt="" />
            </div>

            <span>Editar información</span>
          </button>

          <button
            className="detail-option"
            onClick={() =>
              alert("Próximamente")
            }
          >
            <div className="detail-option-icon">
              <img src={lockIcon} alt="" />
            </div>

            <span>Desactivar</span>
          </button>

          <button
            className="detail-option"
            onClick={() =>
              alert("Próximamente")
            }
          >
            <div className="detail-option-icon">
              <img src={deleteIcon} alt="" />
            </div>

            <span>Eliminar alumno</span>
          </button>

        </div>

        <img
          src={doodlesBottom}
          alt=""
          className="detail-doodles-bottom"
        />

      </div>

    </div>
  );
}

export default StudentDetail;