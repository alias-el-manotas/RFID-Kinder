import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/PageBackground.css";
import "../styles/History.css";

import arrow from "../assets/icons/arrow.png";
import historyIcon from "../assets/icons/history-menu.png";
import filterIcon from "../assets/icons/filter.png";
import searchIcon from "../assets/icons/search.png";

import doodlesTop from "../assets/illustrations/doodles-top.png";
import doodlesBottom from "../assets/illustrations/doodles-bottom-t1.png";

import historyData from "../data/historyData";

function History() {
  const navigate = useNavigate();

  const [showSearch, setShowSearch] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const filteredHistory =
    historyData.filter((item) =>
      item.accion
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      item.tiempo
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="history-page page-background">

      <img
        src={doodlesTop}
        alt=""
        className="history-doodles-top"
      />

      <button
        className="history-back"
        onClick={() => navigate("/menu")}
      >
        <img
          src={arrow}
          alt="Regresar"
        />
      </button>

      <div className="history-header">

        <div className="history-title">

          <div className="history-title-badge">

            <img
              src={historyIcon}
              alt=""
            />

          </div>

          <h1>Historial</h1>

        </div>

        <div className="history-actions">

          <button
            className="history-action-btn"
            onClick={() =>
              alert("Próximamente")
            }
          >
            <img
              src={filterIcon}
              alt=""
            />
          </button>

          <button
            className="history-action-btn"
            onClick={() =>
              setShowSearch(
                !showSearch
              )
            }
          >
            <img
              src={searchIcon}
              alt=""
            />
          </button>

        </div>

      </div>

      {showSearch && (

        <div className="history-search">

          <div className="history-search-icon">

            <img
              src={searchIcon}
              alt=""
            />

          </div>

          <input
            type="text"
            placeholder="Ingrese la acción o tiempo"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

      )}

      <div className="history-list">

        {filteredHistory.map(
          (item, index) => (

            <div
              key={index}
              className="history-item"
            >

              <p className="history-time">
                {item.tiempo}
              </p>

              <div className="history-row">

                <div
                  className="history-color"
                  style={{
                    background:
                      item.color
                  }}
                />

                <div>

                  <h3>
                    {item.accion}
                  </h3>

                  <p>
                    {item.detalle}
                  </p>

                </div>

              </div>

            </div>

          )
        )}

      </div>

      <img
        src={doodlesBottom}
        alt=""
        className="history-doodles-bottom"
      />

    </div>
  );
}

export default History;