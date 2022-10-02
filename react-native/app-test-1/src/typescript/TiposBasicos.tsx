import React from "react";

const TiposBasicos = () => {
  let idNombre: string | number = "telepoise";

  const Nombre: string = "Carlos";
  const Apellidos: string = "Angulo M";
  const NumControl: number = 706;
  const NumControl2 = 18401081;
  const FechaReg: Date = new Date();
  let Experiencia = 20;
  let Activo: boolean = true;

  let Pasatiempos: String[] = [
    "futbol",
    "música",
    "videojuegos",
    "series y peliculas",
  ];

  let libros = [];

  libros.push(706);
  libros.push(true);
  libros.push("El nombre del viento");

  return (
    <>
      <h3>Tipos Básicos</h3>
      Alias: {idNombre}
      <br />
      Nombre: {Nombre}
      <br />
      Apellidos: {Apellidos}
      <br />
      No. Control: {NumControl}
      <br />
      No. Control 2{NumControl2}
      <br />
      Fecha Registro: {FechaReg.toString()}
      <br />
      Experiencia: {Experiencia}
      <br />
      Estatus: {Activo ? "Activo" : "No activo"}
      <br />
      Libros: {libros[0]}, {libros[1] ? "Activo" : "No activo"}, {libros[2]}
    </>
  );
};

export default TiposBasicos;
