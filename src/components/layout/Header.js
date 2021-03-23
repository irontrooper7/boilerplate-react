import React from "react"
import { Link } from "react-router-dom"

const Header = () => (
    <header className="header">
        <div className="container">
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/form">Formulario</Link></li>
                        <li><Link to="/gallery">Galeria</Link></li>
                    </ul>
                </nav>
                <button className="hamburguer">
                    <span></span>
                </button>
            </div>
        </div>
    </header>
)

export default Header