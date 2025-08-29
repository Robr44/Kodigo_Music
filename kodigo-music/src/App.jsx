import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HomeView from "./views/HomeView";
import ExploreView from "./views/ExploreView";
import SessionView from "./views/session/SessionView";

function App() {
  // LocalStorage que impide mandar al login cuando ecargo la página
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth);
  }, [isAuth]);

  return (
    <div>
       {/* Navbar solo si está autenticado */}
    {isAuth && (
      <nav className="navbar">
        <h2>Kodigo Music</h2>
        <div className="nav-links">
          <Link to="/home">Inicio</Link>
          <Link to="/explore">Explorar</Link>
          <button className="logout-btn" onClick={() => setIsAuth(false)}> Cerrar sesión</button>
        </div>
      </nav>
    )}

      {/* Rutas de navegacion*/}
      <Routes>
        <Route path="/" element={<SessionView setIsAuth={setIsAuth} />} />
        <Route path="/home" element={isAuth ? <HomeView /> : <SessionView setIsAuth={setIsAuth} />} />
        <Route path="/explore" element={isAuth ? <ExploreView /> : <SessionView setIsAuth={setIsAuth} />} />
      </Routes>
    </div>
  );
}

export default App;
