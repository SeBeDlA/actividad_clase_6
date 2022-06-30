import s from '../styles/ItemList.module.css'
const ItemList = ({id, name, stock, cost, description, image}) => {
  return (
    <div className={s.item}>
      <div className="img-container">
        <img src={image} alt={name} className={s.img}/>
      </div>
      <div className={s.informations}>
        <h3 className={s.title}>{name}</h3>
        <div className={s.detail}>
          <h5>Stock: {stock}</h5>
          <h5>${cost}</h5>
        </div>
      </div>
    </div>
  )
}

export default ItemList