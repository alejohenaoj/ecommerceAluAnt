import ItemDetail from "../ItemDetail/ItemDetail"
import classes from "./ItemDetailContainer.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig.js"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {

    const productDoc = doc(db, 'products', itemId)

    getDoc(productDoc)
      .then(queryDocumentSnapshot => {

        const data = queryDocumentSnapshot.data()

        const productAdapted = { id: queryDocumentSnapshot.id, ...data }

        setProduct(productAdapted)

      })
      .catch(error => {
        console.error(error)
      })
  }, [itemId])

  return(
    <main>
      <h1 className={classes.tituloH1}> Detalle del Producto </h1>
      <div>
        < ItemDetail {...product} />
      </div>
    </main>
  )
}

export default ItemDetailContainer