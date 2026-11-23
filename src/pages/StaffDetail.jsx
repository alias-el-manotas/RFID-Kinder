import { useNavigate, useParams } from "react-router-dom";

import "../styles/PageBackground.css";
import "../styles/StaffDetail.css";

import arrow from "../assets/icons/arrow.png";
import staffIcon from "../assets/icons/staff-menu.png";

import reassignIcon from "../assets/icons/reassign.png";
import editIcon from "../assets/icons/edit.png";
import lockIcon from "../assets/icons/lock.png";
import deleteIcon from "../assets/icons/delete.png";

import doodlesTop from "../assets/illustrations/doodles-top.png";
import doodlesBottom from "../assets/illustrations/doodles-bottom-t1.png";

import staffData from "../data/staffData";

function StaffDetail() {
  const navigate = useNavigate();

  const { id } = useParams();

  const person = staffData[id];

  return (
    <div className="staff-detail-page page-background">

      <img
        src={doodlesTop}
        alt=""
        className="staff-detail-doodles-top"
      />

      <div className="staff-detail-header">

        <div className="staff-detail-header-row">

          <button
            className="staff-detail-back"
            onClick={() => navigate("/staff")}
          >
            <img src={arrow} alt="Regresar" />
          </button>

          <div className="staff-detail-title">

            <div className="staff-detail-title-badge">
              <img
                src={staffIcon}
                alt="Personal"
              />
            </div>

            <h1>Personal</h1>

          </div>

        </div>

        <div className="detail-staff-info">

          <div className="staff-detail-avatar-box">

            <img
              src={person.avatar}
              alt={person.nombre}
              className="staff-detail-avatar"
            />

          </div>

          <div className="staff-detail-text">

            <h2>{person.nombre}</h2>

            <p>
              Usuario: {person.usuario}
            </p>

            <p>
              Puesto: {person.puesto}
            </p>

            <p>
              NFC: {person.nfc}
            </p>

          </div>

        </div>

      </div>

      <div className="staff-detail-content">

        <section>

          <h3>Teléfono</h3>

          <p>{person.telefono}</p>

        </section>

        <section>

          <h3>Correo electrónico</h3>

          <p>{person.correo}</p>

        </section>

        <section>

          <h3>Fecha de nacimiento:</h3>

          <p>{person.fechaNacimiento}</p>

        </section>

        <section>

          <h3>Contactos de emergencia:</h3>

          {person.contactosEmergencia.map(
            (contacto, index) => (
              <div key={index}>

                <p>
                  ▪ {contacto.nombre}{" "}
                  <span className="staff-detail-muted">
                    {contacto.parentesco}
                  </span>
                </p>

                <p className="staff-detail-muted">
                  {contacto.telefono}
                </p>

                <br />

              </div>
            )
          )}

        </section>

        <section>

          <h3>Historial médico</h3>

          <p>
            ▪ Tipo de sangre: {person.tipoSangre}
          </p>

          <p>
            ▪ Alergias: {person.alergias}
          </p>

          <p>
            ▪ Condiciones: {person.condiciones}
          </p>

        </section>

        <section>

          <h3>Observaciones médicas</h3>

          {person.observaciones.map(
            (item, index) => (
              <p key={index}>
                {item}
              </p>
            )
          )}

        </section>

        <section>

          <h3>Notas prioritarias</h3>

          {person.notas.map(
            (item, index) => (
              <p key={index}>
                #{index + 1} - {item}
              </p>
            )
          )}

        </section>

        <div className="staff-detail-buttons">

          <button
            className="staff-detail-option"
            onClick={() =>
              alert("Próximamente")
            }
          >
            <div className="staff-detail-option-icon">
              <img src={reassignIcon} alt="" />
            </div>

            <span>Reasignar NFC</span>
          </button>

          <button
            className="staff-detail-option"
            onClick={() =>
              alert("Próximamente")
            }
          >
            <div className="staff-detail-option-icon">
              <img src={editIcon} alt="" />
            </div>

            <span>Editar información</span>
          </button>

          <button
            className="staff-detail-option"
            onClick={() =>
              alert("Próximamente")
            }
          >
            <div className="staff-detail-option-icon">
              <img src={lockIcon} alt="" />
            </div>

            <span>Desactivar</span>
          </button>

          <button
            className="staff-detail-option"
            onClick={() =>
              alert("Próximamente")
            }
          >
            <div className="staff-detail-option-icon">
              <img src={deleteIcon} alt="" />
            </div>

            <span>Eliminar persona</span>
          </button>

        </div>

        <img
          src={doodlesBottom}
          alt=""
          className="staff-detail-doodles-bottom"
        />

      </div>

    </div>
  );
}

export default StaffDetail;