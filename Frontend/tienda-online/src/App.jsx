import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clientes from './pages/Clientes';
import Home from './pages/Home';
import Compras from './pages/Compras';
import Productos from './pages/Productos';
import Proveedores from './pages/Proveedores';
function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/proveedores" element={<Proveedores />} />
      </Routes>
    </Router>

  );
}

export default App;
