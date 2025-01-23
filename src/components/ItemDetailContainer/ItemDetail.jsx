import "./ItemDetailContainer.css"
import ItemCounter from "../ItemCounter/ItemCounter"
import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({producto}) => {

    const [mostrarItemCount, setMostrarItemCount] = useState(true)

    const { añadirProducto } = useContext(CartContext)

    const añadirProductoCarrito = (count) => {
        const cartaProducto = {...producto, cantidad: count}
        añadirProducto(cartaProducto)
        setMostrarItemCount(false)
    }

    return(
        <div className="itemDetail">
            <div className="imagenProducto">
                <img src={producto.imagen} /> 
            </div>
            <div className="textoDetalle">
                <h2 className="tituloDetalle">{producto.nombre}</h2>
                <p className="descripcionDetalle">{producto.descripcion}</p>
                <p className="precioDetalle">Precio: ${producto.precio}</p>
                {
                    mostrarItemCount === true ? (
                        <ItemCounter stock={producto.stock} añadirProductoCarrito={añadirProductoCarrito} />
                    ) : (
                        <Link to="/carrito" className="terminarCompra">Terminar mi compra</Link>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail