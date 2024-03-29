import classes from "./CartWidget.module.css"
import carritoCompras from './assets/carritoCompras.webp'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to={'/cart'} className={classes.botonCarrito}>
      <img src={carritoCompras} alt="carrito de compras aluminios antioquia" />
      <h2 className={classes.countCarrito}> { totalQuantity } </h2>
    </Link>
  )
}

export default CartWidget;