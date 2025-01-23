import "../Checkout/Checkout.css"

const FormCheckOut = ({dataForm, handleChangeInput, handleSubmitForm}) => {

    return (
        <form className="form" onSubmit={handleSubmitForm} >
            <label>Nombre completo</label>
            <input type="text" value = {dataForm.fullname} name="fullname" onChange={handleChangeInput} />

            <label>Número de celular</label>
            <input type="number" value = {dataForm.phone} name="phone" onChange={handleChangeInput} />

            <label>Correo electrónico</label>
            <input type="email" value = {dataForm.email} name="email" onChange={handleChangeInput} />

            <button className="botonEnviar" type="submit">Enviar orden</button>
        </form>
    )
}

export default FormCheckOut