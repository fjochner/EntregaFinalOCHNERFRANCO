const FormularioCheckout = ({ datosForm, guardarDatosInput, enviarOrden }) => {
    return (
        <form onSubmit={enviarOrden} className="container">
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input type="number" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="repetir-email">Repetir Email</label>
                <input type="email" id="repetir-email" name="repetirEmail" value={datosForm.repetirEmail} onChange={guardarDatosInput} className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary m-3">Enviar orden</button>
        </form>

    )
}

export default FormularioCheckout