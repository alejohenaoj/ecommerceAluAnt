import classes from "./ItemCount.module.css"
import { useState } from "react"

const ItemCount = ({initialValue = 1, stock, onAdd}) => {
  
  const [count, setCount] = useState(initialValue)
  
    const resta = () => {
      if(count > 1) {
        setCount(count => count - 1)
      }
    }

  const suma = () => {
    if(count < stock) {
      setCount(prev => prev + 1)
    }
  }

  return(
    <article>
      <div className={classes.contenedorTexto}>
        <p className={classes.texto}> comprar </p>
        <p className={classes.texto}> {count} </p>
      </div>
      <button onClick={resta}> - </button>
      <button onClick={() => onAdd(count)}> Agregar al carrito </button>
      <button onClick={suma}> + </button>
    </article>
  )
}

export default ItemCount