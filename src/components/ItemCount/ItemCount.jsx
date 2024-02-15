import { useState } from "react";

const ItemCount = ({ añadirProducto }) => {
    const [contador, setContador] = useState(1)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-row align-items-center m-2 ">
                <button className="btn btn-primary border border-black" onClick={restar}><b>-</b></button>
                <p className="m-3 fs-4"><b>{contador}</b></p>
                <button className="btn btn-primary border border-black" onClick={sumar}><b>+</b></button>
            </div>
            <button className="btn bg-primary m-2 border border-black align-items-center d-block" onClick={() => añadirProducto(contador)}>
                <div>
                    <p className="text-white"><b>Añadir al carrito</b></p>
                </div>
            </button>

        </div>
    )
}

export default ItemCount