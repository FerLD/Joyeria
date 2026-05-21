import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/Nosotros.css';

const Nosotros = () => {
    return (
        <section className="nosotros">
            <div className="nosotros-header">
                <span>NUESTRO EQUIPO</span>
                <h2>
                La esencia detrás de AuraDorada
                </h2>
                <p>  Un equipo apasionado por la elegancia, el diseño exclusivo y la creación de piezas que reflejan lujo y autenticidad.</p>
            </div>

            <div className="equipo-grid">
                {/* CARD */}
                <article className="miembro-card">
                    <div className="miembro-img">
                        <img src="/images/Yen.png" alt="" />
                    </div>
                    <div className="miembro-info">
                        <h3>Yenscenn Sujeith Barba Montaño</h3>
                        <p> Lidera la visión creativa de AuraDorada enfocándose en piezas exclusivas inspiradas en el lujo moderno. </p>
                    </div>
                </article>

                {/* CARD */}
                <article className="miembro-card">
                    <div className="miembro-img">
                        <img src="/images/Fer.png" alt="" />
                    </div>
                    <div className="miembro-info">
                        <h3>Fernando Lozano Duran </h3>
                        <p>Encargado de ofrecer una experiencia personalizada y exclusiva para cada cliente. </p>
                    </div>
                </article>

                {/* CARD */}
                <article className="miembro-card">
                    <div className="miembro-img">
                        <img src="/images/Agus.png" alt="" />
                    </div>
                    <div className="miembro-info">
                        <h3>Agustin Rodriguez Vega</h3>
                        <p>Encargada de ofrecer una experiencia personalizada y exclusiva para cada cliente. </p>
                    </div>
                </article>

                {/* CARD */}
                <article className="miembro-card">
                    <div className="miembro-img">
                        <img src="/images/Marco.png" alt="" />
                    </div>
                    <div className="miembro-info">
                        <h3>Marco Antonio Alvarado becerra</h3>
                        <p> Responsable de la identidad visual y dirección estética de cada colección premium. </p>
                    </div>
                </article>
            </div>

        </section>
    );
};

export default Nosotros;