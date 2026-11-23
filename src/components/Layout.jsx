import { useLocation } from "react-router-dom";

import BottomNav from "./BottomNav";

import "../styles/Layout.css";

function Layout({ children }) {

  const location = useLocation();

  const mostrarBottomNav =
    location.pathname === "/" ||
    location.pathname === "/quick-search";

  return (
    <div className="app-layout">

      <header className="app-header">
      </header>

      <main className="app-main">
        {children}
      </main>

      {mostrarBottomNav && <BottomNav />}

    </div>
  );
}

export default Layout;