import { useState, useEffect } from "react"
import { getProductos } from "../../data/data"
import ItemList from "./ItemList/ItemList"
import "./ItemListContainer.css"
import useProductos from "../../hooks/useProductos"
import {PropagateLoader} from "react-spinners"
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading"

const ItemListContainer = () => {

    const {idCategory} = useParams()

    const [productos, setProductos] = useState ([])

    const [cargando, setCargando] = useState(false)

    useEffect(()=>{
        setCargando(true)
        getProductos()
            .then((data) => {
                if(idCategory){
                    const productosFiltrados = data.filter((producto) => producto.categoria === idCategory)
                    setProductos(productosFiltrados)
                } else {
                    setProductos(data)
                }
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(()=> {
                setCargando(false)
            })
    }, [idCategory])

    return(
        <div className="container">
            {
                cargando === true ? (
                    <Loading/>
                ): (
                    <ItemList productos={productos} />
                )
            }
        </div>
    )

}

export default ItemListContainer
