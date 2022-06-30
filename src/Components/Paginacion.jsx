import { useEffect, useState } from "react";
import s from '../styles/Paginacion.module.css';
const Paginacion = ({paginas, setPagina}) => {
  
  const [paginacion, setPaginacion] = useState([])
  useEffect(() => {
    let arr = [];
    for (let i = 1; i < paginas+1; i++) {
      arr = [...arr, i];
    }
    setPaginacion(arr);
  },[paginas]);

  return (
    <>
      <div className={s.paginacion}>
        {paginacion.map(item => <div className={s.boton} key={item}>{item}</div>)}
      </div>
    </>
  )
}

export default Paginacion