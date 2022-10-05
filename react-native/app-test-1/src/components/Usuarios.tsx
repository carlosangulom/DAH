import {  Usuario } from "../interfaces/reqResp";
import useUsuarios from "../hooks/useUsuarios";

function Usuarios() {
  const {usuarios, paginaAnterior, paginaSiguiente} = useUsuarios();

  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id.toString()}>
        <td>
          <img
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{
              width: 50,
              borderRadius: 100,
            }}
          ></img>
        </td>
        <td>
          {usuario.first_name} {usuario.last_name}
        </td>
        <td>{usuario.email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <tbody>
          {usuarios.map((FicArgUsuario) => renderItem(FicArgUsuario))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anterior
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={paginaSiguiente}>
        Siguiente
      </button>
    </>
  );
}

export default Usuarios;
