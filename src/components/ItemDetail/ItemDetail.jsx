import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false)
  // const [compraRealizada, setCompraRealizada] = useState(false);
  const { añadirProductoAlCarrito } = useContext(CartContext)

  const handleCompraClick = () => {
    setCompraRealizada(true);
  };

  const añadirProducto = (contador) => {
    setToggle(true);
    const productoCarrito = { ...producto, cantidad: contador }
    añadirProductoAlCarrito(productoCarrito)
  };

  return (
    <div className="card d-flex flex-row tarjeta">
      <img src={producto.imagen} alt={producto.nombre} className="card-img-left img-fluid" />
      <div className="card-body">
        <h2 className="card-title"><b>{producto.nombre}</b></h2>
        <h3 className="card-text">${producto.precio}</h3>
        <p className="card-text text-center">{producto.stock}</p>
        <p className="card-text"><small className="text-muted">Medidas: {producto.medidas}</small></p>
        {/*         <Link to={`/compra-realizada`} className="btn btn-primary" onClick={handleCompraClick}>
            Comprar
        </Link> */}
        {toggle ? (
          <Link to="/carrito" className="btn btn-primary w-100">Ir al carrito</Link>
        ) : (
          <ItemCount stock={producto.stock} añadirProducto={añadirProducto} />
        )}
      </div>
    </div>

  );
};

export default ItemDetail;