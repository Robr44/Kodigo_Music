import { Routes, Route, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import ExploreView from "./views/ExploreView";
import SessionView from "./views/session/SessionView";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Kodigo Music</h2>
        <div>
          <Link to="/">Inicio</Link>
          <Link to="/explore">Explorar</Link>
          <Link to="/session">Ingresar</Link>
        </div>
      </nav>

      {/* Rutas de navegacion*/}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/explore" element={<ExploreView />} />
        <Route path="/session" element={<SessionView />} />
      </Routes>
    </div>
  );
}

export default App;
