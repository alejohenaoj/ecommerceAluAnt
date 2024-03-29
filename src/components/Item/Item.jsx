import classes from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({category, img, imgDescription, name, price, id}) => {

  const handleClick = (e) => {
    e.stopPropagation()
  }

  return(
    <article onClick={handleClick} className={classes.productContainer}>
      <img src={img} alt={imgDescription} />
      <div className={classes.infoProduct}>
        <h2 className={classes.nameProduct}> {name} </h2>
        <p className={classes.priceProduct}> Precio: ${price} </p>
        <p className={classes.categoryProduct}> Materia prima: {category} </p>
        <Link to={`/item/${id}`} className={classes.detailProduct}> ver detalle </Link>
      </div>
    </article>
  )
}

export default Item