import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-brand">
          <h2 className="logo">
            Aura<span>Dorada</span>
          </h2>
          <p>Elegancia que trasciende el tiempo.</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Explorar</h4>
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        {/* CONTACTO */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>📍 Guanajuato, México</p>
          <p>📞 +52 123 456 7890</p>
          <p>✉️ contacto@auradorada.com</p>
        </div>

      </div>

      {/* LÍNEA FINAL */}
      <div className="footer-bottom">
        <p>© 2026 Aura Dorada. Todos los derechos reservados.</p>
      </div>

    </footer>
  );
};

export default Footer;