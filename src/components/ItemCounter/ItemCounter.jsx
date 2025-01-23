import { useState } from "react"
import "./ItemCounter.css"

const ItemCounter = ({stock, añadirProductoCarrito}) => {

    const [count,setCount] = useState(1)

    const handleClickRemove = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleClickAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div className="editarContador">
            <button onClick={handleClickRemove}>-</button>
            <p>{count}</p>
            <button onClick={handleClickAdd}>+</button>
            <button onClick={() => añadirProductoCarrito(count)} className="agregarCarrito">Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter