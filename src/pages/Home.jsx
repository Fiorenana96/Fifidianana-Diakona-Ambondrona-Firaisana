import "../styles/Home.css";

import { Outlet, NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <header>
        <div>
          <img
            src="/images/LogoAmbondrona.jpg"
            alt="Description de l'image"
            className="logo-image"
          />
        </div>
        <div>
          <nav className="navbar">
            <a>
              <NavLink to="/">Home</NavLink>
            </a>
            <a>
              <NavLink to="/voting">Voting</NavLink>
            </a>
            <a>
              <NavLink to="/result">Result</NavLink>
            </a>
            <a>
              <NavLink to="/admin">Admin</NavLink>
            </a>
          </nav>
        </div>
      </header>
      <div>
        <h1 className="home">Page d' accueil</h1>
        <Outlet />
      </div>
    </>
  );
}
