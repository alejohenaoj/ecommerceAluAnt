import Item from "../Item/Item"
import classes from "./ItemList.module.css"

const ItemList = ({ products }) => {
  return(
    <section className={classes.productsContainer}>
      {
        products.map(product => {
          return < Item key={product.id} {...product} />
        })
      }
    </section>
  )
}

export default ItemList