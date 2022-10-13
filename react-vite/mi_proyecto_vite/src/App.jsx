import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import moon from "./images/moon.gif";

function App() {
  return (
    <div>
      <a href="https://github.com/carlosangulom/DAH" target="_blank" rel="noopener noreferrer">
        <img src={moon} />
      </a>
      <h1>PWA React + Vite!</h1>
      <h3>Angulo Martínez - 18401081</h3>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <Link to="/missions" style={{"marginRight":"10px"}}>Missions</Link> <h2>|</h2>
        <Link to="/saturnV" style={{"marginLeft":"10px"}}>Saturn V</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
