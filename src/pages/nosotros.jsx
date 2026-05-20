import '../assets/css/Inicio.css';
puto
const Nosotros2 = () => {
  return (
    <section className="nosotros">
      <div className="nosotros-container">

        <div className="nosotros-texto">
          <span className="nosotros-subtitulo">
            Sobre Nosotros
          </span>

          <h2>Pasión por la Elegancia</h2>

          <p>
            En Aura Dorada nos especializamos en ofrecer joyería
            elegante y exclusiva para cada ocasión.
          </p>

          <p>
            Contamos con un equipo comprometido en ofrecer la mejor
            atención y ayudarte a encontrar la joya perfecta.
          </p>
        </div>

        <div className="equipo">

          <div className="card-persona">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Integrante 1"
            />
            <h3>María González</h3>
            <span>Diseñadora de Joyas</span>
          </div>

          <div className="card-persona">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Integrante 2"
            />
            <h3>Carlos Ramírez</h3>
            <span>Asesor Comercial</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Nosotros;