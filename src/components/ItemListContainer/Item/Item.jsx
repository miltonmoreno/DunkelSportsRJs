import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({producto}) => {
    return (
        <div className="card">
                <img src={producto.imagen}/>
                <p>{producto.nombre}</p>
                <p className="precio">${producto.precio}</p>
                <Link to={"/detail/"+producto.id} className="botonVerMas">Ver más</Link>
        </div>
    )
}

export default Item