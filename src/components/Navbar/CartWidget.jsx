import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'




const CartWidget = () => {



  const { cantidadTotal } = useContext(CartContext)

  return (
    <Link to="/carrito">
      <div to="/carrito" className="cart-widget">
        <i className="fas fa-shopping-cart"></i>
        <span className='badge bg-primary text-wrap'> {cantidadTotal() != 0 ? cantidadTotal() : ""} </span>
      </div>
    </Link>

  )
}

export default CartWidget