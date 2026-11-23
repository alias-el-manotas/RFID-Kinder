import "../styles/PageBackground.css";
import "../styles/Home.css";

import userHeader from "../assets/icons/user-header.png";
import notificationHeader from "../assets/icons/notification-header.png";

import usersHome from "../assets/icons/users-home.png";

import attendanceTodayHome from "../assets/icons/attendance-today-home.png";
import attendanceTodayChart from "../assets/illustrations/attendance-today-chart.png";

import homeDoodles from "../assets/illustrations/home-doodles.png";
import spiralsTopRight from "../assets/illustrations/spirals-top-right.png";
import spiralsBottomLeft from "../assets/illustrations/spirals-bottom-left.png";

import attendanceWeekHome from "../assets/icons/attendance-week-home.png";
import attendanceWeekChart from "../assets/illustrations/attendance-week-chart.png";

import notificationHome from "../assets/icons/notification-home.png";

function Home() {
  return (
    <div className="home page-background">

      {/* DECORACIONES */}
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

      {/* HEADER */}
      <div className="home-header">

        <img
          src={userHeader}
          alt="Usuario"
          className="home-avatar"
        />

        <img
          src={notificationHeader}
          alt="Notificaciones"
          className="home-notification"
        />

      </div>

      {/* TITULO */}
      <h1 className="home-title">
        ¡Bienvenido a RFID Kinder!
      </h1>

      {/* USUARIOS */}
      <div className="users-card">

        <div className="card-title">
          <img
            src={usersHome}
            alt="Usuarios"
          />

          <span>Usuarios registrados</span>
        </div>

        <div className="card-divider"></div>

        <ul className="card-list">
          <li>Alumnos: 250</li>
          <li>Profesores: 15</li>
          <li>Personal: 10</li>
        </ul>

      </div>

      {/* ASISTENCIA DE HOY */}
      <div className="attendance-card">

        <div className="card-title">
          <img
            src={attendanceTodayHome}
            alt="Asistencia"
          />

          <span>Asistencia de hoy</span>
        </div>

        <div className="card-divider"></div>

        <ul className="card-list">
          <li>Entradas registradas: 238</li>
          <li>Salidas registradas: 146</li>
          <li>Ausencias: 12</li>
        </ul>

        <img
          src={attendanceTodayChart}
          alt="Gráfico de asistencia"
          className="attendance-chart"
        />

      </div>

      

      {/* ASISTENCIA SEMANAL */}

<div className="week-card">

  <div className="card-title">

    <img
      src={attendanceWeekHome}
      alt="Asistencia semanal"
    />

    <span>Asistencia semanal</span>

  </div>

  <div className="card-divider"></div>

  <ul className="card-list">
    <li>Promedio asistencia: 94%</li>
    <li>Promedio ausencias: 6%</li>
  </ul>

  <img
    src={attendanceWeekChart}
    alt="Gráfico semanal"
    className="week-chart"
  />
  
  </div>

{/* ALERTAS */}

<div className="alerts-card">

  <div className="card-title">

    <img
      src={notificationHome}
      alt="Alertas"
    />

    <span>Alertas</span>

  </div>

  <div className="card-divider"></div>

  <div className="alert-item">
    Sin alertas activas
  </div>

</div>


{/* DOODLES */}

<img
  src={homeDoodles}
  alt=""
  className="home-doodles"
/>

</div>


  );
}

export default Home;