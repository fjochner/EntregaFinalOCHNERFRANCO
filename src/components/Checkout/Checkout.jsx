import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FormularioCheckout from "./FormularioCheckout";
import { CartContext } from "../../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import db from "../../db/db"
import Swal from 'sweetalert2'



const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        repetirEmail: "",
    })

    const { carrito, precioTotal, borrarTodo } = useContext(CartContext)

    const [idOrden, setIdOrden] = useState(null)

    const guardarDatosInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value })
    }

    const enviarOrden = (event) => {
        event.preventDefault()
        const orden = {
            comprador: { ...datosForm },
            productos: [...carrito],
            fecha: new Date(),
            estado: false,
            total: precioTotal(),
        }

        if (datosForm.email !== datosForm.repetirEmail) {
            Swal.fire({
                title: 'Error!',
                text: 'Los campos de Email deben ser iguales',
                icon: 'error',
                confirmButtonText: 'Reintentar'
            })
            return
        }

        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
            .then((respuesta) => {
                setDatosForm({
                    nombre: "",
                    telefono: "",
                    email: "",
                    repetirEmail: "",
                })

                setIdOrden(respuesta.id)
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            {idOrden ? (
                <div className="container p-5 text-center">
                    <img src="././img/Correcto.png" alt="Compra Exitosa" className="img-fluid mb-4 w-25" />
                    <h2>¡Compra realizada con éxito!</h2>
                    <p>Gracias por tu compra. Tu pedido ha sido procesado con éxito.</p>
                    <p>ID de seguimiento del pedido: {idOrden}</p>

                    <Link to="/">
                        <button className="btn btn-primary" onClick={borrarTodo}>Volver a la tienda</button>
                    </Link>
                </div>

            ) : (
                <FormularioCheckout
                    datosForm={datosForm}
                    guardarDatosInput={guardarDatosInput}
                    enviarOrden={enviarOrden}
                />
            )
            }

        </div>
    )

}

export default Checkout

