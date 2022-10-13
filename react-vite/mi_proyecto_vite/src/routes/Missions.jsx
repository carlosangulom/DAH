import React from "react";
import img from "../images/apollo.png";
import { Link, Outlet } from "react-router-dom";

function Missions() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <div>
        <img src={img} width={500} height={500} />
        <h1>Apollo Program</h1>
        <p>
          Apollo, project conducted by the U.S. National Aeronautics and Space
          Administration (NASA) in the 1960s and 70s that landed the first
          humans on the Moon. The six Apollo landings which took place between
          1969 and 1972 provided scientists with huge amounts of lunar data in
          the form of photography and orbital experiment results, sample
          collections and surface operations.
        </p>
      </div>
      <Link to="/"><button>GO BACK</button></Link>
      <Outlet />
    </main>
  );
}

export default Missions;
