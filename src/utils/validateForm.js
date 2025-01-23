import { object, string, number } from "yup";

let userSchema = object({
    fullname: string().min(3, "El nombre tiene que tener 3 caracteres como minimo").required("El campo nombre es requerido"),
    phone: number().min(900000000).max(999999999).required() ,
    email: string().email().required("El campo email es requerido") ,
})

const validateForm = async (dataForm) => {
    try{
        await userSchema.validate(dataForm)
        return { status: "success", message: "Validaciones correctas"}
    } catch(error){
        return { status: "error", message: error.message}
    }
}

export default validateForm