import React from "react";
import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);

  const acumular = (n: number) => {
    setValor(valor + n);
  };

  return (
    <div>
      <h3>
        Contador: <small>{valor}</small>
      </h3>
      <button className="Button1" onClick={() => acumular(1)}>
        Sumar (+1)
      </button>
      &nbsp;
      <button className="Button2" onClick={() => acumular(-1)}>
        Restar (-1)
      </button>
    </div>
  );
}

export default Contador;
