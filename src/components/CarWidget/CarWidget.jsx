import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CarWidget.css"
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CarWidget = () => {

    const { cantidadProductos } = useContext(CartContext)

    const cantidad = cantidadProductos()

    return (
        <Link to="/carrito" className="iconoCarrito">
            <MdOutlineShoppingCart size="30px" color="white"/>
            <span className="contador" style={ {background: cantidad === 0 ? `none` : undefined }} >{cantidad === 0 ? "" : cantidad}</span>
        </Link>
    )
}

export default CarWidget