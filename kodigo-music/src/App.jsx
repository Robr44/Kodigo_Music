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
          <Link to="/home">Inicio</Link>
          <Link to="/explore">Explorar</Link>
        </div>
      </nav>

      {/* Rutas de navegacion*/}
      <Routes>
        <Route path="/" element={<SessionView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/explore" element={<ExploreView />} />
      </Routes>
    </div>
  );
}

export default App;
