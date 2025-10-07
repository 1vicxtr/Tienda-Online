import { Link } from 'react-router-dom';
import '../index.css'
function Header() {
    return (
       <nav>
          <Link to="/">Inicio</Link>        
          <Link to="/clientes">Clientes</Link>
          <Link to="/compras">Compras</Link>  
          <Link to="/productos">Productos</Link>   
          <Link to="/proveedores">Proveedores</Link>          
        </nav>
        
    );
}
export default Header;