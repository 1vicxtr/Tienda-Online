import { Link } from 'react-router-dom';
import '../index.css'
import { useState } from 'react';
import Modal from "../components/Modal";
function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                <button onClick={closeModal}>Cerrar</button>
            </Modal>
        </>
    );
}
export default Header;