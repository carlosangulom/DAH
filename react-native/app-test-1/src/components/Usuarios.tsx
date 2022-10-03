import { useEffect } from "react";
import { reqResApi } from "../api/reqRes";

function Usuarios() {
  useEffect(() => {
    reqResApi
      .get("/users")
      .then((resp) => {
        console.log(resp.data.data[0].first_name);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default Usuarios;
