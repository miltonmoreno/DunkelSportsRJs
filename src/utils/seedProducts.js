import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";
import { productos } from "../data/data.js";

const seedProducts = async () => {
    try {
        const productsRef = collection(db, "productosDunkel")
        productos.map(async ({id, ...producto}) =>  {
            await addDoc(productsRef, producto)
            console.log("Operación exitosa!")
        })
    } catch (error) {
        console.log(error)
    }
}

seedProducts()