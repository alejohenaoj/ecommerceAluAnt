import classes from "./CartWidget.module.css"
import carritoCompras from './assets/carritoCompras.webp'

const CartWidget = () => {
  return (
    <div className={classes.botonCarrito}>
      <img src={carritoCompras} alt="carrito de compras aluminios antioquia" />
      <h2 className={classes.countCarrito}> 0 </h2>
    </div>
  )
}

export default CartWidget;