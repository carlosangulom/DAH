import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Missions from "./routes/Missions";
import SaturnV from "./routes/SaturnV";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="missions" element={<Missions />} />
        <Route path="saturnV" element={<SaturnV />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
