import classes from "./CardWidget.module.css"
import carritoCompras from './assets/carritoCompras.webp'

const CardWidget = () => {
    return (
        <button className={classes.cartButton}>
            <img src={carritoCompras} alt="carrito de compras aluminios antioquia" />
            0
        </button>
    )
}
export default CardWidget;