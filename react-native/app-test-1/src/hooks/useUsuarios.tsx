import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqRespUsuarioListado, Usuario } from "../interfaces/reqResp";


function useUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const refPage = useRef(0);
    
    useEffect(() => {
      cargarUsuarios();
    }, []);
    
    const cargarUsuarios = async () => {
      await reqResApi
        .get<ReqRespUsuarioListado>("/users", {
          params: {
            page: refPage.current,
          },
        })
        .then((resp) => {
          if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
          } else {
            alert("No hay mas registros");
          }
        })
        .catch((err) => console.log(err));
    };

    const paginaSiguiente = () => {
      refPage.current ++;
      cargarUsuarios();
    }

    const paginaAnterior = () => {
      if ( refPage.current > 1 ){
        refPage.current --;
        cargarUsuarios();
    } 
    }

    return {
        usuarios, paginaAnterior, paginaSiguiente
    }
}

export default useUsuarios