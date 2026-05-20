import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Inicio.css';

const Inicio = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <main className="inicio">

      {/* PORTADA */}
      <section className="portada">
        <div className="contenido">
          <div className="texto">
            <img src="src/assets/images/AuraDorada.png" />
            <p>¡Para joyas únicas que realzan tu estilo y te acompañan a lo largo de tu vida!</p>
            <button className="btn">Contáctanos</button>
          </div>

          <div className="imagen">
            <img src="src/assets/images/Producto4.png" alt="joya" />
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="Productos">
        <h2>Productos Destacados</h2>
        <div className="grid-productos">

          <div className="producto">
            <img src="src/assets/images/Producto1.png" alt="Producto 1" />
            <h3>Relicario de oro</h3>
            <p>Un relicario elegante de oro con diseño moderno en forma de corazón.</p>
          </div>

          <div className="producto">
            <img src="src/assets/images/Producto2.png" alt="Producto 2" />
            <h3>Pulsera de Oro</h3>
            <p>Una pulsera de oro con un diseño clásico y atemporal.</p>
          </div>

          <div className="producto">
            <img src="src/assets/images/Producto3.png" alt="Producto 3" />
            <h3>Collar de oro</h3>
            <p>Un collar de oro con un diseño clásico.</p>
          </div>

        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section 
        className={`caracteristicas ${visible ? "show" : ""}`} 
        ref={sectionRef}
      >
        <div className="caracteristicas-wrapper">

          <div className="caracteristicas-img">
            <img src="src/assets/images/Modelo1.png" alt="modelo" />
          </div>

          <div className="caracteristicas-content">
            <h2>¿Por qué elegir Aura Dorada?</h2>

            <div className="caracteristicas-container">

              <div className="caracteristica">
                <h4>Oro laminado 18K </h4>
                <span className="linea"></span>
                <p>Piezas auténticas de calidad.</p>
              </div>

              <div className="caracteristica">
                <h4>Diseño Exclusivo</h4>
                <span className="linea"></span>
                <p>Creaciones únicas que destacan tu estilo.</p>
              </div>

              <div className="caracteristica">
                <h4>Durabilidad Premium</h4>
                <span className="linea"></span>
                <p>Materiales pensados para toda la vida.</p>
              </div>

              <div className="caracteristica">
                <h4>Envío Seguro</h4>
                <span className="linea"></span>
                <p>Entrega protegida y confiable.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* INFO EXTRA */}
      <section className="info-extra">
        <div className="info-container">

          <div className="info-item">
            <div className="info-icon">✦</div>
            <h3>Envíos a todo México</h3>
            <i className="bi bi-truck"></i>
            <p>Entrega segura y puntual a cualquier parte del país.</p>
          </div>

          <div className="info-item">
            <div className="info-icon">✦</div>
            <h3>Pagos seguros</h3>
            <i className="bi bi-credit-card-2-back"></i>
            <p>Métodos confiables y protegidos para tu tranquilidad.</p>

            <div className="pagos">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>PayPal</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">✦</div>
            <h3>Atención personalizada</h3>
            <i className="bi bi-person-check"></i>
            <p>Te acompañamos en cada detalle para una experiencia única.</p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Inicio;