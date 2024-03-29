import { useEffect, useState } from "react";
import classes from "./ItemListContainer.module.css"
import { getProducts, getProductsByCategory } from "../../asyncMock.js";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {

    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId)
      .then(result => {
        setProducts(result)
      })
      .catch(error => {
        console.log(error)
      })
  }, [categoryId])
    
  return (
    <main>
      <h1 className={classes.tituloH1}> {greeting} </h1>
      < ItemList products={products} />
    </main>
  )
}

export default ItemListContainer;