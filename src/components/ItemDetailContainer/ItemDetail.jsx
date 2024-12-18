import "./ItemDetailContainer.css"

const ItemDetail = ({producto}) => {

    return(
        <div className="itemDetail">
            <div className="imagenProducto">
                <img src={producto.imagen} /> 
            </div>
            <div className="textoDetalle">
                <h2 className="tituloDetalle">{producto.nombre}</h2>
                <p className="descripcionDetalle">{producto.descripcion}</p>
                <p className="precioDetalle">Precio: ${producto.precio}</p>
            </div>
        </div>
    )
}

export default ItemDetail