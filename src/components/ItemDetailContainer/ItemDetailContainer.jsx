import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getProductos } from "../../data/data.js"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import Loading from "../Loading/Loading.jsx"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    const {idProducto} = useParams()

    const [cargando, setCargando] = useState(false)

    useEffect(()=>{
        setCargando(true)
        getProductos()
            .then((data) => {
                const encontrarProducto = data.find((productoEncontrado)=> productoEncontrado.id === idProducto)
                setProducto(encontrarProducto)
            })
            .finally(()=> {
                setCargando(false)
            })
    }, [])

    return (
        <div>
            {
            cargando === true ? (
                <Loading/>
            ): (
                <ItemDetail producto={producto}/>
            )
            }
        </div>
    )
}

export default ItemDetailContainer