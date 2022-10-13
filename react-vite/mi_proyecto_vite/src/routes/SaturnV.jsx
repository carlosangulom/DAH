import React from "react";
import img from "../images/saturn-v.png";
import { Link, Outlet } from "react-router-dom";

function SarturnV() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <div>
        <img src={img} width={300} height={500} />
        <h1>Saturn V</h1>
        <p>
          The Saturn V was a rocket NASA built to send people to the moon. The
          Saturn V was a type of rocket called a Heavy Lift Vehicle. That means
          it was very powerful. It was the most powerful rocket that had ever
          flown successfully. The Saturn V was used in the Apollo program in the
          1960s and 1970s. It also was used to launch the Skylab space station.
        </p>
      </div>
      <Link to="/">
        <button>GO BACK</button>
      </Link>
      <Outlet />
    </main>
  );
}

export default SarturnV;
