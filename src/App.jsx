import { useState } from "react";
import "./App.css";
import "./UserList.jsx";
import UserList from "./UserList.jsx";

function App() {
  const [pagina, setPagina] = useState(1);
  const [clickedAtras, setClickedAtras] = useState(false);
  const [clickedAdelante, setClickedAdelante] = useState(false);

  function cambiarPagina(accion) {
    let nuevaPagina = 1;
    let clickedAtr = false;
    let clickedAdl = false;
    switch (accion) {
      case "atrasar":
        clickedAtr = true;
        pagina - 1 > 0 ? (nuevaPagina = pagina - 1) : (nuevaPagina = 1);
        break;
      case "adelantar":
        clickedAdl = true;
        pagina + 1 < 21 ? (nuevaPagina = pagina + 1) : (nuevaPagina = 20);
        break;
    }
    setClickedAtras(clickedAtr);
    setClickedAdelante(clickedAdl);
    setPagina(nuevaPagina);
  }

  return (
    <>
      <div className="app-container">
        <div className="button-container">
          <button className={clickedAtras?'clicked':'notClicked'} onClick={() => cambiarPagina("atrasar")}>⇦</button>
          <span className="pagina">{pagina}</span>
          <button className={clickedAdelante?'clicked':'notClicked'} onClick={() => cambiarPagina("adelantar")}>⇨</button>
        </div>
        <div className="list-container">
        <UserList pagina={pagina}></UserList>
        </div>
      </div>
    </>
  );
}

export default App;
