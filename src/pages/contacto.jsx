
import '../assets/css/Inicio.css';


<section className="contacto">
  <div className="contacto-container">

    <div className="contacto-info">
      <span className="contacto-subtitulo">
        Joyería Exclusiva
      </span>

      <h2>Contáctanos</h2>

      <p>
        Estamos listos para ayudarte a encontrar la joya perfecta.
        Escríbenos y recibe atención personalizada para resolver
        tus dudas, pedidos especiales o cotizaciones.
      </p>

      <div className="contacto-datos">
        <div className="dato">
          <i className="bi bi-telephone-fill"></i>
          <span>+52 477 123 4567</span>
        </div>

        <div className="dato">
          <i className="bi bi-envelope-fill"></i>
          <span>contacto@auradorada.com</span>
        </div>

        <div className="dato">
          <i className="bi bi-geo-alt-fill"></i>
          <span>León, Guanajuato, México</span>
        </div>
      </div>
    </div>

    <form className="contacto-form">

      <div className="input-group">
        <input
          type="text"
          placeholder="Tu nombre"
          required
        />
      </div>

      <div className="input-group">
        <input
          type="email"
          placeholder="Tu correo"
          required
        />
      </div>

      <div className="input-group">
        <textarea
          placeholder="Escribe tu mensaje"
          rows="6"
          required
        ></textarea>
      </div>

      <button type="submit">
        Enviar Mensaje
      </button>

    </form>

  </div>
</section>