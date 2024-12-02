import "./CarWidget.css"
import { MdOutlineShoppingCart } from "react-icons/md";

const CarWidget = () => {

    return (
        <div className="iconoCarrito">
            <MdOutlineShoppingCart size="30px" color="white"/>
            <span className="contador">4</span>
        </div>
    )
}

export default CarWidget