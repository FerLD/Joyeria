import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // efecto al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

    <div className="nav-container">

        <div className="logo">
            <img src="src/assets/images/Icon-AD.png" className="Icon-AD"/>
            Aura<span>Dorada</span>
        </div>

        {/* MENU */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="link active">Inicio</Link>
        <Link to="/catalogo" className="link">Catálogo</Link>
        <Link to="/nosotros" className="link">Nosotros</Link>
        <Link to="/contacto" className="link">Contacto</Link>
        </nav>

        {/* HAMBURGUESA */}
        <div 
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        >
        <span></span>
        <span></span>
        <span></span>
        </div>

    </div>
    </header>
  );
};

export default Navbar;