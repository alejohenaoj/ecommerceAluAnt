import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"

const ItemDetail = ({category, img, imgDescription, name, price, description, stock}) => {
  return(
    <article className={classes.detailProductContainer}>
      <img src={img} alt={imgDescription} />
      <div className={classes.infoDetailProduct}>
        <h2 className={classes.nameDetailProduct}> {name} </h2>
        <p className={classes.priceDetailProduct}> Precio: ${price} </p>
        <p className={classes.categoryProduct}> Materia prima: {category} </p>
        <p className={classes.categoryProduct}> Description: {description} </p>
        <p className={classes.categoryProduct}> Cantidad disponible: {stock}unds. </p>
        < ItemCount stock={stock} />
      </div>
    </article>
  )
}

export default ItemDetail