import { useState } from 'react';
import Header from '../components/Header';
import '../index.css'
function Login(){
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    function enviarDatos (){
        
        alert("Usuario: " + usuario);    
        alert("Password: " + password)    
    };
    return(
        <>
        <Header/>
        <div className='contenedor-login'>

         <h1>Login</h1>
            <form className='formularioLogin'>
                <label>
                    Usuario:
                    <input type="text" name="name" value={usuario}  onChange={(e) => setUsuario(e.target.value)}/>
                </label>
                <br />
                <label>
                    Contraseña:
                    <input type="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br />
                <button onClick={enviarDatos} type="button">Enviar Datos</button>
            </form>
        </div>
        </>
    )
}
export default Login;