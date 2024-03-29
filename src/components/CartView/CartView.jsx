import classes from "./CartView.module.css"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const CartView = () => {

  const { cart, removeItem } = useContext(CartContext)

  return(
    <div>
      <h1 className={classes.tituloH1}> En tu carrito... </h1>
      <section className={classes.contenedorItemsCarrito}>
        {
          cart.map(prod => {
            return (
              <article className={classes.contenedorListaCarrito} key={prod.id}>
                <p className={classes.itemName}> {prod.name} </p>
                <div className={classes.contenedorQuantity}>
                  <p className={classes.itemQuantity}> {prod.quantity} </p>
                </div>
                <button className={classes.botonEliminar} onClick={() => removeItem(prod.id)}> Eliminar </button>
              </article>
            )
          })
        }
      </section>
      <div className={classes.contenedorBoton}>
        <Link className={classes.boton} to='/checkout'> Continuar con la compra </Link>
      </div>
    </div>
  )
}

export default CartView