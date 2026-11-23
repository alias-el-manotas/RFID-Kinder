import { Link } from "react-router-dom";

function MenuItem({
  texto,
  ruta,
  icono,
  onClick,
  colorClase
}) {

  const contenido = (
    <div className="menu-row">

      <div className={`menu-item ${colorClase}`}>

        <img
          src={icono}
          alt={texto}
          className="menu-item-icon"
        />

      </div>

      <span className="menu-item-text">
        {texto}
      </span>

    </div>
  );

  if (onClick) {
    return (
      <button
        className="menu-item-button"
        onClick={onClick}
      >
        {contenido}
      </button>
    );
  }

  return (
    <Link
      to={ruta}
      className="menu-item-link"
    >
      {contenido}
    </Link>
  );
}

export default MenuItem;