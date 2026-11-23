import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/PageBackground.css";
import "../styles/Attendance.css";

import arrow from "../assets/icons/arrow.png";
import attendanceIcon from "../assets/icons/attendance-menu.png";
import failure from "../assets/illustrations/failure.png";

import loadingVideo from "../assets/backgrounds/background-waiting.mp4";

import doodlesTop from "../assets/illustrations/doodles-top.png";
import doodlesBottomT1 from "../assets/illustrations/doodles-bottom-t1.png";
import doodlesBottomT2 from "../assets/illustrations/doodles-bottom-t2.png";

import sadNfc from "../assets/illustrations/sadNfc.png";

import studentsData from "../data/studentsData";

function shortName(fullName) {
  const parts = fullName.split(" ");

  return parts.slice(0, 2).join(" ");
}

function Attendance() {
  const navigate = useNavigate();

  const [status, setStatus] = useState("waiting");

  const student = studentsData[1];
  const student2 = studentsData[2];
  const student5 = studentsData[5];

  return (
    <div className="attendance-page page-background">

      <img
        src={doodlesTop}
        alt=""
        className="attendance-doodles-top"
      />

      <button
        className="attendance-back"
        onClick={() => navigate("/menu")}
      >
        <img src={arrow} alt="Regresar" />
      </button>

      <div
  className={`attendance-header ${
    status === "waiting"
      ? "attendance-header-waiting"
      : "attendance-header-default"
  }`}
>

  <div className="attendance-title-badge">
    <img
      src={attendanceIcon}
      alt=""
    />
  </div>

  <div className="attendance-title-text">

    <h1>Control de asistencia</h1>

    {status === "waiting" && (
      <p className="attendance-subtitle">
        Esperando escaneo del NFC del alumno.
      </p>
    )}

  </div>

</div>

      {/* DEBUG */}

      <div className="attendance-debug">

        <button
          onClick={() => setStatus("waiting")}
        >
          Waiting
        </button>

        <button
          onClick={() => setStatus("entry")}
        >
          Entrada
        </button>

        <button
          onClick={() => setStatus("confirmExit")}
        >
          Confirmar
        </button>

        <button
          onClick={() => setStatus("exit")}
        >
          Salida
        </button>

        <button
          onClick={() => setStatus("failure")}
        >
          Error
        </button>

        <button
          onClick={() => setStatus("notFound")}
        >
          NFC
        </button>

      </div>

      {status === "waiting" && (
        <>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="attendance-video-bg"
          >
            <source
              src={loadingVideo}
              type="video/mp4"
            />
          </video>

          <img
            src={doodlesBottomT2}
            alt=""
            className="attendance-doodles-bottom"
          />
        </>
      )}

      {status === "entry" && (

  <>
    <div className="attendance-result">

      <p className="attendance-status-title">
        Entrada registrada
      </p>

      <div className="attendance-student-card">

        <div className="attendance-avatar-box">

          <img
            src={student.avatar}
            alt={student.nombre}
            className="attendance-avatar"
          />

        </div>

        <div className="attendance-student-info">

          <h2>
            {shortName(student.nombre)}
          </h2>

          <p>
            Matrícula: {student.matricula}
          </p>

          <p>
            Hora de entrada: 8:08 AM
          </p>

          <p>
            Hora de salida: --
          </p>

          <p className="attendance-state">
            Estado: Dentro del plantel
          </p>

        </div>

      </div>

    </div>

    <img
      src={doodlesBottomT1}
      alt=""
      className="attendance-doodles-bottom"
    />

  </>

)}

      {status === "confirmExit" && (

  <>
    <div className="attendance-result">

      <p className="attendance-status-title">
        Confirmar salida
      </p>

      <div className="attendance-student-card">

        <div className="attendance-avatar-box">

          <img
            src={student2.avatar}
            alt={student2.nombre}
            className="attendance-avatar"
          />

        </div>

        <div className="attendance-student-info">

          <h2>
            {shortName(student2.nombre)}
          </h2>

          <p>
            Matrícula: {student2.matricula}
          </p>

          <p>
            Hora de entrada: 8:08 AM
          </p>

          <p>
            Hora de salida: --
          </p>

          <p className="attendance-state">
            Estado: Dentro del plantel
          </p>

        </div>

      </div>

      <div className="attendance-authorized">

        <h3>
          Autorizados para recoger
        </h3>

        {student2.autorizados.map(
  (persona, index) => (

    <p key={index}>
      ▪ {persona.nombre}
    </p>

  )
)}

    <p className="attendance-warning">

  Por favor, verifique que la persona que recogerá
  al alumno aparece en la lista de autorizados.

</p>

<p className="attendance-warning-small">

  Una vez confirmada su identidad, presione
  "Confirmar salida".

</p>


      </div>

      <button
        className="attendance-confirm-btn"
        onClick={() =>
          setStatus("exit")
        }
      >
        Confirmar salida
      </button>

    </div>

    <img
      src={doodlesBottomT1}
      alt=""
      className="attendance-doodles-bottom"
    />

  </>

)}

      {status === "exit" && (

  <>
    <div className="attendance-result">

      <p className="attendance-status-title">
        Salida registrada
      </p>

      <div className="attendance-student-card">

        <div className="attendance-avatar-box">

          <img
            src={student2.avatar}
            alt={student2.nombre}
            className="attendance-avatar"
          />

        </div>

        <div className="attendance-student-info">

          <h2>
            {shortName(student2.nombre)}
          </h2>

          <p>
            Matrícula: {student2.matricula}
          </p>

          <p>
            Hora de entrada: 8:08 AM
          </p>

          <p>
            Hora de salida: 1:03 PM
          </p>

          <p className="attendance-state">
            Estado: Fuera del plantel
          </p>

        </div>

      </div>

    </div>

    <img
      src={doodlesBottomT1}
      alt=""
      className="attendance-doodles-bottom"
    />

  </>

)}

      {status === "failure" && (

  <>
    <div className="attendance-result">

      <p className="attendance-status-title">
        Falla de registro
      </p>

      <div className="attendance-student-card">

        <div className="attendance-avatar-box">

          <img
            src={student5.avatar}
            alt={student5.nombre}
            className="attendance-avatar"
          />

        </div>

        <div className="attendance-student-info">

          <h2>
            {shortName(student5.nombre)}
          </h2>

          <p>
            Matrícula: {student5.matricula}
          </p>

          <p>
            Hora de entrada: 8:08 AM
          </p>

          <p>
            Hora de salida: 1:03 PM
          </p>

          <p className="attendance-state">
            Estado: Fuera del plantel
          </p>

        </div>

      </div>

      <div className="attendance-error-box">

  <img
    src={failure}
    alt="Error"
    className="attendance-error-icon"
  />

  <div className="attendance-error-content">

    <p className="attendance-error-text">
      No es posible realizar un nuevo registro.
      El alumno ya cuenta con entrada y salida
      registradas correspondientes al día de hoy.
    </p>

  </div>

</div>

    </div>

    <img
      src={doodlesBottomT1}
      alt=""
      className="attendance-doodles-bottom"
    />

  </>

)}

      {status === "notFound" && (

  <>
    <div className="attendance-result">

      <p className="attendance-status-title">
        NFC no registrado
      </p>

      <div className="attendance-not-found">

        <p>
          La tarjeta o dispositivo NFC
          escaneado no se encuentra
          registrado en el sistema.
        </p>

        <p>
          Por favor, verifique que el alumno
          se encuentre dado de alta y que
          el NFC asignado sea el correcto.
        </p>

        <img
          src={sadNfc}
          alt="NFC no registrado"
          className="attendance-not-found-image"
        />

      </div>

    </div>

    <img
      src={doodlesBottomT1}
      alt=""
      className="attendance-doodles-bottom"
    />

  </>

)}

    </div>
  );
}

export default Attendance;