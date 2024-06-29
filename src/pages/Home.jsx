import "../styles/Home.css";
import { Outlet, NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="logoDiv">
          <img
            className="logoHome"
            src="/images/logo-home.png"
            alt="logo-home.png"
          />
        </div>
        <div class="menu">
          <div className="menuItem">Fanehoana</div>
          <div className="menuItem">Fifidianana</div>
          <div className="menuItem">Voka-pifidianana</div>
        </div>
      </header>
      <div className="homepage">
        <div>
          <div className="fjkmNameSection">
            <img
              className="fjkmLogo"
              src="/images/logo fjkm.jpeg"
              alt="logo fjkm.jpeg"
            />
            <div className="titleFjkm">
              <h3>FIANGONAN`I JESOA KRISTY ETO MADAGASIKARA</h3>
              <h4>SYNODAMPARITANY IARIVOAVARADRANO 19</h4>
              <h4>FITANDREMANA AMBONDRONA FIRAISANA</h4>
              <h4>KOMITIM-PIFIDIANANA</h4>
            </div>
          </div>
        </div>
        <div className="inputSaisie">
          <img src="/images/voting.png" alt="voting.png" />
          <div>
            <div>
              <span>Bulletin n* : </span>
              <input type="text" name="startInput" id="startInput" />
              <span> à </span>
              <input type="text" name="endInput" id="endInput" />
            </div>
            <div className="divBtnHameno">
              <NavLink to="/voting">
                <button className="btnHameno">Hameno</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="textHome">
          “Tsy ianareo no nifidy ahy fa Izaho no nifidy anareo ka manendry
          anareo mba andeha sy amoha ka mba aharetan`ny vokatrareo” JAONA 15;16
        </div>
      </div>
    </div>
  );
}
