import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./carrito.css";
import { Link } from "react-router-dom";

const Carrito = () => {
    const { carrito, precioTotal, borrarProducto, borrarTodo } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div className="text-center">
                <img src="/img/carrito-vacio.png" alt="Carro vacio" style={{ width: '70px', height: '70px' }} />
                <h2>NO HAY PRODUCTOS EN EL CARRITO</h2>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                {carrito.map((producto, index) => (
                    <div key={producto.id} className="col-12 mb-3">
                        <div className="card tarjeta">
                            <div className="card-body d-flex align-items-center">
                                <img src={producto.imagen} className="card-img-left" alt={producto.nombre} style={{ maxHeight: '200px', maxWidth: '150px' }} />
                                <div className="text-center flex-grow-1">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">Cantidad: {producto.cantidad}</p>
                                    <p className="card-text">${producto.precio}</p>
                                </div>
                                <button className="btn" onClick={() => borrarProducto(producto.id)}>
                                    <img src="/img/trash-icon.png" alt="Eliminar" style={{ width: '70px', height: '70px' }} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <p>Precio total: ${precioTotal()}</p>
                <button onClick={borrarTodo} className="btn btn-danger m-3">Eliminar todo</button>
                <Link to="/checkout">
                    <button className="m-3 btn btn-success">Continuar compra</button>
                </Link>
            </div>
        </div>
    );
};

export default Carrito;
