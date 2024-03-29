import classes from "./Checkout.module.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, documentId, getDocs, query, where, writeBatch, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {

    const [loading, setLoading] = useState(false)

    const [orderId, setOrderId] = useState(null)

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async({name, phone, email}) => {

        setLoading(true)
        
        try{

            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
    
            const batch = writeBatch(db)

            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const querySnapshot = await getDocs(productsCollection)
    
            const { docs } = querySnapshot
    
            docs.forEach(doc => {
    
                const data = doc.data()
    
                const stockDb = data.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
    
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity }) 
                } else {
                    outOfStock.push({ id: doc.id, ...data })
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const orderCollection = collection(db, 'orders')
    
                const { id } = await addDoc(orderCollection, objOrder)
                
                clearCart()

                setOrderId(id)
    
            } else {
                console.error('productos sin stock disponible')
            }
    
        } catch (error) {
            console.error('hubo un error en la generación de la orden')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1 className={classes.tituloH1}> Su orden está siendo generada... </h1>
    }

    if(orderId) {
        return <h1 className={classes.tituloH1}> El id de su orden es: {orderId} </h1>
    }

    return(
        <div className={classes.contenedorFormulario}>
            <h1 className={classes.tituloH1}> Información de envío </h1>
            < CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout