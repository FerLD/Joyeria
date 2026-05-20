import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/Contacto.css';

const Contacto = () => {
    return (
        <div className="contacto">
            <h1>Contacto</h1>
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" />
                </label>
                <label>
                    Mensaje:
                    <textarea name="mensaje" />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;

