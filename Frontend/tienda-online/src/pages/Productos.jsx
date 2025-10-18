import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Productos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/productos')
            .then(response => { setProductos(response.data); })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            });
    }, []);
    const carrito = () => {
        alert("Producto añadido al carrito");
    };
    return (
        <>
            <Header />
            <div className="container-home">
                <h1>Página de Productos</h1>
                <p>Aquí se mostrarán los productos disponibles en la tienda.</p>
                <div className="productos-list">
                    {productos.map(producto => (
                        <div key={producto.codigoproducto} className="producto-item">
                            <h2>{producto.nombre}</h2>
                            <p>Precio: ${producto.precio}</p>
                            <p>Existencia: {producto.numeroexistencias}</p>
                            <button onClick={carrito}>Añadir al carrito</button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Productos;