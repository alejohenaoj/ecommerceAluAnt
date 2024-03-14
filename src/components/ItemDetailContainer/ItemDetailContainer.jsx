import { useEffect, useState } from "react"
import classes from "../ItemListContainer/ItemListContainer.module.css"
import { getProductsById } from "../../asyncMock.js"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {
    getProductsById(itemId)
      .then(result => {
        setProduct(result)
      })
      .catch(error => {
        console.log(error)
      })
  }, [itemId])

  return(
    <main>
      <h1 className={classes.tituloH1}> Detalle del Producto </h1>
      < ItemDetail {...product} />
    </main>
  )
}

export default ItemDetailContainer