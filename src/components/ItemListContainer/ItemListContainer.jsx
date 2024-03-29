import ItemList from "../ItemList/ItemList";
import classes from "./ItemListContainer.module.css"
import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig.js"
import { getDocs, collection, query, where } from "firebase/firestore"
import { useNotification } from "../../notification/hooks/useNotification.js";

const ItemListMemoized = memo(ItemList)

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState()

  const [render, setRender] = useState(false)

  const { categoryId } = useParams()

  const { showNotification } = useNotification()

  useEffect(() => {
    setTimeout(() => {
      setRender(prev => !prev)
    }, 2000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setRender(prev => !prev)
    }, 2000)
  }, [])

  useEffect(() => {

    const productsCollection = categoryId ? (
      query(collection(db, 'products'), where('category', '==', categoryId))
    ) : (
      collection(db, 'products')
    )

    getDocs(productsCollection)
      .then(querySnapshot => {
        const productsAdapted = querySnapshot.docs.map(doc => {
          const data = doc.data()

          return { id: doc.id, ...data }
        })
        
        setProducts(productsAdapted)

      })
      .catch(() => {
        showNotification('error', 'Hubo un error cargando los productos')
      })
  }, [categoryId])
    
  return (
    <main>
      <h1 className={classes.tituloH1}> {greeting} </h1>
      <div className={classes.contenedorItems}>
        < ItemListMemoized products={products} />
      </div>
    </main>
  )
}

export default ItemListContainer;