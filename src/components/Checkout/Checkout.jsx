import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import FormCheckOut from "./Form"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db"
import validateForm from "../../utils/validateForm.js"
import { toast } from 'react-toastify';
import "../Checkout/Checkout.css"
import { Link } from "react-router-dom"

const Checkout = () => {

    const [resumenCompra, setResumenCompra] = useState([])

    const [orderId, setOrderId] = useState(null)

    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const {cart, borrarCarrito, precioTotal} = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({...dataForm, [event.target.name]: event.target.value})
    }

    const uploadOrder = async (newOrder) => {
        try{
            const ordersRef = collection(db, "orders")
            const response = await addDoc(ordersRef, newOrder)
            setOrderId(response.id)
            borrarCarrito()
        } catch (error){
            console.log(error)
        }
    }
    
    const handleSubmitForm = async (event) => {
        event.preventDefault()
        const order = {
            buyer: {...dataForm},
            products: [...cart],
            total: precioTotal(),
            date: Timestamp.fromDate( new Date())
        }

        const response = await validateForm(dataForm)
        
        if(response.status === "success"){
            await uploadOrder(order)
        } else {
            toast.warning(response.message)
        }

        setResumenCompra([...cart])

        console.log(response)
    }

    return (
        <div>
            {
                orderId ? (
                    <div className="resumenCompra">
                        <h2>¡Gracias por tu compra!</h2>
                        <p>Estos son los datos de tu pedido</p>
                        <p>ID: {orderId}</p>
                        {
                            resumenCompra.map((producto) => (
                                <li className="resumenProducto">
                                    <p>{producto.nombre}</p>
                                    <p>Cantidad: {producto.cantidad}</p>
                                    
                                </li>
                            ))
                        }
                        <p>Precio total: {resumenCompra.reduce((total, producto) => total + producto.cantidad*producto.precio,0)}$</p>
                        <Link to="/" className="boton">Seguir comprando</Link> 
                    </div>
                ) : (
                    <FormCheckOut
                        dataForm = {dataForm}
                        handleChangeInput = {handleChangeInput}
                        handleSubmitForm = {handleSubmitForm}
                    />
                )
            }
        </div>
    )
}

export default Checkout