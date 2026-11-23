import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import QuickSearch from "./pages/QuickSearch";
import Attendance from "./pages/Attendance";
import Students from "./pages/Students";
import Staff from "./pages/Staff";
import History from "./pages/History";
import Tracking from "./pages/Tracking";
import StudentDetail from "./pages/StudentDetail";
import StaffDetail from "./pages/StaffDetail";

function App() {
  return (
    <HashRouter>

      <Layout>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/menu" element={<Menu />} />

          <Route
            path="/quick-search"
            element={<QuickSearch />}
          />

          <Route
            path="/attendance"
            element={<Attendance />}
          />

          <Route
            path="/students"
            element={<Students />}
          />

          <Route
            path="/staff"
            element={<Staff />}
          />

          <Route
  path="/staff/:id"
  element={<StaffDetail />}
/>

          <Route
            path="/history"
            element={<History />}
          />

          <Route
            path="/tracking"
            element={<Tracking />}
          />

          <Route
            path="/students/:id"
            element={<StudentDetail />}
          />
          

        </Routes>

      </Layout>

    </HashRouter>
  );
}

export default App;