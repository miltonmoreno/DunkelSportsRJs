import useProductos from "../hooks/useProductos"
import { useState } from "react"

const hocFilterProductos = (Component) => {

    return function () {

        const {productos, cargando} = useProductos()
        const [query, setQuery] = useState("")

        const changeInput = (event) => {
            setQuery(event.target.value.toLowerCase())
        }

        const search = () => {
            const filtrarProductos = productos.filter(() => {
                
            })
        }

        return (
            <>
                <Component/>
            </>
        )
    }
}