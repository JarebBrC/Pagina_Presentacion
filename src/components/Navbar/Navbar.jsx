import React, { useState } from "react";
import "./Navbar.css";
import LogoTmm from "../../assets/LogoTmm.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  

  function toggleMenu(){
    setMenuOpen(!menuOpen);
  }


  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        <img className="navbar__logo-img" src={LogoTmm} alt="Logo Toma Mi Mano" />
      </a>

      <button className="navbar__burger" onClick={toggleMenu}>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>

      <ul className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/nosotros">Nosotros</a></li>
        <li><a href="/proyectos">Proyectos</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li className="navbar__diccionario">
          <a href="/diccionario">Diccionario →</a>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };