import { Link } from 'react-router-dom';
import '../index.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Modal from "../components/Modal";
function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const [lista, setLista] = useState([]);

    const obtenerLista = async () => {
        const res = await fetch("http://localhost:3000/carrito");
        const data = await res.json();
        setLista(data);
    }
    useEffect(() => {
        obtenerLista();
    }, []);


    return (
        <>
            <nav>
                <Link to="/">Productos</Link>
                <Link onClick={openModal}>Carrito</Link>
                <Link to="/login">Login</Link>
            </nav>

            {/* Carrito de compras */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>¡Bienvenido al carrito de compras!</h2>
                <p>Aqui se encontraran tus productos.</p>

                {lista.map(i => (
                    <li>{i.codigoProducto}</li>
                ))}

                <button onClick={closeModal}>Cerrar</button>
            </Modal>
        </>
    );
}
export default Header;