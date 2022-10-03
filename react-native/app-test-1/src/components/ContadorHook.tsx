import React from 'react'
import useCounter from '../hooks/useCounter';

function ContadorHook() {
    const {valor, acumular} = useCounter(100);
  
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

export default ContadorHook