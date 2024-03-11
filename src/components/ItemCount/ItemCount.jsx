import { useState } from "react"

const ItemCount = ({inicial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(inicial)

    const suma = () => {
        if(count < stock) {
            setCount(prev => prev + 1)
        }
    }

    const resta = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }

    return(
        <article>
            <h3> {count} </h3>
            <button onClick={suma}> + </button>
            <button onClick={() => onAdd(count)}> Agregar al carrito </button>
            <button onClick={resta}> - </button>
        </article>
    )
}

export default ItemCount