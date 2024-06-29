import "../styles/Voting.css";
export function Voting() {
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
      <div className="votingSection">
        <div className="manSection">
          <div className="title">Lehilahy</div>
          <div>
            {Array.from({ length: 75 }, (_, index) => (
              <input key={index} type="number" />
            ))}
          </div>
        </div>
        <div className="womanSection">
          <div className="title">Vehivavy</div>
          <div>
            {Array.from({ length: 75 }, (_, index) => (
              <input key={index} type="text" />
            ))}
          </div>
        </div>
      </div>
      <div className="btnHampiditra">
        <button className="btnHameno">Hampidirina</button>
      </div>
    </div>
  );
}
