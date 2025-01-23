import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import Loading from "../Loading/Loading.jsx"
import db from "../../db/db.js"
import { collection, getDocs } from "firebase/firestore"
import PaginaError from "../PaginaError/PaginaError.jsx"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const [loading, setLoading] = useState (true)

    const {idProducto} = useParams()

    const nombreColeccion = collection(db, "productosDunkel")
    const getProductos =  async () => {
        setLoading(true)
        try {
            const dataDb = await getDocs(nombreColeccion)
            const data = dataDb.docs.map((producto) => { return ({id: producto.id, ...producto.data()})})
            const findProduct = data.find((producto) => producto.id === idProducto)

            setProducto(findProduct)
        } catch (error){
            console.log (error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getProductos()
    }, [idProducto])

    return (
        <div>
        {
            loading === true ? (
                <Loading/>
            ) : producto ? (
                <ItemDetail producto={producto}/>
            ) : (
                <PaginaError/>
            )
        }
        </div>
    )
}

export default ItemDetailContainer