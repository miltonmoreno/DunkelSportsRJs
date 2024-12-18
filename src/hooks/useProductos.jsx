import { useState, useEffect } from "react";
import { getProductos } from "../data/data";

const useProductos = () => {

    const [productos, setProductos] = useState ([])

    const [cargando, setCargando] = useState(false)

    useEffect(()=>{
        setCargando(true)
        getProductos()
            .then((data) => {
                setProductos(data)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(()=> {
                setCargando(false)
            })
    }, [])

    return{ productos, cargando }
}

export default useProductos