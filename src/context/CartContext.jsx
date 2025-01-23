import { createContext,useState } from "react";
import { useEffect } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"))

    const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : [])

    useEffect(() => {
        localStorage.setItem("cart-ecommerce",JSON.stringify(cart))
    }, [cart])

    const añadirProducto = (nuevoProducto) => {
        const index = cart.findIndex((producto) => producto.id === nuevoProducto.id)
        if (index === -1){
            setCart([...cart, nuevoProducto])
        } else{
            const nuevoCarro = [...cart]
            nuevoCarro[index].cantidad = nuevoCarro[index].cantidad + nuevoProducto.cantidad
            setCart(nuevoCarro)
        }
    }

    const cantidadProductos = () => {
        const cantidad = cart.reduce((total, productoCarro) => total + productoCarro.cantidad , 0)
        return cantidad
    }

    const precioTotal = () => {
        const precio = cart.reduce((total,productoCarro) => total + productoCarro.precio*productoCarro.cantidad, 0 )
        return precio
    }

    const borrarProductoId = (idProducto) => {
        const filtroProductos = cart.filter( (cartaProducto) => cartaProducto.id !== idProducto)
        setCart(filtroProductos)
    }

    const borrarCarrito = () => {
        setCart([])
    }

    console.log(cart)

    return (
        <CartContext.Provider value={ {cart,añadirProducto, cantidadProductos, precioTotal, borrarProductoId, borrarCarrito } }>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}