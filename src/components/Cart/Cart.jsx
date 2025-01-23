import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./Cart.css"
import { Link } from "react-router-dom"


const Cart = () => {

    const {cart, precioTotal, borrarProductoId, borrarCarrito} = useContext(CartContext)

    if (cart.length === 0){
        return (
            <div className="carroVacio">
                <h3>No hay productos en tu carro de compras. ¡Sigue navegando y encuentra lo que buscas!</h3>
                <Link className="boton" to="/" >Ir a la página principal</Link>
            </div>
        )
    }

    return (
        <div className="carritoContainer">
            <ul className="cajaCarrito">
                {
                    cart.map((cartaProducto) => (
                        <li className="productoTarjeta" key={cartaProducto.id}>
                            <img src={cartaProducto.imagen} width={200} />
                            <p>{cartaProducto.nombre}</p>
                            <p>Cantidad: {cartaProducto.cantidad}</p>
                            <p>Precio unitario: ${cartaProducto.precio}</p>
                            <button className="botonBorrarProducto" onClick={() => borrarProductoId(cartaProducto.id)}>Eliminar producto</button>
                        </li>
                    ))
                }
            </ul>

            <h3 className="precioTotal">Precio total: {precioTotal()}</h3>
            <button className="botonBorrar" onClick={borrarCarrito} >Borrar todos los productos</button>
            <Link className="boton" to="/checkout" >Finalizar compra</Link>
        </div>
    )
}

export default Cart