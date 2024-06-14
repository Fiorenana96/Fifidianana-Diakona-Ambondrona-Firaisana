import "../styles/Home.css";
import { Outlet, NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="container">
      <div className="right-side">
        <header className="header">
          <img
            src="/images/LogoAmbondrona.jpg"
            alt="Description de l'image"
            className="logo-image"
          />
          <nav className="navbar">
            <NavLink to="/">Fanehoana</NavLink>
            <NavLink to="/voting">Fifidianana</NavLink>
            <NavLink to="/result">Voka-pifidianana</NavLink>
            <NavLink to="/admin">Fitantanana</NavLink>
          </nav>
        </header>
        <div>
          <h1 className="home">PAGE D`ACCEUIL</h1>
          <Outlet />
        </div>
      </div>
      <div className="left-side"></div>
    </div>
  );
}
