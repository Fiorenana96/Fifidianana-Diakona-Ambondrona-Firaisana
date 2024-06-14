import { useState } from "react";
import "../styles/Voting.css";

export function Voting() {
  const [success, setSuccess] = useState(true);
  const [bulletin, setBulletin] = useState([
    {
      id: 0,
      numero: 0,
      genre: "LEHILAHY",
      content: ["", "", "", "", "", "", "", "", "", ""],
    },
  ]);

  const [numero, setNumero] = useState(1);
  const [newBulletin, setNewBulletin] = useState({
    id: 1,
    numero: 1,
    genre: "LEHILAHY",
    content: ["", "", "", "", "", "", "", "", "", ""],
  });

  //const [numberCatch, setNumberCatch] = useState();

  const handelChangeNumber = (index, value) => {
    const updatedContent = [...newBulletin.content];
    updatedContent[index] = value;
    setNewBulletin({
      ...newBulletin,
      content: updatedContent,
    });
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    const newBulletinCopy = { ...newBulletin };
    const bulletinCopy = [...bulletin];
    // Mettez à jour l'état de newBulletin avec les nouvelles données
    bulletinCopy.push({ newBulletinCopy });
    setBulletin(bulletinCopy);
    console.log(bulletin);
    setSuccess(false);
  };

  return (
    <div className="container">
      <h1> Numérisation des bulletins</h1>

      <div className="container-bult">
        {!success && <h4>Submit succesfull !</h4>}
        <form action="submit" onSubmit={handelOnSubmit}>
          <h3>Bullettin N° {newBulletin.numero} </h3>
          <h3>{newBulletin.genre}</h3>
          {newBulletin.content.map((value, index) => (
            <input
              key={index}
              type="number"
              value={value}
              className="input-bult"
              onChange={(e) => handelChangeNumber(index, e.target.value)}
            />
          ))}
          <div>
            <button className="btn">CONFIRMER</button>
          </div>
        </form>
      </div>
    </div>
  );
}
