import { useState } from "react";

import "../styles/PageBackground.css";
import "../styles/QuickSearch.css";

import searchIcon from "../assets/icons/search-menu.png";

import loadingVideo from "../assets/backgrounds/background-waiting.mp4";

import spiralsBottomLeft from "../assets/illustrations/spirals-bottom-left.png";
import spiralsTopRight from "../assets/illustrations/spirals-top-right.png";
import sadNfcIllustration from "../assets/illustrations/sadNfc.png";

import studentsData from "../data/studentsData";
import staffData from "../data/staffData";

function QuickSearch() {
  const [status, setStatus] = useState("waiting");
  const student = studentsData[4];
  const staff = staffData[3];

  function shortName(fullName) {
  const parts = fullName.split(" ");

  return parts.slice(0, 2).join(" ");
}

  return (
    <div className="quick-search-page page-background">

      <img
              src={spiralsTopRight}
              alt=""
              className="spirals-top-right"
            />
      
      <img
        src={spiralsBottomLeft}
        alt=""
        className="spirals-bottom-left"
      />

      {/* BOTONES DE PRUEBA */}
      <div className="quick-debug">

        

        <button
          onClick={() => setStatus("waiting")}
        >
          Waiting
        </button>

        <button
          onClick={() => setStatus("student")}
        >
          Alumno
        </button>

        <button
          onClick={() => setStatus("staff")}
        >
          Personal
        </button>

        <button
          onClick={() => setStatus("notFound")}
        >
          No Registrado
        </button>

      </div>

      {status === "waiting" && (

        <div className="quick-search-content">

          <div className="quick-search-header">

  <div className="quick-search-title-badge">
    <img
      src={searchIcon}
      alt="Busqueda"
    />
  </div>

  <div className="quick-search-title-text">

    <h1>Búsqueda Rápida</h1>

    <p className="quick-search-subtitle">
      Esperando escaneo del NFC de la persona a consultar.
    </p>

  </div>

</div>

          <video
  autoPlay
  loop
  muted
  playsInline
  className="quick-search-video-bg"
>
  <source
    src={loadingVideo}
    type="video/mp4"
  />
</video>

        </div>

      )}

      {status === "student" && (

  <div className="quick-result">

    <div className="quick-search-header">

      <div className="quick-search-title-badge">
        <img
          src={searchIcon}
          alt="Busqueda"
        />
      </div>

      <div className="quick-search-title-text">

        <h1>Búsqueda Rápida</h1>

        <p className="quick-success">
          Alumno detectado.
        </p>

      </div>

    </div>

    <div className="quick-profile">

      <img
        src={student.avatar}
        alt={student.nombre}
        className="quick-avatar"
      />

      <div>

        <h2>{shortName(student.nombre)}</h2>

        <p>
          Matrícula: {student.matricula}
        </p>

      </div>

    </div>

    <div className="quick-section">

  <h3>Historial médico básico</h3>

  <p>
    ▪ Tipo de sangre: {student.tipoSangre}
  </p>

  <p>
    ▪ Alergias: {student.alergias}
  </p>

  <p>
    ▪ Condiciones: {student.condiciones}
  </p>

  <h3>Tutores</h3>

  {student.tutores.map((tutor, index) => (

    <p key={index}>

      ▪ {shortName(tutor.nombre)}{" "}

      <span className="quick-muted">
        {tutor.parentesco}
      </span>

    </p>

  ))}

  <h3>Contactos de emergencia</h3>

  {student.contactosEmergencia.map(
    (contacto, index) => (

      <p key={index}>

        ▪ {contacto.telefono}{" "}

        <span className="quick-muted">
          {contacto.parentesco}
        </span>

      </p>

    )
  )}

  <h3>Notas prioritarias</h3>

  {student.notas.map(
    (nota, index) => (
      <p key={index}>
        #{index + 1} - {nota}
      </p>
    )
  )}

</div>

  </div>

)}

      {status === "staff" && (

  <div className="quick-result">

    <div className="quick-search-header">

      <div className="quick-search-title-badge">
        <img
          src={searchIcon}
          alt="Busqueda"
        />
      </div>

      <div className="quick-search-title-text">

        <h1>Búsqueda Rápida</h1>

        <p className="quick-success">
          Personal escolar detectado.
        </p>

      </div>

    </div>

    <div className="quick-profile">

      <img
        src={staff.avatar}
        alt={staff.nombre}
        className="quick-avatar"
      />

      <div>

        <h2>
          {shortName(staff.nombre)}
        </h2>

        <p>
          Usuario: {staff.usuario}
        </p>

      </div>

    </div>

    <div className="quick-section">

      <h3>
        Historial médico básico
      </h3>

      <p>
        ▪ Tipo de sangre: {staff.tipoSangre}
      </p>

      <p>
        ▪ Alergias: {staff.alergias}
      </p>

      <p>
        ▪ Condiciones: {staff.condiciones}
      </p>

    </div>

    <div className="quick-section">

      <h3>
        Contactos de emergencia
      </h3>

      {staff.contactosEmergencia.map(
        (contacto, index) => (

          <p key={index}>

            ▪ {contacto.telefono}{" "}

            <span className="quick-muted">
              {contacto.parentesco}
            </span>

          </p>

        )
      )}

    </div>

    <div className="quick-section">

      <h3>
        Notas prioritarias
      </h3>

      {staff.notas.map(
        (nota, index) => (

          <p key={index}>
            #{index + 1} - {nota}
          </p>

        )
      )}

    </div>

  </div>

)}

      {status === "notFound" && (

  <div className="quick-result">

    <div className="quick-search-header">

      <div className="quick-search-title-badge">
        <img
          src={searchIcon}
          alt="Busqueda"
        />
      </div>

      <div className="quick-search-title-text">

        <h1>Búsqueda Rápida</h1>

        <p className="quick-error">
          NFC no registrado.
        </p>

      </div>

    </div>

    <div className="quick-not-found">

      <h2>
        NFC no registrado
      </h2>

      <p>
        La tarjeta o dispositivo NFC escaneado
        no se encuentra registrado en el sistema.
      </p>

      <p>
        Por favor, verifique que la persona
        se encuentre dada de alta y que el
        NFC asignado sea el correcto.
      </p>
      
      <img
        src={sadNfcIllustration}
        alt="NFC no registrado"
        className="quick-not-found-image"
      />

    </div>

  </div>

)}

    </div>
  );
}

export default QuickSearch;