import React from "react";

interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  estado: string;
  ciudad: string;
  calle: string;
  numero: number;
}

const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Martha",
    edad: 30,
    direccion: {
      pais: "Mexico",
      estado: "Nayarit",
      ciudad: "Tepic",
      calle: "Conocido",
      numero: 69,
    },
  };

  return (
    <>
      <h3>ObjetosLiterales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};

export default ObjetosLiterales;