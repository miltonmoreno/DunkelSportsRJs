import { TbFaceIdError } from "react-icons/tb";
import "../PaginaError/PaginaError.css"

const PaginaError = () => {

    return (
        <div className="errorContainer">
            <TbFaceIdError className="iconoError"/>
            <h2>¡No somos nosotros, eres tú!</h2>
            <p>Ingresa un enlace válido para dirigirte a uno de nuestros productos</p>
        </div>
    )
}

export default PaginaError