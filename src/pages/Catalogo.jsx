import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Catalogo.css';

const Catalogo = () => {

  const [productoActivo, setProductoActivo] = useState(null);
  const [cantidad, setCantidad] = useState(1);
const navigate = useNavigate();
  const productos = [
    {
        id: 1,
        nombre: 'Anillo Imperial',
        categoria: 'Anillos Premium',
        precio: 2499,
        imagen: 'src/assets/images/Producto4.png',
        descripcion: 'Diseño refinado con acabado brillante inspirado en la alta joyería contemporánea.',
        material: 'Oro 18K',
        piedra: 'Diamante Premium',
        garantia: '12 meses',
        limite: 4
    },
    {
        id: 2,
        nombre: 'Collar Étoile',
        categoria: 'Luxury Collection',
        precio: 3199,
        imagen: 'src/assets/images/Producto3.png',
        descripcion: 'Elegancia minimalista diseñada para complementar estilos sofisticados.',
        material: 'Oro Blanco',
        piedra: 'Zafiro',
        garantia: '18 meses',
        limite: 4
    },
    {
        id: 3,
        nombre: 'Aretes Royale',
        categoria: 'Edición Exclusiva',
        precio: 1899,
        imagen: 'src/assets/images/Producto 6.png',
        descripcion: 'Inspirados en la joyería clásica con acabados modernos premium.',
        material: 'Plata Italiana',
        piedra: 'Cristal Swarovski',
        garantia: '6 meses',
        limite: 4
    },
    {
        id: 4,
        nombre: 'Anillo Imperial',
        categoria: 'Anillos Premium',
        precio: 2499,
        imagen: 'src/assets/images/Producto4.png',
        descripcion: 'Diseño refinado con acabado brillante inspirado en la alta joyería contemporánea.',
        material: 'Oro 18K',
        piedra: 'Diamante Premium',
        garantia: '12 meses',
        limite: 4
    },
    {
        id: 5,
        nombre: 'Collar Étoile',
        categoria: 'Luxury Collection',
        precio: 3199,
        imagen: 'src/assets/images/Producto3.png',
        descripcion: 'Elegancia minimalista diseñada para complementar estilos sofisticados.',
        material: 'Oro Blanco',
        piedra: 'Zafiro',
        garantia: '18 meses',
        limite: 4,
    },
    {
        id: 6,
        nombre: 'Aretes Royale',
        categoria: 'Edición Exclusiva',
        precio: 1899,
        imagen: 'src/assets/images/Producto2.png',
        descripcion: 'Inspirados en la joyería clásica con acabados modernos premium.',
        material: 'Plata Italiana',
        piedra: 'Cristal Swarovski',
        garantia: '6 meses',
        limite: 4
    }
  ];

    const abrirModal = (producto) => {
        setProductoActivo(producto);
        setCantidad(1);
    };

  return (
    <section className="catalogo">

        <div className="catalogo-header">
            <span>JOYERÍA EXCLUSIVA</span>
            <h2>Colección Destacada</h2>
            <p> Diseños sofisticados inspirados en la elegancia moderna y el lujo. </p>
        </div>

      <div className="catalogo-grid">

        {productos.map((producto) => (
        <article className="card" key={producto.id}>

            <div className="card-img">
                <img src={producto.imagen} alt={producto.nombre} />
            </div>

            <div className="card-info">
                <span>{producto.categoria}</span>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <button onClick={() => abrirModal(producto)}>
                    Explorar Más
                </button>
            </div>
        </article>
        ))}
    </div>


    {productoActivo && (
        <div className="floating-menu">
            <div className="floating-card">
                <button className="cerrar" onClick={() => setProductoActivo(null)} >
                    ✕
                </button>

                <div className="floating-img">
                    <img src={productoActivo.imagen} alt={productoActivo.nombre}/>
                </div>

                <div className="floating-info">
                    <span>{productoActivo.categoria}</span>
                    <h2>{productoActivo.nombre}</h2>
                    <p>{productoActivo.descripcion}</p>

                    <div className="specs">
                        <div>
                            <strong>Material</strong>
                            <p>{productoActivo.material}</p>
                        </div>

                        <div>
                            <strong>Piedra</strong>
                            <p>{productoActivo.piedra}</p>
                        </div>

                        <div>
                            <strong>Garantía</strong>
                            <p>{productoActivo.garantia}</p>
                        </div>
                    </div>

                <div className="precio-row">
                    <h3 className="precio">
                        ${productoActivo.precio} MXN
                    </h3>
                    
                    <span className="limite-texto">
                        Máx. {productoActivo.limite} piezas
                    </span>

                    </div>
                        <div className="cantidad">
                            <button
                                onClick={() =>
                                cantidad > 1 &&
                                setCantidad(cantidad - 1)}>-
                            </button>
                            <span>{cantidad}</span>
                            <button
                                disabled={cantidad >= productoActivo.limite}
                                onClick={() =>
                                cantidad < productoActivo.limite &&
                                setCantidad(cantidad + 1)}>+
                            </button>
                        </div>

            
                    <div className="total">
                        Total:
                        <strong>
                        ${productoActivo.precio * cantidad} MXN
                        </strong>
                    </div>
    
                    <button className="comprar" onClick={() => {localStorage.setItem('pedido',
                            JSON.stringify({
                            producto: productoActivo.nombre,
                            cantidad,
                            precio: productoActivo.precio * cantidad
                            })
                        );navigate('/contacto');}}>
                        Hacer Pedido
                    </button>
                </div>
            </div>
        </div>
    )}

    </section>
);
};

export default Catalogo;