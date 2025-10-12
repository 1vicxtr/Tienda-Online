import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Compras from './pages/Compras';
import Productos from './pages/Productos';
import Login from './pages/Login';
function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Productos/>} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
