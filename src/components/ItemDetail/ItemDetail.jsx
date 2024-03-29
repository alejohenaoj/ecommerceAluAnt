import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useNotification } from "../../notification/hooks/useNotification"

const ItemDetail = ({id, category, img, imgDescription, name, price, description, stock}) => {

  const { addItem, isInCart } = useContext(CartContext)

  const { showNotification } = useNotification()

  const handleOnAdd = (quantity) => {
    const objProductToAdd = {
      id, name, price, quantity
    }
    console.log(objProductToAdd)
    showNotification('success', `Se agregó correctamente ${quantity} ${name}`)
    
    addItem(objProductToAdd)
  }

  return(
    <article className={classes.detailProductContainer}>
      <img src={img} alt={imgDescription} />
      <div className={classes.infoDetailProduct}>
        <h2 className={classes.nameDetailProduct}> {name} </h2>
        <p className={classes.priceDetailProduct}> Precio: ${price} </p>
        <p className={classes.categoryProduct}> Materia prima: {category} </p>
        <p className={classes.categoryProduct}> Description: {description} </p>
        <p className={classes.categoryProduct}> Cantidad disponible: {stock}unds. </p>
        <div className={classes.contenedorBoton}>
          {!isInCart(id) ? ( < ItemCount onAdd={handleOnAdd} stock={stock} /> ) : (<> <Link className={classes.boton} to='/cart'> Ir al carrito </Link> </>)}
        </div>
      </div>
    </article>
  )
}

export default ItemDetail