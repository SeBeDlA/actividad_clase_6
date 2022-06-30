import {useEffect, useState} from 'react';
import * as api from '../Api/util';
import ItemList from '../Components/ItemList';
import Paginacion from '../Components/Paginacion';
import s from '../styles/List.module.css';
const List = (props) => {

  const [list, setList] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() =>{
    console.log("ingresa en el effect")
    api.getList().then(resp => {
      console.log('lista => ',resp)
      if(resp.products) setList(resp.products)
      if(resp.totalPage) setPages(resp.totalPage)
    })
  },[])

  useEffect(() =>{
    console.log("Lista => ",list)
  },[list])

  return (
    <>
      <div className={s.list}>
        {list.map(item => (
            <ItemList {...item} key={item.id}/>  
          ))
        }
      </div>
      {/* {pages > 0  && <Paginacion paginas={pages}/>} */}
    </>
  )
}

export default List