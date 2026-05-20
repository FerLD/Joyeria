import React, { useEffect, useRef, useState } from 'react';

import '../assets/css/Contacto.css';



const Contacto = () => {

  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');

useEffect(() => {

  const pedido = JSON.parse(
    localStorage.getItem('pedido')
  );

  if(pedido){

    setProducto(pedido.producto);
    setCantidad(pedido.cantidad);
    setPrecio(pedido.precio);

  }

}, []);

  const enviarWhatsApp = (e) => {

    e.preventDefault();

    const nombre = e.target.nombre.value;
    const mensaje = e.target.mensaje.value;

    const texto = `
✨ NUEVO PEDIDO - AuraDorada ✨

👤 Cliente: ${nombre}

💎 Producto: ${producto}

📦 Cantidad: ${cantidad}

💰 Precio:
$${precio} MXN

📝 Mensaje:
${mensaje}
`;

    window.open(
      `https://wa.me/4731657808?text=${encodeURIComponent(texto)}`,
      '_blank'
    );
  };

  return (

    <section className="contacto" id="contacto">
      <div className="contacto-header">
        <span>CONTACTO</span>
        <h2>
          Haz tu pedido exclusivo
        </h2>
        <p>
          Completa tu solicitud y nos pondremos en contacto contigo.
        </p>
      </div>

      <form
        className="contacto-form"
        onSubmit={enviarWhatsApp}
      >

        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          required
        />

        <input
          type="text"
          value={producto}
          readOnly
        />

        <input
          type="text"
          value={`${cantidad} pieza(s)`}
          readOnly
        />

        <input
          type="text"
          value={`$${precio} MXN`}
          readOnly
        />

        <textarea
          name="mensaje"
          placeholder="Mensaje adicional..."
        />

        <button type="submit">
          Enviar Pedido
        </button>

      </form>

    </section>
  );
};

export default Contacto;
