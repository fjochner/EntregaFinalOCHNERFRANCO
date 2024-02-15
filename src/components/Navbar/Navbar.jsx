import React from 'react'
import CartWidget from './CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/"><span className="navbar-brand">WAREHOUSE</span></Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className='m-3'>
              <Link to="/categoria/biblioteca">Bibliotecas</Link>
            </li>
            <li className='m-3'>
              <Link to="/categoria/rack">Rack TV</Link>
            </li>
            <li className='m-3'>
              <Link to="/categoria/escritorio">Escritorios</Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default Navbar