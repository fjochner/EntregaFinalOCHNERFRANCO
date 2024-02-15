import { Link } from "react-router-dom";
import "./Item.css"
import React from "react";

const Item = React.memo(({ producto }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card tarjeta">
        <img src={producto.imagen} alt={producto.nombre} className="card-img-top img-fluid" />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">${producto.precio}</p>
          <Link to={`/detalle/${producto.id}`} className="btn btn-primary">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.producto.id === nextProps.producto.id
});

export default Item;