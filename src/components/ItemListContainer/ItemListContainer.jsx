import { useState, useEffect } from "react"
import ItemList from "./ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db"
import Loading from "../Loading/Loading"

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)

    const {idCategory} = useParams()

    const [productos, setProductos] = useState ([])

    const nombreColeccion = collection(db, "productosDunkel")
    const getProductos =  async () => {

        setLoading(true)
        try {
            const dataDb = await getDocs(nombreColeccion)
            const data = dataDb.docs.map((producto) => { return ({id: producto.id, ...producto.data()})})

            setProductos(data)
        } catch (error){
            console.log (error)
        } finally {
            setLoading(false)
        }

    }

    const getProductosByCategoria = async() => {
        setLoading(true)
        try {
            const q = query(nombreColeccion, where("categoria", "==", idCategory) )
            const dataDb = await getDocs(q)
            const data = dataDb.docs.map((producto) => { return ({id: producto.id, ...producto.data()})})
            setProductos(data)
        }catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{

        if (idCategory) {
            getProductosByCategoria()
        } else {
            getProductos()
        }
        
    }, [idCategory])

    return(
        <div className="container">
            {
                loading === true ? (
                    <Loading/>
                ): (
                    <ItemList productos={productos} />
                )
            }
        </div>
    )

}

export default ItemListContainer
