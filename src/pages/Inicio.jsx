import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Inicio.css';

const Inicio = () => {
 return (
    <main className="inicio">

        <section className="portada">
            <div className="contenido">
                <div className="texto">
                    <img src="src/assets/images/AuraDorada.png"/>
                    <p> ¡Para joyas únicas que realzan tu estilo y te acompañan a lo largo de tu vida! </p>
                    <button className="btn">Contáctanos</button>
                </div>

                <div className="imagen">
                    <img src="src/assets/images/Producto4.png"  alt="joya" />
                </div>
            </div>
        </section>


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
                    <h3>Collar de Oro</h3>
                    <p>Un collar de oro con un diseño clásico y atemporal.</p>
                </div>
                <div className="producto">
                    <img src="src/assets/images/Producto3.png" alt="Producto 3" />
                    <h3>Pulsera de Plata</h3>
                    <p>Una pulsera de plata con detalles delicados y elegantes.</p>
                </div>
            </div>
        </section>


<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
    </main>
  );
};

export default Inicio;